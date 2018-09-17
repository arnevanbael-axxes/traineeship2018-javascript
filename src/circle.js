import Shape from "./shape";

export default class Circle extends Shape {
    constructor(color, x, y) {
        super(color, x, y);
        this.radius;
    }

    acreage() {
        if(radius == null || radius == undefined) this.radius = 0;
        return (this.radius * this.radius) * 3.14;
    }
}