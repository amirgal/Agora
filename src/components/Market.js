import React, {Component} from 'react';
import Item from './Item'
import { observer, inject } from 'mobx-react';

@inject('inventory')
@observer
class Market extends Component {
    constructor() {
        super()
        this.state = {
            itemName : ''
        }
    }

    handleChange = (e) => {
        this.setState({itemName:e.target.value})    
    }

    addItem = (e) => {
        if(e.key === 'Enter'){
            this.props.inventory.addItem(e.target.value)   
            this.setState({itemName:''})
        }
    }

    render() {
        return (
            <div className="market-container">
                <input type="text" value={this.state.itemName} onKeyDown={this.addItem} onChange={this.handleChange}/>
                <ul>
                    {this.props.inventory.items.map((i,ind) => <Item key={ind} item={i} />)}
                </ul>
            </div>
        )
    }
}

export default Market