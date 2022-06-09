import { Rectangle } from "./Rectangle";

let rectangle = new Rectangle("Hinh chu nhat", 10, 5);
console.log(rectangle);
console.log(`Dien tich hinh chu nhat = ${rectangle.getArea()}`);
console.log(`Dien tich hinh chu nhat tang 20% = ${rectangle.resize(20)}`);