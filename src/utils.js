// ==================================================
// Linear algebra utils
// ==================================================
const Trans = (start, end) => {
    return [end[0] - start[0], end[1] - start[1], end[2] - start[2]];
}

const Add = (v1, v2) => {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
};

const Substract = (v1, v2) => {
    return [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]];
}

const Multiply = (k, v) => {
    return [k * v[0], k * v[1], k * v[2]];
}

const DotProduct = (v1, v2) => {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

const Length = (v) => {
    return Math.sqrt(DotProduct(v, v));
}

// ==================================================
// Object
// ==================================================
class Sphere {
    constructor(center, radius, color) {
        this.type = 'sphere';
        this.center = center;
        this.radius = radius;
        this.color = color;

        return this;
    }
}

// ==================================================
// Light
// ==================================================
class Light {
    constructor(type, intensity, position) {
        this.type = type;
        this.intensity = intensity;
        this.position = position;

        return this;
    }
}