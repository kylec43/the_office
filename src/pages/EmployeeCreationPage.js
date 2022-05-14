import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import Card from '../components/Card';
import SelectInput from '../components/SelectInput';
import '../css/EmployeeCreationPage.css';

function EmployeeCreationPage() {

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("Male");

    return (
        <div style={styles.container}>
            <Card style={styles.card}>
                <h3 className="form-title">Employee Application</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <FormInput
                                id="firstNameInput"
                                type="text"
                                label="First Name:"
                                value={firstName}
                                onChangeText={setFirstName}
                            />
                        </div>
                        <div className="col-md-4">
                            <FormInput
                                id="middleNameInput"
                                type="text"
                                label="Middle Name:"
                                value={middleName}
                                onChangeText={setMiddleName}
                            />
                        </div>
                        <div className="col-md-4">
                            <FormInput
                                id="lastNameInput"
                                type="text"
                                label="Last Name:"
                                value={lastName}
                                onChangeText={setLastName}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <SelectInput
                                id="genderInput"
                                label="Gender:"
                                value={gender}
                                onChange={(event) => setGender(event.target.value)}
                                options={["Male", "Female", "Other"]}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

const styles = {
    card: {
        maxWidth: 1280,
    },
    container: {
        padding: "0px 20px"
    }
};

export default EmployeeCreationPage;