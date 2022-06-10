import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Square } from "./Square";

let shapes: Shape[] = [];
shapes[0] = new Circle("Hinh tron", 3);
// console.log(`Dien tich hinh tron = ${shape[0].getArea()}`);
shapes[1] = new Rectangle("Hinh chu nhat", 10, 5);
// console.log(`Dien tich hinh chu nhat = ${shape[1].getArea()}`);
shapes[2] = new Square("Hinh vuong", 5);
// console.log(`Dien tich hinh vuong = ${shape[2].getArea()}`);
// let percentRandomCircle = (Math.floor(Math.random() * 100)+1)/100
// let percentRandomRectangle = (Math.floor(Math.random() * 100)+1)/100
// let percentRandomSquare = (Math.floor(Math.random() * 100)+1)/100
// console.log(`Dien tich hinh tron tang ${percentRandomCircle * 100}% = ${shapes[0].getArea() + (shapes[0].getArea() * percentRandomCircle)}`);
// console.log(`Dien tich hinh chu nhat tang ${percentRandomRectangle * 100}% = ${shapes[1].getArea() + (shapes[1].getArea() * percentRandomRectangle)}`);
// console.log(`Dien tich hinh vuong tang ${percentRandomSquare * 100}% = ${shapes[2].getArea() + (shapes[2].getArea() * percentRandomSquare)}`);
for(let shape of shapes){
    let percentRandom = (Math.floor(Math.random() * 100)+1)/100;
    console.log(`Dien tich truoc khi tang ${shape.getArea()} | Dien tich sau khi tang ${percentRandom * 100}% = ${shape.getArea() + (shape.getArea() * percentRandom)}`);
}
