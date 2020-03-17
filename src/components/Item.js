import React, {Component} from 'react';
import { observer } from 'mobx-react';

@observer
class Item extends Component {

    buyItem = () => {
        this.props.store.buyItem(this.props.item.name)
    }

    changePrice = () => {
        const newPrice = prompt('enter new price')
        this.props.store.changePrice(this.props.item.name,newPrice)
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