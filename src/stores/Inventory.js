import { observable, action } from "mobx";
import Item from "./Item";

class Inventory {
    @observable items = []

    @action addItem = (name,price = 0,quantity = 1) => {
        const itemIndex = this.items.findIndex(i => i.name === name)
        if(itemIndex === -1) {
            this.items.push(new Item(name,price,quantity))
        } else {
            this.items[itemIndex].quantity++
        }
    }

    @action buyItem = (name) => {
        const itemIndex = this.items.findIndex(i => i.name === name)
        this.items[itemIndex].quantity--
        if(this.items[itemIndex].quantity === 0){
            this.items.splice(itemIndex,1)
        }
    }

    @action changePrice = (name,price) => {
        const item = this.items.find(i => i.name === name)
        item.price = price
    }
}

const inventory = new Inventory()
export default inventory