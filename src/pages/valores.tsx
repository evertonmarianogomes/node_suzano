import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { ValoresCarossel } from './Valores/ValoresCarousel';

const Valores = () => {
    useEffect(() => {
        document.title = "Missão, visão e Valores - Boas Vindas Suzano";
    }, []);
    return (<>
        <Container maxWidth={'lg'}>
            <Typography variant='h6' id="home_title">Missão, visão e valores</Typography>

            <ValoresCarossel />

        </Container>
    </>);
}

export default Valores;