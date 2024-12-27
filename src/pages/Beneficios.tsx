import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

const benefits = [
    {
        title: 'Saúde e Bem-Estar',
        content: `Planos de saúde e odontológico, apoio psicológico, ginástica laboral e parcerias com academias.`,
    },
    {
        title: 'Qualidade de Vida',
        content: `Horário flexível, vale-alimentação, espaços de convivência e modelos híbridos de trabalho.`,
    },
    {
        title: 'Desenvolvimento Profissional',
        content: `Bolsas de estudo, plataforma de treinamentos, plano de carreira e workshops.`,
    },
    {
        title: 'Reconhecimento',
        content: `Bônus por desempenho, programas de indicação e celebrações internas.`,
    },
    {
        title: 'Bem-Estar Familiar',
        content: `Auxílio-creche, licenças estendidas e seguro de vida.`,
    },
    {
        title: 'Sustentabilidade e Cidadania',
        content: `Programas de voluntariado, transporte sustentável e descontos em produtos ecológicos.`,
    },
];

const BenefitsCard: React.FC = () => {
    useEffect(() => {
        document.title = 'Benefícios';
    });
    return (
        <Container>
            <Grid container spacing={4}>
                {benefits.map((benefit, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {benefit.title}
                                </Typography>
                                <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
                                    {benefit.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BenefitsCard;