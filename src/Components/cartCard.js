import React from 'react';
import { Table, Button, PageHeader, Glyphicon } from "react-bootstrap";
import Counter from "./counter";

function CartCard (props) {

    const { productList, handleQuantity, deleteProduct } = props;

    let totalPrice = 0;
    const data = productList && productList.map((item,i) =>{
        totalPrice += (item.quantity * item.price);
        console.log('totalPrice--->',totalPrice);

        return(
            <tr key={i}>
                <td>{item.id+1}.</td>
                <td>{item.productName}</td>
                <td>Rs.{item.price}</td>
                <td>{item.quantity}</td>

                <td>
                    <div className='card-action'>
                        <Counter
                            id={item.id}
                            quantity={item.quantity}
                            handleQuantity={handleQuantity}
                        />

                        <Button onClick={() => deleteProduct(item.id)}>
                            <Glyphicon glyph="trash" />
                        </Button>
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

export default CartCard
