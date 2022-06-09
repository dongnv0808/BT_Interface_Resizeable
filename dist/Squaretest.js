"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Square_1 = require("./Square");
let square = new Square_1.Square("Hinh vuong", 10);
console.log(square);
console.log(`Dien tich hinh vuong = ${square.getArea()}`);
console.log(`Dien tich hinh vuong tang 15% = ${square.resize(15)}`);
