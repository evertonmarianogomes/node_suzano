import React, { useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { user } from '../routes';
import { Card, CardMedia } from '@mui/material';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {

    useEffect(() => {
        document.title = "Home - Boas Vindas Suzano";
    }, []);
    return (<>
        <Container maxWidth='lg'>
            <Typography variant='h4' id="home_title">Bem vindo(a) {user?.firstName} </Typography>

            <Typography sx={{ fontWeight: '300', fontSize: 21, mt: 2, textAlign: 'justify' }}>Estamos muito felizes em tê-lo(a) como parte da nossa equipe. Como novo colaborador(a), você faz parte de uma empresa com uma longa trajetória de inovação, sustentabilidade e compromisso com a transformação. Acreditamos que sua chegada será um grande diferencial para o nosso crescimento contínuo. Aqui, você terá a oportunidade de desenvolver suas habilidades, colaborar com uma equipe talentosa e contribuir para o sucesso de uma das maiores empresas de papel e celulose do mundo. A Suzano é mais que uma empresa, é um ambiente que valoriza o respeito, a ética e o desenvolvimento de cada um de seus colaboradores. Vamos juntos, trabalhar para continuar a nossa jornada de sucesso.</Typography>



        </Container>
    </>);
}

export default Home;