import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import { useTheme } from '@mui/material/styles';
import "./Valores.scss";

export const ValoresCarossel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const theme = useTheme();

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: any) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const items = [
        {
            id: 1,
            title: "Missão",
            content: "Produzir papel e celulose de maneira sustentável, inovadora e responsável, atendendo às necessidades de seus clientes com qualidade e eficiência.",
        },
        {
            id: 2,
            title: "Visão",
            content: "Ser líder no setor de papel e celulose, destacando-se pela excelência operacional e pelo compromisso com a sustentabilidade.",
        },
        {
            id: 3,
            title: "Valores",
            content: (


                <ul>
                    <li><b>Transparência: </b> Compromisso com a divulgação de informações claras, autênticas e acessíveis.</li>
                    <li><b>Qualidade: </b>Garantia de excelência na entrega de produtos e serviços.</li>
                    <li><b>Inovação: </b> Investimento contínuo no desenvolvimento de tecnologias e na evolução da equipe.</li>
                    <li><b>Responsabilidade: </b>Alinhamento irrestrito às legislações, incluindo normas anticorrupção e demais requisitos legais.</li>
                    <li><b>Integridade: </b>Compromisso com o bem-estar das pessoas e com práticas éticas.</li>
                    <li><b>Respeito às Pessoas e ao Meio Ambiente: </b>Prioridade à integridade física, social e ambiental, atuando de forma justa e sustentável.</li>
                </ul>

            ),
        },

    ];

    const slides = items.map((item) => (
        <CarouselItem
            key={item.id}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
        >
            <Card style={{ margin: '0 auto' }} sx={{
                width: '80%',
                height: '20rem',
                [theme.breakpoints.down('sm')]: {
                    width: '90%',
                    height: '30rem'
                }
            }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" >
                        {item.content}
                    </Typography>
                </CardContent>
            </Card>
        </CarouselItem>
    ));


    return (<>
        <div className='main_div'>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}


                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    </>);






};