import React, {Component} from 'react';
import Product from "./product";
import { Button,Form,FormGroup,FormControl } from "react-bootstrap/es";

class Cart extends Component {

    state = {
        productDetail : '',
        productList: [],
        id: 0,
    }

    getProductDetails = (e) => {
        this.setState({productDetail : e.target.value}, this.getValidationState);
    }

    incrementId = () => {
        let { id } = this.state;
        let incId = id + 1;
        this.setState({id: incId});
        return id;
    }

    decrement = (i) =>{
        const { productList } = this.state;
        const v = [...productList];
        v[i].quantity--;

        this.setState({
            productList: v,
        });
    }

    increment = (i) =>{
        const { productList } = this.state;
        const v = [...productList];
        v[i].quantity++;

        this.setState({
            productList: v,
        });
    }

    deleteProduct = (i) => {
        const { productList } = this.state;
        const objIndex = productList.findIndex((obj => obj.id === i));
        productList.splice(objIndex,1);

        this.setState({
            productList : productList,
        });

    }

    checkItemExists(pl,n) {
        const upl = pl.find((item) => item['productName'] === n);
        if(upl === undefined){
            this.setState({ errorMessage: '' });
            return false;
        }
        else {
            this.setState({ errorMessage: 'item already exists' });
            return true;
        }
    }

    addProductDetails = (e) => {
        e.preventDefault();
        const { productDetail,productList } = this.state;
        const arr = productDetail.split('-');
        const productName = arr[0];
        const price = arr[1];

        if(productList.length>0){
            const itemExists = this.checkItemExists(productList,productName);

            if(!itemExists){
                productList.push({
                    productName: productName,
                    price: price,
                    quantity: 1,
                    id: this.incrementId(),
                });
            }
            else return;
        }
        else{
            productList.push({
                productName: productName,
                price: price,
                quantity: 1,
                id: this.incrementId(),
            });
        }

        this.setState({
            productList : productList,
            productDetail: '',
        });
    }

    getValidationState() {
        const { productDetail } = this.state;
        //const re = /^(([a-z]+)-([0-9]+))$/ig;
        const checkAlpha = /[a-zA-z ]$/g;
        const checkNum = /[0-9]$/g;
        const productName = productDetail.split('-')[0];
        const productPrice = productDetail.split('-')[1];
        if (
            !(productName && productName.match(checkAlpha))
            || !(productPrice && productPrice.match(checkNum))
        ) {
            //console.log('Not Valid');
            this.setState({ errorMessage: 'Not Valid' })
        } else {
            //console.log('Valid');
            this.setState({ errorMessage: '' })
        }

        return null;
    }

    showValidationState(){
        const { errorMessage } = this.state;
        if(errorMessage) return 'error';
    }

    render(){
        const { productDetail, productList, errorMessage } = this.state;
        //console.log('productList from, cart--->',productList);

        return(
            <React.Fragment>
                <Form inline>
                    <FormGroup controlId="formInlineName" validationState={this.showValidationState()}>
                        <FormControl type="text" name='productDetail' value={productDetail} onChange={this.getProductDetails} placeholder="Item-Price" />
                    </FormGroup>{' '}
                    {
                        productDetail ?
                            <Button type="submit" bsStyle='primary' onClick={(e) => {errorMessage ? e.preventDefault() : this.addProductDetails(e)}}>ADD</Button>
                            :
                            <Button bsStyle='primary'>ADD</Button>
                    }


                    <div className='msg-container'>
                        {
                            errorMessage && (
                                <span>{errorMessage}</span>
                            )
                        }
                    </div>

                    {/*{*/}
                        {/*errorMessage && (*/}
                            {/*<div className='msg-container'>{errorMessage}</div>*/}
                        {/*)*/}
                    {/*}*/}
                </Form>

                <Product
                    productList={productList}
                    increment={this.increment}
                    decrement={this.decrement}
                    deleteProduct={this.deleteProduct}
                />
            </React.Fragment>
        )
    }
}

export default Cart
