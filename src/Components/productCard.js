import React from 'react';
import { PageHeader, Grid, Row, Col, Image, Glyphicon, Button } from "react-bootstrap";
import Counter from "./counter";

function ProductCard (props) {

    const { productList, increment, decrement, handleQuantity, deleteProduct } = props;

    let totalPrice = 0;
    const data = productList && productList.map((item, i) =>{
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
                                {/*<InputGroup>*/}
                                    {/*<Button onClick={() => decrement(item.id)} disabled={item.quantity === 1}>-</Button>*/}
                                    {/*<InputGroup.Addon>{item.quantity}</InputGroup.Addon>*/}
                                    {/*<Button onClick={() => increment(item.id)}>+</Button>&nbsp;*/}
                                {/*</InputGroup>*/}

                                <Counter
                                    key={item.id + ': product'}
                                    id={item.id}
                                    quantity={item.quantity}
                                    handleQuantity={handleQuantity}
                                />

                                <Button onClick={() => deleteProduct(item.id)}>
                                    <Glyphicon glyph="trash" />
                                </Button>
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
