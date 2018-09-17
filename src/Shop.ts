import Person from "./person";
import Item from "./item";
import { ItemCategory } from "./enumCategory";
import Buyer from "./buyer";

export default class Shop {
    public name: string;
    public owner: Person;
    public creationDate: Date;
    public stock: Array<Item>;
    public sold: Array<number>;
    
    constructor(
    ){
        this.stock = new Array<Item>();
        this.sold = new Array<number>();
        this.creationDate = new Date();
    }

    public addItem(item: Item) {
        if(item === null || item === undefined) return;
        this.stock.push(item);
    }

    public getItems() {
        return this.stock;
    }

    public getItemsOfCategory(category: ItemCategory) {
        if(category === null || category === undefined) return;
        return this.stock.filter((el) => el.category === category )
    }

    public getItem(id: string) {
        if(id === null || id === undefined || id.length == 0) return;
        return this.stock.filter(item =>  item.id === id);
    }

    public checkout(buyer: Buyer) {
        return this.sold;
    }
    
    public balance() {
        
    }
}