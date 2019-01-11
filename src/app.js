import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/header";
import Cart from "./Components/cart";
import ProductsCart from "./Components/productsCart";
import Footer from "./Components/footer";
import Home from "./Components/home";
import About from "./Components/about";
import './assets/scss/style.scss';
class App extends Component {

    render(){
        return(
            <Router>
                <React.Fragment>
                    <Header />

                    <main>
                        <div className='container'>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/products" component={ProductsCart} />
                        </div>
                    </main>

                    <Footer />
                </React.Fragment>
            </Router>
        )
    }
}

export default App
