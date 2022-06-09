export abstract class Shape {
    constructor(private name: string){
    }
    abstract getArea(): number;
    abstract getPerimeter(): number;
}