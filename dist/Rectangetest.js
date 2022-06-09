"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
let rectangle = new Rectangle_1.Rectangle("Hinh chu nhat", 10, 5);
console.log(rectangle);
console.log(`Dien tich hinh chu nhat = ${rectangle.getArea()}`);
console.log(`Dien tich hinh chu nhat tang 20% = ${rectangle.resize(20)}`);
