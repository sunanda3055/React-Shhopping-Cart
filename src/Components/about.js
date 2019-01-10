import React, {Component} from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import AboutCards from "./AboutCards";
import Axios from 'axios';

class About extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        Axios.get('https://api.myjson.com/bins/q501k')
            .then((response) => {
                this.setState({data: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){
        const { data } = this.state;
        //console.log('data--->',data);
        return(
            <React.Fragment>
                <header>
                    <PageHeader>
                        About
                    </PageHeader>
                </header>

                <div className='about-inner-container'>
                    <ul>
                        <AboutCards data={data}/>
                    </ul>
                </div>

            </React.Fragment>
        )
    }
}

export default About
