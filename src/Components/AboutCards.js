import React from 'react';
import { Button } from "react-bootstrap/es";
import InputGroup from "react-bootstrap/es/InputGroup";
import Glyphicon from "react-bootstrap/es/Glyphicon";

function AboutCards (props) {

    const { data } = props;

    const card = data && data.map((item, i) =>{
        return(
            <li key={i}>
                <div><img src={item.image} /></div>
                <div>
                    <div><span>{item.name}</span></div>
                    <div><span>Rs.{item.price}</span></div>
                    <div>
                        <div className='cart-card-action'>
                            <InputGroup>
                                <Button>-</Button>
                                <InputGroup.Addon>{item.quantity}</InputGroup.Addon>
                                <Button>+</Button>&nbsp;
                                <Button><Glyphicon glyph="trash" /></Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </li>
        )
    });

    return(
        <React.Fragment>
            {card}
        </React.Fragment>
    )
}

export default AboutCards
