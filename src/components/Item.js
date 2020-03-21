import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('inventory')
@observer
class Item extends Component {

    buyItem = () => {
        this.props.inventory.buyItem(this.props.item.name)
    }

    changePrice = () => {
        let newPrice
        do{
            newPrice = parseInt(prompt('Enter new price'))
        }while(isNaN(newPrice) || newPrice < 0)
        this.props.inventory.changePrice(this.props.item.name,newPrice)
    }

    render() {
        const item = this.props.item
        return (
            <li>
                <span onDoubleClick={this.changePrice}>{item.quantity} {item.name} available at ${item.price} per item   </span>
                <button onClick={this.buyItem}>Buy</button>
            </li>
        )
    }
}

export default Item