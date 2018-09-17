import Helloworld from '../src/helloworld';
import Rectangle from '../src/rectangle';
import Circle from '../src/circle';

describe('Hello world', () => {
    it('my first test', () => {
        let helloWorld = new Helloworld('Joey');
        expect(helloWorld.getMessage()).toEqual('Hello Joey!');
    });
});

describe('rectangle', () => {
    it('move rectangle',() => {
        let rectangle = new Rectangle("red", 10, 20);
        rectangle.move(5, 10);
        expect(rectangle.x).toBe(5);
        expect(rectangle.y).toBe(10);
    });

    it('rotate 90 degrees', () => {
        let rectangle = new Rectangle("red", 10, 20);
        rectangle.rotate90Degrees();
        expect(rectangle.x).toBe(20);
        expect(rectangle.y).toBe(10);
    });

    it('enlarge rectangle', () => {
        let rectangle = new Rectangle("red", 10, 20);
        rectangle.height = 10;
        rectangle.width = 20;
        rectangle.enlarge(10, 10);
        expect(rectangle.height).toBe(20);
        expect(rectangle.width).toBe(30);
    });

    it('shring rectangle', () => {
        let rect = new Rectangle("red", 10, 10);
        rect.height = 10;
        rect.width = 20;
        rect.shrink(10, 5);
        expect(rect.height).toBe(5);
        expect(rect.width).toBe(10);
    });

    it('square = true', () => {
        let rect = new Rectangle("red", 10, 20);
        rect.height = 10;
        rect.width = 10;
        expect(rect.isSquare()).toBe(true);
    });

    it('square = false', () => {
        let rect = new Rectangle("red", 10, 10);
        rect.height = 20;
        rect.width = 100;
        expect(rect.isSquare()).toBe(false);
    });
});

describe('circle', () => {
    if('acreage', () => {
        let circle = new Circle("red", 10, 10);
        circle.radius = 10;
        expect(circle.acreage()).toBe(314);
    });
});


