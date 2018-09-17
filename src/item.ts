import { ItemCategory } from "./enumCategory";

export default class Item {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public purchasePrice: number,
        public category: ItemCategory
    ) {}
}