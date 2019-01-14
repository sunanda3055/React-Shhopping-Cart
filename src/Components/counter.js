import React, {Component} from 'react';
import { Button, InputGroup } from "react-bootstrap";

class Counter extends Component {

    state = {
        qty: this.props.quantity,
    }

    decrement = (i) =>{
        const { handleQuantity } = this.props;
        const { qty } = this.state;
        const decVal = qty - 1;
        this.setState({qty : decVal});
        handleQuantity(qty - 1, i);
    }

    increment = (i) =>{
        const { handleQuantity } = this.props;
        const { qty } = this.state;
        const incVal = qty + 1;
        this.setState({qty : incVal});
        handleQuantity(qty + 1, i);
    }

    render(){
        const { id, quantity } = this.props;
        const { qty } = this.state;
        console.log('id from props and qty from counter---->',id,qty);
        //console.log('quantity from counter---->',quantity);

        return(
            <InputGroup>
                <Button onClick={() => this.decrement(id)} disabled={qty === 1}>-</Button>
                <InputGroup.Addon>{quantity}</InputGroup.Addon>
                <Button onClick={() => this.increment(id)}>+</Button>&nbsp;
            </InputGroup>
        )
    }
}

export default Counter;