"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
let circle = new Circle_1.Circle("Hinh tron", 5);
console.log(circle);
console.log(`Dien tich hinh tron = ${circle.getArea()}`);
console.log(`Dien tich tang 10% = ${circle.resize(10)}`);
