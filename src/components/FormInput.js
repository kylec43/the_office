import React from 'react';
import '../css/FormInput.css';

function FormInput({ id, type = "text", label = "", placeholder = "", value, onChangeText, labelStyle, containerStyle, inputStyle }) {
    
    return (
        <div class="mb-3" style={containerStyle}>
            <label className="form-label input-label" for={id} style={labelStyle}>{label}</label>
            <input 
                type={type} 
                class="form-control form-input" 
                id={id} 
                placeholder={placeholder} 
                value={value}
                onChange={e => onChangeText(e.target.value)}
                style={inputStyle}
            />
        </div>
    );
}


export default FormInput;