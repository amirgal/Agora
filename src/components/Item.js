import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('inventory')
@observer
class Item extends Component {

    buyItem = () => {
        this.props.inventory.buyItem(this.props.item.name)
    }

    changePrice = () => {
        const newPrice = prompt('enter new price')
        this.props.inventory.changePrice(this.props.item.name,newPrice)
    }

    render() {
        const item = this.props.item
        return (
            <li>
                <p onDoubleClick={this.changePrice}>{item.quantity} {item.name} available at ${item.price} per item</p>
                <button onClick={this.buyItem}>Buy</button>
            </li>
        )
    }
}

export default Item