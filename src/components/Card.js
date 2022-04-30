import React from 'react';
import '../css/Card.css';

function Card({ children, style }) {

    return (
        <div className="card-style" style={style}>
            {children}
        </div>
    );
}

const styles = {

};


export default Card;