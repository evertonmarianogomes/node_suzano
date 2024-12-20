import { Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import "../scss/ImageScroller.scss";

const About = () => {
    useEffect(() => {
        document.title = "Sobre - Boas Vindas Suzano";
    }, []);

    return (<>
        <Container maxWidth={'lg'}>
            <Typography variant='h4' id="home_title">Sobre a empresa</Typography>

            <Typography variant='body1' sx={{ my: 2 }}>Aqui está um breve resumo da história da Suzano</Typography>

            <Box className="image-container">
                <img src='/images/LINHA_DO_TEMPO_SUZANO.jpg' alt='LINHA DO TEMPO SUZANO' className='scrollable-image' />
            </Box>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, eius fugit quam cumque eveniet commodi reprehenderit, dolorum deleniti earum tempore quia, doloribus iure! Maiores sit eaque, porro expedita labore voluptatibus.</p>
        </Container >

    </>);
}

export default About;