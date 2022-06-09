import { Resizeable } from "./Resizeable";
import { Shape } from "./Shape";

export class Circle extends Shape implements Resizeable{
    private radius: number;
    constructor(name: string, radius: number){
        super(name);
        this.radius = radius;
    }
	public get $radius(): number {
		return this.radius;
	}
	public set $radius(value: number) {
		this.radius = value;
	}
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
    getPerimeter(): number {
        return 2 * this.radius * Math.PI;
    }
    resize(percent: number): number {
        let percentUp = this.getArea() * percent / 100;
        return this.getArea() + percentUp;
    }
}