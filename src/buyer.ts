import Person from "./person";
import Item from "./item";

export default class Buyer extends Person {
    public id: string;
    public shoppingCard: Array<Item>;

    constructor() {
        super();
    }

    addToCart(item: Item) {
        if(item === null || item === undefined) return;
        this.shoppingCard.push(item);
    }

    displayCart() {
        this.shoppingCard.forEach(item => console.log(item.name));
    }

    checkout() {
        this.shoppingCard = new Array<Item>();
    }
}