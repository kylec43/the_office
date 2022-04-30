import React from 'react';
import Card from './Card';
import "../css/LoginForm.css";
import AuthInput from './AuthInput';
import Button from './Button';


function LoginForm({ title = "", onSubmit, cardStyle, titleStyle, emailValue, onChangeEmail, passwordValue, onChangePassword }) {

    return (
        <Card style={cardStyle}>
            <h3 className="form-title" style={titleStyle}>{title}</h3>
            <AuthInput
                emailValue={emailValue}
                passwordValue={passwordValue}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
            />
            <Button
                title="Login"
                onPress={onSubmit}
            />
        </Card>
    );
}

export default LoginForm;