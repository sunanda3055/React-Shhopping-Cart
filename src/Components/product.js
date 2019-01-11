import React from 'react';
import { Table,Button } from "react-bootstrap/es";
import PageHeader from "react-bootstrap/es/PageHeader";
import InputGroup from "react-bootstrap/es/InputGroup";
import Glyphicon from "react-bootstrap/es/Glyphicon";

function Product (props) {

    const { productList, increment, decrement } = props;

    let totalPrice = 0;
    const data = productList && productList.map((item,i) =>{
        totalPrice += (item.quantity * item.price);

        return(
            <tr key={i}>
                <td>{item.id+1}.</td>
                <td>{item.productName}</td>
                <td>Rs.{item.price}</td>
                <td>{item.quantity}</td>

                <td>
                    <div className='cart-card-action'>
                        <InputGroup>
                            {
                                item.quantity === 1 ?
                                    <Button onClick={() => decrement(item.id)} disabled>-</Button>
                                    :
                                    <Button onClick={() => decrement(item.id)}>-</Button>
                            }

                            <InputGroup.Addon>{item.quantity}</InputGroup.Addon>

                            <Button onClick={() => increment(item.id)}>+</Button>&nbsp;
                        </InputGroup>
                    </div>
                </td>
            </tr>
        )
    });

    return(
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Product
