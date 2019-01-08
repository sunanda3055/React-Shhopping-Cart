import React, {Component} from 'react';
import Button from "react-bootstrap/es/Button";
import PageHeader from "react-bootstrap/es/PageHeader";
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

class ProductCard extends Component {

    render(){
        const { productList,increment,decrement,deleteProduct } = this.props;
        // console.log('productList from productCard props---->',productList);

        let totalPrice = 0;
        const data = productList && productList.map((item,i) =>{
            totalPrice += (item.quantity * item.price);

            return(
                <Col key={i} xs={6} md={3}>
                    <code>
                        <ul className='product-card'>

                            <li><h4><b>{item.productName}</b></h4></li>
                            <li><b>Rs.{item.price}</b></li>
                            <li><b>Quantity : {item.quantity}</b></li>
                            <li><b>Total : Rs.{item.quantity * item.price}</b></li>
                            <li>
                                <Button bsStyle='primary' onClick={(e) => decrement(e,i)}>&nbsp;-&nbsp;</Button>&nbsp;
                                <Button bsStyle='primary' onClick={(e) => increment(e,i)}>&nbsp;+&nbsp;</Button>&nbsp;
                                <Button bsStyle='primary' onClick={(e) => deleteProduct(e,i)}>Remove</Button>
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

                <Grid>
                    <Row className="show-grid">
                        {data}
                    </Row>
                </Grid>



            </div>
        )
    }
}

export default ProductCard
