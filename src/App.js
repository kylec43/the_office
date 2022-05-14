import React from 'react';
import './css/App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import EmployeeCreationPage from './pages/EmployeeCreationPage';

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/login" />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/employee_creation" element={<EmployeeCreationPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;