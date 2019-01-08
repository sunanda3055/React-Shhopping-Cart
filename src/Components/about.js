import React, {Component} from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";

class About extends Component {

    render(){

        return(
            <div>
                <PageHeader>
                    About
                </PageHeader>

                <p>
                    <i>
                        Shopping is an activity in which a customer browses the available goods or services presented by one or
                        more retailers with the potential intent to purchase a suitable selection of them. A typology of
                        shopper types has been developed by scholars which identifies one group of shoppers as recreational
                        shoppers, that is, those who enjoy shopping and view it as a leisure activity.
                    </i>
                </p>
            </div>
        )
    }
}

export default About
