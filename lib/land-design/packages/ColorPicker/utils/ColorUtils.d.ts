export declare const ColorUtils: {
    rgbToHsv: (r: number, g: number, b: number) => {
        h: number;
        s: number;
        v: number;
    };
    hsvToRgb: (h: number, s: number, v: number) => {
        r: number;
        g: number;
        b: number;
    };
    rgbToHex: (r: number, g: number, b: number) => string;
    hexToRgb: (hex: string) => {
        r: number;
        g: number;
        b: number;
    };
    rgbToHsl: (r: number, g: number, b: number) => {
        h: number;
        s: number;
        l: number;
    };
    hslToRgb: (h: number, s: number, l: number) => {
        r: number;
        g: number;
        b: number;
    };
};
export type HSV = {
    h: number;
    s: number;
    v: number;
};
export type RGB = {
    r: number;
    g: number;
    b: number;
};
export type HSL = {
    h: number;
    s: number;
    l: number;
};
