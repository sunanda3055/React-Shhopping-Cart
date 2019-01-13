import React, {Component} from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import Carousel from "react-bootstrap/es/Carousel";

class Home extends Component {


    render(){

        return(
            <React.Fragment>
                <PageHeader>
                    Home
                </PageHeader>

                <Carousel>
                    <Carousel.Item>
                        <img alt="900x500" src="/src/assets/images/c1.jpg" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" src="/src/assets/images/c2.jpg" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" src="/src/assets/images/c4.jpg" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </React.Fragment>
        )
    }
}

export default Home
