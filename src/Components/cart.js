import React, {Component} from 'react';
import CartCard from "./cartCard";
import { Button,Form,FormGroup,FormControl } from "react-bootstrap/es";
import { addItemsToArray } from "../actions";

class Cart extends Component {

    state = {
        productDetail : '',
        productList: [],
        id: 0,
    }

    incrementId = () => {
        const { id } = this.state;
        const incId = id + 1;
        this.setState({id: incId});
        return id;
    }

    handleQuantity = (qty, qtyId) => {
        const { productList } = this.state;
        const updatedProductList = [...productList];

        for(let i=0; i < productList.length; i++){
            const currentProduct = productList[i];
            if(currentProduct.id === qtyId){
                currentProduct.quantity = qty;
            }
        }

        this.setState({
            productList: updatedProductList,
        });
    }

    // decrement = (id) =>{
    //     const { productList } = this.state;
    //     const updatedProductList = [...productList];
    //
    //     for(let i = 0; i < productList.length ; i++){
    //         const currentProduct = productList[i];
    //         if(currentProduct.id === id){
    //             currentProduct.quantity--;
    //         }
    //     }
    //
    //     this.setState({
    //         productList: updatedProductList,
    //     });
    // }
    //
    // increment = (id) =>{
    //     const { productList } = this.state;
    //     const updatedProductList = [...productList];
    //
    //     for(let i=0; i < productList.length; i++){
    //         const currentProduct = productList[i];
    //
    //         if(currentProduct.id === id){
    //             currentProduct.quantity++;
    //         }
    //     }
    //
    //     this.setState({
    //         productList: updatedProductList,
    //     });
    // }

    deleteProduct = (i) => {
        const { productList } = this.state;
        const objIndex = productList.findIndex((obj => obj.id === i));
        productList.splice(objIndex,1);

        this.setState({
            productList : productList,
        });

    }

    setAddButtonDisableOnError() {
        const { errorMessage } = this.state;
        return errorMessage !== '';
    }

    checkItemExists(pl,n) {
        const upl = pl.find((item) => item['productName'] === n);
        return upl !== undefined;
    }

    getProductDetails = (val) => {
        this.setState({productDetail : val}, this.getValidationState);
    }

    addProductDetails = (e) => {
        e.preventDefault();
        const { productDetail,productList } = this.state;
        const arr = productDetail.split('-');
        const productName = arr[0];
        const price = arr[1];
        const quantity = 1;

        if(productList.length>0){
            const itemExists = this.checkItemExists(productList,productName);

            if(!itemExists){
                addItemsToArray(productList, productName, price, quantity, this.incrementId());
                this.setState({ errorMessage: '' });
            }
            else {
                this.setState({ errorMessage: 'item already exists' });
            }
        }
        else{
            addItemsToArray(productList, productName, price, quantity, this.incrementId());
        }

        this.setState({
            productList : productList,
            productDetail: '',
        });
    }

    getValidationState() {
        const { productDetail } = this.state;
        const checkAlpha = /[a-zA-z ]$/g;
        const checkNum = /[0-9]$/g;
        const productName = productDetail.split('-')[0];
        const productPrice = productDetail.split('-')[1];

        if (
            !(productName && productName.match(checkAlpha))
            || !(productPrice && productPrice.match(checkNum))
        ) {
            this.setState({ errorMessage: 'Not Valid' })
        } else {
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
        console.log('productList----->',productList);

        return(
            <React.Fragment>

                <Form inline>
                    <FormGroup controlId="formInlineName" validationState={this.showValidationState()}>
                        <FormControl type="text" name='productDetail' value={productDetail} onChange={(e) => this.getProductDetails(e.target.value)} placeholder="Item-Price" />
                    </FormGroup>

                    <Button type="submit" bsStyle='primary' onClick={(e) => {this.addProductDetails(e)}} disabled={!(productDetail && !this.setAddButtonDisableOnError())}>ADD</Button>

                    <div className='msg-container'>
                        {
                            errorMessage && (
                                <span>{errorMessage}</span>
                            )
                        }
                    </div>
                </Form>

                <CartCard
                    productList={productList}
                    deleteProduct={this.deleteProduct}
                    handleQuantity={this.handleQuantity}
                />

            </React.Fragment>
        )
    }
}

export default Cart
