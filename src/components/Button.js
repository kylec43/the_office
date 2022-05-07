import React from 'react';
import '../css/Button.css';

function Button({ title, style, className = "", onPress }) {

    return (
        <button 
            className={`btn-primary button-style ${className}`} 
            style={style}
            onClick={onPress}
        >
            {title}
        </button>
    );
}


export default Button;