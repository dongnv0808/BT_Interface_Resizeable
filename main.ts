import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

let shape = [];
shape[0] = new Circle("Hinh tron", 3);
console.log(`Dien tich hinh tron = ${shape[0].getArea()}`);
shape[1] = new Rectangle("Hinh chu nhat", 10, 5);
console.log(`Dien tich hinh chu nhat = ${shape[1].getArea()}`);
shape[2] = new Square("Hinh vuong", 5);
console.log(`Dien tich hinh vuong = ${shape[2].getArea()}`);
let percentRandomCircle = (Math.floor(Math.random() * 100)+1)/100
let percentRandomRectangle = (Math.floor(Math.random() * 100)+1)/100
let percentRandomSquare = (Math.floor(Math.random() * 100)+1)/100
console.log(`Dien tich hinh tron tang ${percentRandomCircle * 100}% = ${shape[0].getArea() + (shape[0].getArea() * percentRandomCircle)}`);
console.log(`Dien tich hinh chu nhat tang ${percentRandomRectangle * 100}% = ${shape[1].getArea() + (shape[1].getArea() * percentRandomRectangle)}`);
console.log(`Dien tich hinh vuong tang ${percentRandomSquare * 100}% = ${shape[2].getArea() + (shape[2].getArea() * percentRandomSquare)}`);
