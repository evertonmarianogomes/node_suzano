import React, { useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Card, CardContent, Link, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Tipo para armazenar as perguntas e respostas
type FaqItem = {
    question: string;
    answer: string;
};

const faqData: FaqItem[] = [
    {
        question: 'Como posso acessar meus benefícios?',
        answer:
            'Você pode acessar seus benefícios por meio da plataforma de benefícios da empresa, que estará disponível assim que você concluir o processo de integração. Além disso, nosso time de RH estará disponível para orientar sobre como utilizar cada um dos benefícios.',
    },
    {
        question: 'Como faço para registrar uma falta ou pedido de férias?',
        answer:
            'As solicitações de falta e férias devem ser feitas por meio do sistema de gestão de pessoas disponível no portal interno. Você receberá um treinamento sobre como utilizá-lo durante sua integração.',
    },
    {
        question: 'Existe algum programa de saúde mental disponível para os colaboradores?',
        answer:
            'Sim! A Suzano oferece programas de apoio psicológico e saúde mental. A empresa disponibiliza um canal de apoio psicológico, onde os colaboradores podem acessar sessões de orientação e suporte emocional.',
    },
    {
        question: 'Como posso obter suporte caso tenha alguma dúvida sobre o meu salário ou benefícios?',
        answer:
            'Para dúvidas relacionadas ao seu salário ou benefícios, você pode entrar em contato diretamente com o time de RH ou utilizar a central de atendimento ao colaborador. Este canal é dedicado a resolver questões administrativas de forma rápida e eficiente.',
    },
    {
        question: 'Quais são as políticas de segurança no trabalho?',
        answer:
            'A Suzano tem um compromisso com a segurança e saúde no trabalho, oferecendo treinamentos regulares sobre segurança e orientações claras para o ambiente de trabalho. Caso tenha alguma dúvida ou observe uma situação de risco, nossa equipe de segurança está disponível para fornecer suporte imediato.',
    },
    {
        question: 'Como posso solicitar a inclusão de um dependente no meu plano de saúde?',
        answer:
            'A inclusão de dependentes no plano de saúde deve ser feita por meio do sistema de benefícios. O time de RH também pode orientá-lo caso você precise de mais informações ou ajuda durante o processo.',
    },
    {
        question: 'Existe alguma oportunidade de crescimento dentro da empresa?',
        answer:
            'A Suzano investe no desenvolvimento de seus colaboradores por meio de programas de treinamento e capacitação contínuos. Durante sua integração, você aprenderá sobre os caminhos de carreira disponíveis, bem como as avaliações de desempenho realizadas regularmente para apoiar seu crescimento profissional.',
    },
    {
        question: 'Como funciona o programa de integração para novos colaboradores?',
        answer:
            'O programa de integração é projetado para ajudá-lo a se ambientar com a cultura da Suzano, seus processos internos e as ferramentas que utilizará no seu dia a dia. Ele inclui treinamentos, encontros com equipes e orientação sobre as políticas e valores da empresa. Você receberá todas as informações necessárias para um início tranquilo.',
    },
    {
        question: 'O que fazer em caso de um acidente de trabalho?',
        answer:
            'Caso ocorra um acidente de trabalho, é importante seguir os procedimentos estabelecidos na política de segurança, que inclui o reporte imediato ao gestor e à área de segurança. A empresa também oferece suporte médico e acompanhamento contínuo para garantir a recuperação do colaborador.',
    },
    {
        question: 'Como posso fazer uma sugestão ou feedback sobre meu ambiente de trabalho?',
        answer:
            'A Suzano incentiva o envio de feedbacks e sugestões por meio de canais internos. Você pode conversar diretamente com seu gestor ou utilizar as plataformas de feedback anônimo disponíveis para compartilhar suas opiniões sobre o ambiente de trabalho.',
    },
];

const FaqCollapse: React.FC = () => {
    useEffect(() => {
        document.title = 'Perguntas Frequentes e Fale Conosco';
    }, []);
    return (
        <Container maxWidth={'lg'}>
            <Card sx={{ margin: 2 }}>
                <CardContent>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Estamos Aqui para Ajudar
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                        Central de Atendimento ao Colaborador
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        A Suzano oferece uma central de atendimento exclusiva para que os colaboradores possam esclarecer dúvidas e resolver questões administrativas, como benefícios, folha de pagamento, férias, entre outros. Esse canal proporciona um atendimento rápido e eficiente.
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 1 }}>
                        Canal de Denúncias e Compliance
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        Para garantir um ambiente de trabalho ético e transparente, a Suzano disponibiliza um canal de denúncias confidencial. Os colaboradores podem relatar qualquer comportamento inadequado, como assédio, discriminação ou violação das normas internas, sem medo de retaliação. Este canal está alinhado com as políticas de compliance da empresa.
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 1 }}>
                        Programas de Bem-Estar e Saúde
                    </Typography>
                    <Typography variant="body1">
                        A Suzano investe no bem-estar físico e mental de seus colaboradores por meio de programas e benefícios, como:
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        <strong>Apoio psicológico:</strong> Programas de assistência psicológica, oferecendo suporte para questões emocionais ou de saúde mental.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        <strong>Atividades de promoção de saúde:</strong> A empresa realiza campanhas de prevenção e saúde, como vacinação, exercícios físicos e alimentação saudável.
                    </Typography>
                </CardContent>
            </Card>
            <Box sx={{ width: '100%', padding: 2 }}>
                <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center' }}>
                    Perguntas Frequentes
                </Typography>
                {faqData.map((faq, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography variant="h6">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>





            <Card sx={{ margin: 2 }}>
                <CardContent>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                        Para Falar com a Área de Gente & Gestão da Suzano
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 1 }}>
                        Telefone: <strong>(11) 3636 5010</strong>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 1 }}>
                        E-mail: <strong>rhresponde@suzano.com.br</strong>
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                        Você pode enviar sua denúncia para a Ouvidoria, canal confidencial para esclarecimento de dúvidas e relatos de desvios éticos. Abra sua manifestação por ligação, e-mail, ou registro on-line no site.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 1 }}>
                        Telefone: <strong>0800 771 4060 – apenas para o Brasil</strong>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 1 }}>
                        E-mail: <strong>suzano@denuncias.contatoseguro.com.br</strong>
                    </Typography>
                    <Typography variant="body1">
                        <Link href="https://www.contatoseguro.com.br/suzano" target="_blank" color="primary">
                            https://www.contatoseguro.com.br/suzano
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default FaqCollapse;
