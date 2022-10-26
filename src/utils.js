// ==================================================
// Linear algebra utils
// ==================================================
export const Add = (v1, v2) => {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
};

export const Substract = (v1, v2) => {
    return [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]];
}

export const Multiply = (k, v) => {
    return [k * v[0], k * v[1], k * v[2]];
}

export const DotProduct = (v1, v2) => {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

export const Length = (v) => {
    return Math.sqrt(DotProduct(v, v));
}