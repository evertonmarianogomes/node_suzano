import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, Button, Box } from '@mui/material';

const GrowthOpportunitiesTable: React.FC = () => {
    useEffect(() => {
        document.title = 'Treinamentos';
    });
    const growthOpportunities = [
        { title: 'Plano de Carreira', description: 'Avaliações periódicas e orientações claras para o avanço na empresa.' },
        { title: 'Mobilidade Interna', description: 'Troca de áreas, cargos e localidades para experiências diversificadas.' },
        { title: 'Reconhecimento de Talentos', description: 'Promoções, prêmios e participação em projetos estratégicos.' },
    ];

    const trainingPrograms = [
        { title: 'Academia Suzano', description: 'Plataforma com cursos técnicos e comportamentais.' },
        { title: 'Liderança', description: 'Formação de líderes e foco em práticas éticas e sustentáveis.' },
        { title: 'Capacitação Técnica', description: 'Treinamentos específicos em operações, logística e P&D.' },
        { title: 'Mentoria', description: 'Conexão entre colaboradores experientes e novos talentos.' },
        { title: 'Educação Continuada', description: 'Bolsas para graduação, pós-graduação e idiomas.' },
        { title: 'Sustentabilidade', description: 'Cursos sobre práticas ambientais no trabalho.' },
    ];

    return (
        <Container maxWidth={'lg'}>
            <Typography variant="h4" gutterBottom>
                Crescimento Profissional e Treinamentos na Suzano
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Oportunidades de Crescimento
            </Typography>
            <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Oportunidades</strong></TableCell>
                            <TableCell><strong>Descrição</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {growthOpportunities.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Programas de Treinamento
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Programa</strong></TableCell>
                            <TableCell><strong>Descrição</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trainingPrograms.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                <Button variant='contained' onClick={() => {
                    window.open('https://portaldofornecedor.suzano.com.br/semear-online', '_blank');
                }}>Acesse o portal do treinamento</Button>


            </Box>
        </Container>
    );
};

export default GrowthOpportunitiesTable;
