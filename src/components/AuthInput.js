import React from 'react';
import FormInput from './FormInput';

function AuthInput({ email, onChangeEmail, password, onChangePassword }) {

    return (
        <>
            <FormInput
                id="emailInput"
                type="email"
                label="Email:"
                value={email}
                onChangeText={onChangeEmail}
            />
            <FormInput
                id="passwordInput"
                type="password"
                label="Password:"
                value={password}
                onChangeText={onChangePassword}
            />
        </>
    );
}

export default AuthInput;