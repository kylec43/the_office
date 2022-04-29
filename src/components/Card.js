import React from 'react';
import '../css/Card.css';

function Card({ children }) {

    return (
        <div className="card-style">
            {children}
        </div>
    );
}

const styles = {

};


export default Card;