export const componentToHex = (c: number): string => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export interface RGB {
    r: number
    g: number
    b: number
}

export const hexToRgb = (hex: string): RGB => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

export const colourDistance = (n1: RGB, n2: RGB) => {
    const v1 = [n1.r, n1.g, n1.b]
    const v2 = [n2.r, n2.g, n2.b]
    var i,
        d = 0;

    for (i = 0; i < v1.length; i++) {
        d += (v1[i] - v2[i]) * (v1[i] - v2[i]);
    }
    return Math.sqrt(d);
};