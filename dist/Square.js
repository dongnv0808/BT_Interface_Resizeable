"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Shape_1 = require("./Shape");
class Square extends Shape_1.Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    get $side() {
        return this.side;
    }
    set $side(side) {
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
    getPerimeter() {
        return this.side * 4;
    }
    resize(_percent) {
        let _percentUp = this.getArea() * _percent / 100;
        return this.getArea() + _percentUp;
    }
}
exports.Square = Square;
