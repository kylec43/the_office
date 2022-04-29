import React from 'react';
import '../css/Button.css';

function Button({ title, style }) {

    return (
        <button className="btn-primary button-style" style={style}>{title}</button>
    );
}


export default Button;