import { Circle } from "./Circle";

let circle = new Circle("Hinh tron", 5);
console.log(circle);
console.log(`Dien tich hinh tron = ${circle.getArea()}`);
console.log(`Dien tich tang 10% = ${circle.resize(10)}`)
