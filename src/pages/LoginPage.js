import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();
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
                cardStyle={styles.cardStyle}
                onSubmit={() => { navigate("/home") }}
            />
            <h3>{email}</h3>
            <h3>{password}</h3>
        </>
    );
}

const styles = {
    cardStyle: {
        margin: "50px auto 0px",
        padding: "32px 32px 40px"
    }
}

export default LoginPage;