import React from 'react';
import '../css/SelectInput.css';

function SelectInput({ options = [], id, label = "", value, onChange, labelStyle, containerStyle, inputStyle }) {
    return (
        <>
            <div className="mb-3" style={containerStyle}>
                <label className="form-label select-input-label" htmlFor={id} style={labelStyle}>{label}</label>
                <select style={inputStyle} className="form-select select-input" name={id} id={id} value={value} onChange={onChange}>
                    {options.map((value, index) => {
                        return (
                            <option value={value} key={`${value}${index}`}>{value}</option>
                        );
                    })}
                </select>
            </div>
        </>
    );
}

export default SelectInput;