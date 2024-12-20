import React, { useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Home = () => {
    useEffect(() => {
        document.title = "Home - Boas Vindas Suzano";
    }, []);
    return (<>
        <Container maxWidth='lg'>
            <Typography variant='h4' id="home_title">Bem vindo a Suzano</Typography>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nesciunt. Libero quo animi sequi beatae, harum officiis sunt laborum ad non, dolores facere labore nostrum explicabo maiores dolor fuga vitae illo mollitia similique excepturi voluptatem necessitatibus quasi porro. Ex aliquid odio fuga maxime laudantium sapiente dicta vel. Delectus corrupti praesentium natus, laudantium nemo sit maiores placeat magnam totam expedita dolorum rem sint voluptas aut accusantium aperiam molestias repellat nostrum? Ipsum consectetur asperiores similique fugit rem tempore, eaque dicta, impedit voluptates numquam labore ad libero deleniti quam ea repellendus dolor nam unde architecto? Modi assumenda, minima vitae nostrum eaque placeat, ipsum voluptate provident voluptas nesciunt ullam. Reprehenderit voluptate ullam, quasi ad blanditiis, odio excepturi quisquam aperiam explicabo, obcaecati quam et a illum molestias dignissimos? Architecto quia nemo eaque, voluptatum animi sed a molestias magnam corporis, nostrum esse, ex temporibus totam nulla modi! Aut quisquam eius, quis pariatur itaque quos dignissimos sed quam animi iure quia eveniet, cupiditate at. Provident accusantium iusto est assumenda ullam, neque nisi sed ipsa tempora harum temporibus, iure explicabo architecto distinctio culpa impedit! Dicta fuga id quidem a ab accusamus, placeat laborum ducimus esse exercitationem veniam porro atque distinctio est saepe beatae enim eius eos libero?</p>
        </Container>
    </>);
}

export default Home;