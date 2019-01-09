import React, {Component} from 'react';
import { Table,Button } from "react-bootstrap/es";
import PageHeader from "react-bootstrap/es/PageHeader";
import InputGroup from "react-bootstrap/es/InputGroup";
import Glyphicon from "react-bootstrap/es/Glyphicon";

class Product extends Component {

    render(){
        const { productList,increment,decrement,deleteProduct } = this.props;
        //const jsonArray = JSON.parse(JSON.stringify(productList));
        //console.log('jsonArray--->',jsonArray);
        console.log('jsonArray--->',JSON.stringify(productList));

        let totalPrice = 0;
        const data = productList && productList.map((item,i) =>{
            totalPrice += (item.quantity * item.price);

            return(
                <tr key={i}>
                    <td>{i+1}.</td>
                    <td>{item.productName}</td>
                    <td>Rs.{item.price}</td>
                    <td>{item.quantity}</td>

                    <td>
                        <div className='cart-card-action'>
                            <InputGroup>
                                <Button onClick={() => decrement(i)}>-</Button>
                                <InputGroup.Addon>{item.quantity}</InputGroup.Addon>
                                <Button onClick={() => increment(i)}>+</Button>&nbsp;
                                <Button onClick={() => deleteProduct(i)}><Glyphicon glyph="trash" /></Button>
                            </InputGroup>
                        </div>
                    </td>
                </tr>
            )
        });

        return(
            <div>
                <PageHeader>
                    Product Added to Cart
                </PageHeader>

                <Table striped condensed hover>
                    <tbody>
                    <tr>
                        <th>SNo.</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>

                    {data}

                    <tr>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>Total :</th>
                        <th>Rs.{totalPrice}</th>
                    </tr>
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default Product
