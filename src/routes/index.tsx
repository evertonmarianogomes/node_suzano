import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Valores from '../pages/valores';
import Cultura from '../pages/Cultura';
import DocumentSections from '../pages/Normas';


import CssBaseline from '@mui/material/CssBaseline';
import "../scss/style.scss";
import ResponsiveAppBar from "../Components/Appbar";
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import BenefitsCard from '../pages/Beneficios';
import OrgChart from '../pages/Estrutura';
import GrowthOpportunitiesTable from '../pages/Treinamento';
import FaqCollapse from '../pages/FaleConosco';




export const user = {
    firstName: 'Viviane',
    lastName: 'Nascimento'
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
                <Route path="/valores" element={<Valores />} />
                <Route path="/cultura" element={<Cultura />} />
                <Route path="/documents" element={<DocumentSections />} />
                <Route path="/benefits" element={<BenefitsCard />} />
                <Route path="/orgchart" element={<OrgChart />} />
                <Route path="/opportunities" element={<GrowthOpportunitiesTable />} />
                <Route path="/faq" element={<FaqCollapse />} />

            </Routes>

            <Box sx={{ textAlign: 'center', mt: 10 }}>
                <p>Boas Vindas Suzano - v1.00.1002</p>
                <p>Fase Empresa Suzano/SENAI-MS</p>
            </Box>
        </Router>
    );
};

export default AppRoutes;
