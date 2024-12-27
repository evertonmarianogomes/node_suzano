import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import React, { useState, useEffect } from 'react';
import "../scss/ImageScroller.scss";
import video from "../assets/videos/video_sobre.mp4";
import { CardMedia } from '@mui/material';
import css from '@emotion/styled';
import { useTheme } from '@mui/material';



const About = () => {
    const theme = useTheme();
    useEffect(() => {
        document.title = "Sobre - Boas Vindas Suzano";
    }, []);

    return (<>
        <Container maxWidth={'lg'}>
            <Typography variant='h4' id="home_title">Sobre a empresa</Typography>
            <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
                <video controls css={{
                    width: '50%',
                    [theme.breakpoints.down('sm')]: {
                        width: '100%',
                        padding: '2px'
                    }
                }}><source src={video}></source></video>

                <Typography variant='body2' sx={{ width: '100%', textAlign: 'center', mt: 2 }}>Video institucional Suzano</Typography>
            </Box>





            <Typography variant='body1' sx={{ fontSize: 22, my: 3, textAlign: 'justify' }}>
                A Suzano foi fundada em 1924 por Leon Feffer como um pequeno negócio de importação de papéis. Ao longo de sua trajetória, destacou-se como pioneira na utilização de eucalipto para a fabricação de papel, o que ajudou a reduzir a dependência de importações no Brasil.
                Com uma história marcada por crescimento e inovação, a Suzano consolidou sua liderança global no setor de celulose ao realizar a fusão com a Fibria em 2019, tornando-se a maior produtora de celulose de eucalipto do mundo.
                A sustentabilidade é um pilar central da empresa, que investe em reflorestamento, substituição de plásticos por alternativas biodegradáveis e busca alcançar a neutralidade de carbono até 2030. Atualmente, a Suzano exporta para mais de 100 países, combinando inovação, impacto social e compromisso ambiental.
            </Typography>


            <Box className="image-container">
                <img src='/images/LINHA_DO_TEMPO_SUZANO.jpg' alt='LINHA DO TEMPO SUZANO' className='scrollable-image' />
            </Box>

        </Container >

    </>);
}

export default About;