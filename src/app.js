import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/header";
import Cart from "./Components/cart";
import StylishCart from "./Components/stylishCart";
import Footer from "./Components/footer";
import Home from "./Components/home";
import About from "./Components/about";

class App extends Component {

    render(){
        return(
            <Router>
                <div>
                    <Header />

                    <div className='container'>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/stylishCart" component={StylishCart} />
                    </div>

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App
