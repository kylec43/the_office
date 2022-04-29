import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <LoginForm
                title="Employee Login"
                emailValue={email}
                passwordValue={password}
                onChangeEmail={setEmail}
                onChangePassword={setPassword}
            />
            <h3>{email}</h3>
            <h3>{password}</h3>
        </>
    );
}

export default LoginPage;