"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(name, width, length) {
        super(name);
        this.width = width;
        this.length = length;
    }
    get $width() {
        return this.width;
    }
    get $length() {
        return this.length;
    }
    set $width(width) {
        this.width = width;
    }
    set $length(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return (this.width + this.length) * 2;
    }
    resize(percent) {
        let percentUp = this.getArea() * percent / 100;
        return this.getArea() + percentUp;
    }
}
exports.Rectangle = Rectangle;
