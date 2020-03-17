import React, {Component} from 'react';
import Item from './Item'
import { observer } from 'mobx-react';

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
            this.props.store.addItem(e.target.value)   
            this.setState({itemName:''})
        }
    }

    render() {
        return (
            <div className="market-container">
                <input type="text" value={this.state.itemName} onKeyDown={this.addItem} onChange={this.handleChange}/>
                <ul>
                    {this.props.store.items.map((i,ind) => <Item key={ind} item={i} store={this.props.store}/>)}
                </ul>
            </div>
        )
    }
}

export default Market