import { Resizeable } from "./Resizeable";
import { Shape } from "./Shape";

export class Square extends Shape implements Resizeable{
    private side: number;
    constructor(name: string, side: number){
        super(name);
        this.side = side;
    }
    get $side(): number{
        return this.side;
    }
    set $side(side: number){
        this.side = side;
    }
    getArea(): number{
        return this.side * this.side;
    }
    getPerimeter(): number{
        return this.side * 4;
    }
    resize(_percent: number): number{
        let _percentUp = this.getArea() * _percent / 100;
        return this.getArea() + _percentUp;
    }
}