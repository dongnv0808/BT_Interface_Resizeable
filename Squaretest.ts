import { Square } from "./Square";

let square = new Square("Hinh vuong", 10);
console.log(square);
console.log(`Dien tich hinh vuong = ${square.getArea()}`);
console.log(`Dien tich hinh vuong tang 15% = ${square.resize(15)}`)