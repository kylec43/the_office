import React from 'react';
import '../css/Button.css';

function Button({ title, style, onPress }) {

    return (
        <button 
            className="btn-primary button-style" 
            style={style}
            onClick={onPress}
        >
            {title}
        </button>
    );
}


export default Button;