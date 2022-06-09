"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    get $radius() {
        return this.radius;
    }
    set $radius(value) {
        this.radius = value;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
    resize(percent) {
        let percentUp = this.getArea() * percent / 100;
        return this.getArea() + percentUp;
    }
}
exports.Circle = Circle;
