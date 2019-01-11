import React from 'react';
import Button from "react-bootstrap/es/Button";
import PageHeader from "react-bootstrap/es/PageHeader";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Image from "react-bootstrap/es/Image";
import InputGroup from "react-bootstrap/es/InputGroup";
import Glyphicon from "react-bootstrap/es/Glyphicon";

function ProductCard (props) {

    const { productList,increment,decrement,deleteProduct } = props;
    //console.log('productList from productCard props---->',productList);

    let totalPrice = 0;
    const data = productList && productList.map((item,i) =>{
        totalPrice += (item.quantity * item.price);

        return(
            <Col key={i} xs={12} md={3}>
                <code>
                    <ul className='product-card'>

                        <li><Image src='/src/assets/images/mobile.jpeg'/></li>

                        <li>
                            <div className='card-name'><h3>{item.productName}</h3><span>Rs. {item.price}</span></div>
                            <div><b>Total : Rs.{item.quantity * item.price}</b></div>

                            <div className='card-action'>
                                <InputGroup>
                                    {
                                        item.quantity === 1 ?
                                            <Button onClick={() => decrement(item.id)} disabled>-</Button>
                                            :
                                            <Button onClick={() => decrement(item.id)}>-</Button>
                                    }

                                    <InputGroup.Addon>{item.quantity}</InputGroup.Addon>

                                    <Button onClick={(e) => increment(item.id)}>+</Button>&nbsp;
                                </InputGroup>
                                <Button onClick={() => deleteProduct(item.id)}><Glyphicon glyph="trash" /></Button>
                            </div>

                            <div className='view-more'><a href='#'>View Details</a></div>
                        </li>

                    </ul>
                </code>
            </Col>
        )
    });

    return(
        <div>
            <PageHeader>
                Total : Rs.{totalPrice}
            </PageHeader>

            <main>
                <Grid>
                    <Row className="show-grid">
                        {data}
                    </Row>
                </Grid>
            </main>

        </div>
    )
}

export default ProductCard
