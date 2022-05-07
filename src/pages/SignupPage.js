import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AuthPage.css';
import Card from '../components/Card';
import AuthInput from '../components/AuthInput';
import Button from '../components/Button';
import { signup } from '../api/officeApi';

function SignupPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Card style={styles.cardStyle}>
                <h3 className="form-title">Employee Signup</h3>
                <AuthInput
                    emailValue={email}
                    passwordValue={password}
                    onChangeEmail={setEmail}
                    onChangePassword={setPassword}
                />
                <Button
                    title="Sign Up"
                    onPress={() => {

                        signup().then(result => {
                            alert(result);
                            navigate("/home");
                        }).catch(e => {
                            alert(e);
                        });
                    }}
                />
                <Button
                    title="Already have an account? Log In!"
                    className="auth-page-button-style"
                    onPress={() => navigate("/login")}
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
    }
}

export default SignupPage;