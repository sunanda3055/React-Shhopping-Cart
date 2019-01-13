import React, {Component} from 'react';
import { Button, InputGroup } from "react-bootstrap";

class Counter extends Component {

    state = {
        qty: 1,
    }

    decrement = (i) =>{
        const { handleQuantity, id } = this.props;
        const { qty } = this.state;
        const decVal = qty - 1;
        //if(i === id){
            this.setState({qty : decVal});
            handleQuantity(qty - 1, i);
        //}
        //console.log('decVal---->',decVal);
    }

    increment = (i) =>{
        const { handleQuantity, id } = this.props;
        const { qty } = this.state;
        const incVal = qty + 1;
        //if(i === id){
            this.setState({qty : incVal});
            handleQuantity(qty + 1, i);
        //}

        //console.log('incVal---->',incVal);
    }

    render(){
        const { id, quantity } = this.props;
        const { qty } = this.state;
        console.log('id from props and qty from state---->',id,qty);
        console.log('quantity from counter---->',quantity);

        return(
            <InputGroup>
                <Button onClick={() => this.decrement(id)} disabled={qty === 1}>-</Button>
                <InputGroup.Addon>{qty}</InputGroup.Addon>
                <Button onClick={() => this.increment(id)}>+</Button>&nbsp;
            </InputGroup>
        )
    }
}

export default Counter;