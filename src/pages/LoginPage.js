import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { login } from '../api/officeApi';
import '../css/AuthPage.css';

function LoginPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Card style={styles.cardStyle}>
                <h3 className="form-title">Employee Login</h3>
                <FormInput
                    id="emailInput"
                    type="email"
                    label="Email:"
                    value={email}
                    onChangeText={setEmail}
                />
                <FormInput
                    id="passwordInput"
                    type="password"
                    label="Password:"
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    title="Log In"
                    onPress={() => {

                        login(email, password).then(result => {
                            alert(result);
                            navigate("/home");
                        }).catch(e => {
                            alert(e);
                        });
                    }}
                />
                <Button
                    title="New User? Sign Up!"
                    className="auth-page-button-style"
                    onPress={() => navigate("/signup")}
                />
            </Card>
            <h3>{email}</h3>
            <h3>{password}</h3>
        </>
    );
}

const styles = {
    cardStyle: {
        margin: "50px auto 0px",
        padding: "32px 32px 40px"
    },
    signupButton: {
        backgroundColor: "green"
    }
}

export default LoginPage;