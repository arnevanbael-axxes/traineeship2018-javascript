import Shop from "./Shop";

export default class PhysicalShop extends Shop {
    public location: string;
    public surface: number;

    constructor() {
        super();
    }
}