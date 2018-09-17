import Shape from "./shape";

export default class Rectangle extends Shape {
    constructor(color, x, y) {
        super(color, x, y);
        this.height;
        this.width;
    }

    rotate90Degrees() {
        const x = this.x;
        const y = this.y;
        this.x = y;
        this.y = x;
    }

    enlarge(additionalWidth, additionalHeight) {
        this.height += additionalHeight;
        this.width += additionalWidth;
    }

    shrink(minusWidth, minusHeight) {
        this.height -= minusHeight;
        this.width -=  minusWidth;
    }

    isSquare() {
        return this.height === this.width;
    }
}