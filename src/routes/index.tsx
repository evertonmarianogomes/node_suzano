import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CssBaseline from '@mui/material/CssBaseline';
import "../scss/style.scss";
import ResponsiveAppBar from "../Components/Appbar";
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export const user = {
    firstName: 'Isabela',
    lastName: 'Oliva'
};

const AppRoutes = () => {
    return (
        <Router>
            <CssBaseline />
            <ResponsiveAppBar />
            <Box sx={{ marginTop: 10 }}></Box>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <Box sx={{ textAlign: 'center', mt: 10 }}>
                <p>Boas Vindas Suzano - v1.00.1002</p>
                <p>Fase Empresa Suzano/SENAI-MS</p>
            </Box>
        </Router>
    );
};

export default AppRoutes;
