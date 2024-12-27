import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Container, Grid2, Button } from '@mui/material';

const sections = [
    {
        title: 'Código de Ética e Conduta',
        content: `Este é o documento central que orienta o comportamento de todos os colaboradores, parceiros e fornecedores.
Princípios Fundamentais: Ética, transparência, respeito aos direitos humanos, responsabilidade ambiental e social.
Temas Abordados:
- Combate à corrupção e suborno.
- Respeito à diversidade e combate à discriminação.
- Conflitos de interesse: orientações para prevenir e gerenciar situações que possam comprometer decisões imparciais.
- Uso responsável de recursos e proteção de informações sigilosas.
Finalidade: Garantir que todas as ações estejam alinhadas aos valores da empresa, promovendo confiança e credibilidade junto a stakeholders.`,
    },
    {
        title: 'Normas de Sustentabilidade',
        content: `A Suzano é líder no uso de recursos renováveis, e sua política de sustentabilidade integra práticas ambientais, sociais e de governança.
Práticas Ambientais:
- Uso de florestas plantadas para a produção de celulose, evitando o desmatamento de áreas nativas.
- Neutralidade de carbono até 2030, com metas para reduzir emissões e capturar CO₂ da atmosfera.
- Gestão responsável de recursos hídricos e redução de resíduos sólidos.
Responsabilidade Social:
- Apoio às comunidades locais com programas de educação, capacitação profissional e geração de renda.
- Respeito às populações indígenas e tradicionais em áreas de operação.
Relatórios: Periodicamente, a empresa publica relatórios de sustentabilidade para medir seu impacto e cumprir suas metas.`,
    },
    {
        title: 'Código de Conduta para Fornecedores',
        content: `Esse documento regula as relações comerciais da Suzano com seus fornecedores e parceiros de negócio, garantindo alinhamento com seus valores éticos e de sustentabilidade.
Critérios Exigidos:
- Conformidade com legislações trabalhistas e ambientais.
- Combate ao trabalho infantil, escravo ou em condições degradantes.
- Práticas de sustentabilidade no uso de recursos e redução de impacto ambiental.
Auditorias e Monitoramento:
- Os fornecedores são sujeitos a auditorias para verificar o cumprimento dessas normas.`,
    },
    {
        title: 'Políticas Internas da Empresa',
        content: `A Suzano adota diversas políticas que regulam as operações internas, buscando um ambiente de trabalho seguro, eficiente e alinhado à legislação vigente.
Segurança e Saúde Ocupacional:
- Prioridade na prevenção de acidentes, com treinamentos regulares e protocolos claros.
- Investimento em equipamentos e tecnologias que garantam a segurança dos colaboradores.
Compliance:
- Sistema robusto para garantir a conformidade com leis e regulamentos, com um canal de denúncias ativo e confidencial.
Gestão de Riscos:
- Monitoramento contínuo para identificar, avaliar e mitigar riscos em operações e processos.
Proteção de Dados:
- Alinhada à Lei Geral de Proteção de Dados (LGPD), a Suzano estabelece regras rígidas para a coleta, armazenamento e uso de informações pessoais.`,
    },
];

const DocumentSections: React.FC = () => {
    useEffect(() => {
        document.title = 'Normas e Procedimentos';
    });
    return (
        <Container>
            <Grid2 container spacing={4}>
                {sections.map((section, index) => (
                    <Grid2 key={index} sx={{ width: '100%' }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {section.title}
                                </Typography>
                                <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
                                    {section.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>

            <Button variant='contained' sx={{ mt: 2 }} onClick={() => {
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSevq1aNUnPyVn2rcidkN2TamwMUBJgTEnHWBmO_WxQznQvDiw/viewform', '_blank');
            }}>Link para o formulário de Situações Hipotéticas</Button>
        </Container>
    );
};

export default DocumentSections;
