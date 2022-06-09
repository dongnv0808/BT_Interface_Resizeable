import { Resizeable } from "./Resizeable";
import { Shape } from "./Shape";

export class Rectangle extends Shape implements Resizeable{
    private width: number;
    private length: number;
    constructor(name: string, width: number, length: number){
        super(name);
        this.width = width;
        this.length = length;
    }
	public get $width(): number {
		return this.width;
	}
	public get $length(): number {
		return this.length;
	}
	public set $width(width: number) {
		this.width = width;
	}
	public set $length(length: number) {
		this.length = length;
	}
    getArea(): number {
        return this.width * this.length;
    }
    getPerimeter(): number {
        return (this.width + this.length) * 2
    }
    resize(percent: number): number {
        let percentUp = this.getArea() * percent / 100;
        return this.getArea() + percentUp;
    }
}