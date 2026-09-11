import React, { useEffect, useMemo, useRef, useState } from "react";
import ComponentPreview from "../BaseComponents/ComponentPreview";
import { motion } from 'motion/react';

// 引入数据
import { COMPONENTS_DATA } from "../mock";
import Tree from "../../packages/Tree";
import { useNavigate } from "react-router-dom";
import Icon from "../../packages/Icon";
import BackToTop from '../../packages/BackToTop'
import Anchor from "../../packages/Anchor";

/** 分组节点 key 前缀：分组 id 与组件 id 可能重名（如 `nav`），需命名空间隔离 */
const GROUP_KEY_PREFIX = "group:";

interface ComponentExplorerProps {
  componentsData: any[];
  hash?: string;
  defaultActive?: string;
  defaultDropActive?: string;
  menuTitleDirection?: "row" | "column";
  customRender?: (curItem: any) => React.ReactNode;
}

const ComponentExplorer: React.FC<ComponentExplorerProps> = ({ componentsData = COMPONENTS_DATA, hash, defaultActive = 'componentsPreview', defaultDropActive = 'componentsPreview', menuTitleDirection = 'row', customRender }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string>(defaultActive);
  const [dropActive, setDropActive] = useState<string>(defaultDropActive);

  useEffect(() => {
    const href = window.location.href.split('?name=');
    // 兼容历史链接：分组节点 key 带 `group:` 前缀，需剥离后再解析
    const rawName = href.length >= 2 ? decodeURIComponent(href[1]).replace(GROUP_KEY_PREFIX, '') : '';
    if (!rawName || rawName === defaultActive) {
      setActive(defaultActive);
      setDropActive(defaultDropActive);
    } else {
      const [groupId, itemId] = rawName.split('-');
      const groupItem = componentsData.find((item: any) => item.id === groupId);
      if (!groupItem) {
        setActive(defaultActive);
        setDropActive(defaultDropActive);
      } else {
        // 缺少子项时回退到该分组的第一个子项，避免右侧内容空白
        setActive(groupId);
        setDropActive(itemId || groupItem?.data?.[0]?.id || defaultDropActive);
      }
    }
    const scroller = document.getElementById('components-scroller');
    if (scroller) {
      scroller.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [window.location.href, defaultActive, defaultDropActive, componentsData]);

  const curItem = useMemo(() => {
    let item: any = { id: defaultActive, en: defaultActive, zh: "组件概览" };
    if (active !== 'componentsPreview') {
      const activeGroupItem = componentsData.filter(item => item.id === active)[0];
      item = activeGroupItem?.data?.filter((itm2: any) => itm2.id === dropActive)[0];
      // 子项未命中时回退到分组第一个子项，避免右侧内容空白
      if (!item) {
        item = activeGroupItem?.data?.[0];
      }
      return item;
    }
  }, [active, dropActive, defaultActive, componentsData, defaultDropActive]);

  const [menuOpen, setMenuOpen] = useState(() => window.innerWidth > 1024);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      setMenuOpen(!mobile);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // ─── 侧边导航树：数据 ───
  const treeData = useMemo(
    () =>
      componentsData.map((item: any) => {
        const isActiveGroup = item.id === active;
        return {
          key: `${GROUP_KEY_PREFIX}${item.id}`,
          label: (
            <span
              className="truncate"
              style={{
                fontSize: item.titleDeputy ? "var(--font-content-s)" : undefined,
                color: isActiveGroup
                  ? "var(--color-text-primary)"
                  : item.titleDeputy
                    ? "var(--color-text-secondary)"
                    : undefined,
                fontWeight: isActiveGroup ? 600 : undefined,
              }}
            >
              {item.title}
            </span>
          ),
          disabled: item.disabled,
          children: item.data?.length
            ? item.data.map((itm: any) => ({
              key: itm.id,
              label: (
                <span
                  className={`flex ${menuTitleDirection === "column"
                    ? "flex-col items-start"
                    : "flex-row items-center gap-1"
                    }`}
                >
                  <span className="truncate">{itm.en}</span>
                  <span
                    className="truncate"
                    style={{
                      fontSize: "var(--font-content-s)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {itm.zh}
                  </span>
                </span>
              ),
              disabled: itm.disabled,
            }))
            : undefined,
        };
      }),
    [componentsData, active, menuTitleDirection]
  );

  // ─── 侧边导航树：点击分组定位到首个子项，点击子项定位到自身 ───
  // 注意：分组 id 与组件 id 可能重名（如 `nav`），因此依据 option 是否有 children 判断层级，而非按 key 反查
  const handleTreeSelect = (key: string, option?: any) => {
    if (option?.children?.length) {
      // 分组：跳转到其第一个子项
      const groupId = key.replace(GROUP_KEY_PREFIX, "");
      setActive(groupId);
      navigate(`/${hash}?name=${groupId}-${option.children[0].key}`);
    } else {
      // 分组节点 key 带 `group:` 前缀（且可能没有子项，如「组件概览」），需剥离后再定位
      const rawKey = key.replace(GROUP_KEY_PREFIX, "");
      const parent = componentsData.find((item: any) =>
        item.data?.some((itm: any) => itm.id === rawKey)
      );
      if (parent) {
        setActive(parent.id);
        navigate(`/${hash}?name=${parent.id}-${rawKey}`);
      } else {
        setActive(rawKey);
        navigate(`/${hash}?name=${rawKey}`);
      }
    }
    if (isMobile) setMenuOpen(false);
  };

  // ─── 侧边导航树：当前选中节点（命中子项则选子项，否则选分组）───
  const selectedKey = useMemo(() => {
    const parent = componentsData.find((item: any) =>
      item.data?.some((itm: any) => itm.id === dropActive)
    );
    return parent ? dropActive : `${GROUP_KEY_PREFIX}${active}`;
  }, [componentsData, dropActive, active]);

  // ─── 侧边导航树：选中项滚动到视区 ───
  const treeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = treeRef.current?.querySelector(".land-tree__node--selected");
    node?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [active, dropActive]);

  return (
    <div className="absolute top-0 right-0 flex w-full h-full">
      {/* 移动端菜单打开时的遮罩层 */}
      {isMobile && menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <motion.div
        className={`pt-12 ${isMobile ? "absolute top-0 left-0 bottom-0" : "relative"} border-r border-border-primary`}
        initial={{ width: menuOpen ? "252px" : "0" }}
        animate={{ width: menuOpen ? "252px" : "0" }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ zIndex: 101 }}
      >
        <div
          className="absolute border border-border-primary bg-bg-primary flex items-center justify-center cursor-pointer hover:bg-bg-secondary transition-all"
          style={{
            zIndex: 1,
            height: "48px",
            width: "20px",
            borderBottomRightRadius: "8px",
            borderTopRightRadius: "8px",
            left: "100%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <Icon
            name="arrow"
            strokeWidth={3}
            size={16}
            style={{
              transform: menuOpen ? "rotate(-90deg)" : "rotate(90deg)",
            }}
            className="text-gray-primary"
          />
        </div>
        <div ref={treeRef} className="h-full py-6 overflow-auto scrollbar-none">
          <Tree
            treeData={treeData}
            value={selectedKey}
            onChange={(v, option) => handleTreeSelect(v as string, option)}
            defaultExpandedKeys={componentsData.map(
              (item) => `${GROUP_KEY_PREFIX}${item.id}`
            )}
            indent={12}
            style={{
              width: "252px",
              "--land-tree-node-height":
                menuTitleDirection === "column" ? "44px" : "32px",
              "--land-tree-padding": "0px",
            } as React.CSSProperties}
            className="components-explorer-nav relative z-1 bg-white"
          />
        </div>
      </motion.div>

      <div
        id="components-scroller"
        className="relative flex-1 inline-flex justify-center pb-6 h-full box-border"
        style={{ overflow: "auto", width: '1%' }}
      >
        <>
          {/* 组件索引 */}
          {dropActive === "componentsPreview" && (
            // <div className="w-full flex justify-center">
            <ComponentPreview
              onClick={(dropItem, item) => {
                navigate(`/${hash}?name=${item.id}-${dropItem.id}`);
              }}
            />
            // </div>
          )}
          {active !== "componentsPreview" && curItem && (
            <>
              {customRender ? (
                customRender(curItem)
              ) : (
                <div
                  className="relative flex flex-col items-center w-full"
                  style={{ minHeight: "100%" }}
                >
                  {curItem?.anchors?.length > 0 && (
                    <div
                      className="fixed bg-bg-primary z-[101]"
                      style={{ right: 0, top: 48 }}
                    >
                      <Anchor
                        items={curItem?.anchors}
                        getContainer={() =>
                          document.getElementById(
                            "components-scroller"
                          ) as HTMLElement
                        }
                      />
                    </div>
                  )}
                  <div
                    className="w-full px-4 lg:px-6 box-border"
                    style={{ maxWidth: "960px" }}
                  >
                    <div id={"组件预览"}>{curItem.example}</div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      </div>
      <BackToTop
        target={document.getElementById("components-scroller") || undefined}
      />
    </div>
  );
};

export default ComponentExplorer; 