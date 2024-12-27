import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Box, Container } from '@mui/material';

// Função para criar um cartão de cada área no organograma
const OrgChartCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
        <Card sx={{ maxWidth: 200, margin: 1 }}>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

const OrgChart: React.FC = () => {
    useEffect(() => {
        document.title = 'Estrutura';
    }, []);
    return (
        <Container sx={{ padding: 0 }}>
            <Typography variant="h4" component="div" sx={{ marginBottom: 2, textAlign: 'center' }}>
                Organograma da Suzano
            </Typography>
            <Grid container spacing={0} justifyContent="center"> {/* Reduzido o spacing de 3 para 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <OrgChartCard title="Diretoria Executiva" description="Liderança geral da empresa." />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OrgChartCard title="Financeiro" description="Gestão financeira e investimentos." />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OrgChartCard title="Comercial" description="Vendas e marketing de produtos." />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OrgChartCard title="Operações" description="Produção, qualidade e logística." />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OrgChartCard title="Sustentabilidade" description="Gestão ambiental e práticas sustentáveis." />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OrgChartCard title="RH" description="Gestão de pessoas e desenvolvimento." />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OrgChartCard title="TI" description="Infraestrutura tecnológica e inovação." />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OrgChartCard title="Jurídico" description="Gestão de aspectos legais e compliance." />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OrgChartCard title="P&D" description="Pesquisa e inovação de produtos." />
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrgChart;
