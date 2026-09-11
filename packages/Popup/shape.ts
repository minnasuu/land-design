// ============================================================================
// 气泡形状工具（clip-path 一体成型切割）
// @description Popup / Tooltip 共用的轮廓与箭头几何算法，与具体组件无关
// @author Land Design System
// ============================================================================

import { ArrowRadiusLevel, ArrowSize, ARROW_RADIUS_LEVELS, PopupPlacement } from './props';

// ─── 箭头几何常量（px）：按密度预设分档，不随圆角档位变化 ───
// medium：常规气泡（Popup 默认）；small：紧凑提示（Tooltip 默认）
const ARROW_SIZES: Record<ArrowSize, { height: number; base: number; join: number }> = {
    medium: { height: 8, base: 14, join: 6 },
    small: { height: 6, base: 11, join: 4 },
};
// 根部衔接圆角的最小值：用于约束尖端圆角上限，避免两端圆角重叠导致形状畸变
const ARROW_MIN_JOIN_RADIUS = 1;

/** 箭头几何：ah-凸出长度、hb-底边半宽、tipR-尖端圆角、joinBase/joinSide-根部曲线的主体边段/斜边段 */
export type ArrowGeometry = {
    ah: number;
    hb: number;
    tipR: number;
    joinBase: number;
    joinSide: number;
};

/**
 * 解析箭头几何：箭头尺寸固定，尖端圆角由档位决定。
 * 根部衔接曲线拆为两段：
 * - joinBase（主体边段）固定不变，保证箭头与主体连接处的曲度恒定；
 * - joinSide（斜边段）随尖端圆角自适应收缩，避免与尖端圆角重叠。
 */
export function getArrowGeometry(
    level: ArrowRadiusLevel,
    size: ArrowSize = 'medium',
): ArrowGeometry {
    const { height, base, join } = ARROW_SIZES[size] ?? ARROW_SIZES.medium;
    const ah = height;
    const hb = base / 2;
    const edge = Math.hypot(hb, ah);
    const levelRadius = ARROW_RADIUS_LEVELS[level] ?? ARROW_RADIUS_LEVELS.medium;
    const tipR = Math.max(0, Math.min(levelRadius, edge - ARROW_MIN_JOIN_RADIUS));
    const joinBase = join;
    const joinSide = Math.max(0, Math.min(join, edge - tipR));

    return { ah, hb, tipR, joinBase, joinSide };
}

// ─── 轮廓工具 ───

type Point = { x: number; y: number };

const subPoint = (a: Point, b: Point): Point => ({ x: a.x - b.x, y: a.y - b.y });
const addPoint = (a: Point, b: Point): Point => ({ x: a.x + b.x, y: a.y + b.y });
const mulPoint = (a: Point, s: number): Point => ({ x: a.x * s, y: a.y * s });
const pointLen = (a: Point) => Math.hypot(a.x, a.y);
const unitPoint = (a: Point): Point => {
    const l = pointLen(a) || 1;
    return { x: a.x / l, y: a.y / l };
};

/** 顶点圆角半径：in-进入边方向的半径、out-离开边方向的半径 */
type VertexRadius = { in: number; out: number };

const MIN_RADIUS = 0.1; // 半径下限，保证退化顶点仍可绘制

/** 限制箭头中心位置，保证箭头完整落在主体边范围内 */
function clampArrowCenter(center: number, min: number, max: number): number {
    if (min >= max) return (min + max) / 2;
    return Math.max(min, Math.min(max, center));
}

/**
 * 将一条闭合轮廓（顺时针）按各顶点圆角半径一体成型为单条 path。
 * 每个顶点可分别指定进入边 / 离开边的半径，因此同时支持凸角、凹角与不对称圆角：
 * 主体四角、箭头根部与尖端都在同一条轮廓上一次切割完成，没有拼接痕迹。
 */
function roundedPolygonPath(vertices: Point[], radii: VertexRadius[]): string {
    const n = vertices.length;

    // 按相邻边长收缩半径，避免相邻圆角相互重叠导致形状畸变
    const radIn: number[] = [];
    const radOut: number[] = [];
    for (let i = 0; i < n; i++) {
        const prev = vertices[(i - 1 + n) % n];
        const cur = vertices[i];
        const next = vertices[(i + 1) % n];
        const rIn = Math.max(radii[i].in, MIN_RADIUS);
        const rOut = Math.max(radii[i].out, MIN_RADIUS);
        const lenIn = pointLen(subPoint(cur, prev));
        const lenOut = pointLen(subPoint(next, cur));
        const kIn = lenIn > 0
            ? Math.min(1, lenIn / (Math.max(radii[(i - 1 + n) % n].out, MIN_RADIUS) + rIn))
            : 1;
        const kOut = lenOut > 0
            ? Math.min(1, lenOut / (rOut + Math.max(radii[(i + 1) % n].in, MIN_RADIUS)))
            : 1;
        // 进入边 / 离开边各自独立收敛，避免一侧空间不足时误伤另一侧
        radIn.push(rIn * kIn);
        radOut.push(rOut * kOut);
    }

    const starts: Point[] = [];
    const ends: Point[] = [];
    for (let i = 0; i < n; i++) {
        const prev = vertices[(i - 1 + n) % n];
        const cur = vertices[i];
        const next = vertices[(i + 1) % n];
        const din = unitPoint(subPoint(cur, prev));
        const dout = unitPoint(subPoint(next, cur));
        starts.push(subPoint(cur, mulPoint(din, radIn[i])));
        ends.push(addPoint(cur, mulPoint(dout, radOut[i])));
    }

    const pt = (p: Point) => `${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
    let d = `M ${pt(starts[0])}`;
    for (let i = 0; i < n; i++) {
        // 以顶点为控制点的二次贝塞尔：凸角、凹角与不对称半径都能平滑过渡
        d += ` Q ${pt(vertices[i])} ${pt(ends[i])}`;
        d += ` L ${pt(starts[(i + 1) % n])}`;
    }
    return `${d} Z`;
}

/**
 * 生成「主体圆角矩形 + 箭头凸起」一体成型的气泡轮廓 path。
 * 主体四角与箭头顶点同属一条闭合轮廓，一次圆角化完成。
 * 坐标系为气泡元素盒子（含箭头凸出空间），原点在左上角。
 */
export function buildBubblePath(opts: {
    W: number;
    H: number;
    direction: PopupPlacement;
    arrowCenter: number; // 箭头中心沿主体边的位置（px）
    radius: number;
    arrow: ArrowGeometry; // 箭头几何（随 arrowRadius 档位解析）
    hideArrow: boolean;
}): string {
    const { W, H, direction, arrowCenter, radius, arrow, hideArrow } = opts;
    const R = Math.max(0, Math.min(radius, W / 2, H / 2));
    const corner: VertexRadius = { in: R, out: R };

    if (hideArrow || W <= 0 || H <= 0) {
        return roundedPolygonPath(
            [
                { x: 0, y: 0 },
                { x: W, y: 0 },
                { x: W, y: H },
                { x: 0, y: H },
            ],
            [corner, corner, corner, corner],
        );
    }

    const { ah: AH, hb, tipR, joinSide } = arrow;
    // 箭头尖端：两侧同为斜边
    const tip: VertexRadius = { in: tipR, out: tipR };
    // 根部圆角期望值（由箭头尺寸档位决定）
    const joinMax = arrow.joinBase;

    // 箭头中心沿主体边的位置：为主体圆角与根部圆角预留空间，
    // 保证四个角的圆角都能完整呈现，箭头位置让位于圆角
    const isVertical = direction === 'top' || direction === 'bottom';
    const mainSize = isVertical ? W : H;
    const edgeReserve = hb + R + joinMax;
    const c = clampArrowCenter(arrowCenter, edgeReserve, mainSize - edgeReserve);

    // 根部可用空间先扣除两侧主体圆角，保证 radius 完整作用于四个角；
    // 空间不足时收缩的是根部圆角，而不是靠近箭头的主体圆角
    const arrowSpace = Math.min(c - hb, mainSize - c - hb);
    const joinBase = Math.max(MIN_RADIUS, Math.min(joinMax, arrowSpace - R));

    // 箭头根部：主体边一侧半径固定（连接处曲度恒定），斜边一侧随尖端圆角自适应收缩
    const joinIn: VertexRadius = { in: joinBase, out: joinSide };
    const joinOut: VertexRadius = { in: joinSide, out: joinBase };

    if (direction === 'top') {
        // 气泡在触发元素上方，箭头在底部向下凸出：主体 y ∈ [0, H]，尖端 y = H + AH
        return roundedPolygonPath(
            [
                { x: 0, y: 0 },
                { x: W, y: 0 },
                { x: W, y: H },
                { x: c + hb, y: H },
                { x: c, y: H + AH },
                { x: c - hb, y: H },
                { x: 0, y: H },
            ],
            [corner, corner, corner, joinIn, tip, joinOut, corner],
        );
    }
    if (direction === 'bottom') {
        // 气泡在触发元素下方，箭头在顶部向上凸出：主体 y ∈ [AH, AH + H]，尖端 y = 0
        return roundedPolygonPath(
            [
                { x: 0, y: AH },
                { x: c - hb, y: AH },
                { x: c, y: 0 },
                { x: c + hb, y: AH },
                { x: W, y: AH },
                { x: W, y: AH + H },
                { x: 0, y: AH + H },
            ],
            [corner, joinIn, tip, joinOut, corner, corner, corner],
        );
    }
    if (direction === 'left') {
        // 气泡在触发元素左侧，箭头在右侧向右凸出：主体 x ∈ [0, W]，尖端 x = W + AH
        return roundedPolygonPath(
            [
                { x: 0, y: 0 },
                { x: W, y: 0 },
                { x: W, y: c - hb },
                { x: W + AH, y: c },
                { x: W, y: c + hb },
                { x: W, y: H },
                { x: 0, y: H },
            ],
            [corner, corner, joinIn, tip, joinOut, corner, corner],
        );
    }
    // 气泡在触发元素右侧，箭头在左侧向左凸出：主体 x ∈ [AH, AH + W]，尖端 x = 0
    return roundedPolygonPath(
        [
            { x: AH, y: 0 },
            { x: AH + W, y: 0 },
            { x: AH + W, y: H },
            { x: AH, y: H },
            { x: AH, y: c + hb },
            { x: 0, y: c },
            { x: AH, y: c - hb },
        ],
        [corner, corner, corner, corner, joinIn, tip, joinOut],
    );
}
