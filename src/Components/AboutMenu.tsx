import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    // Abre o menu
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    // Fecha o menu
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<>

        <Button sx={{ my: 2, color: '#45433a', display: 'block' }} onClick={handleClick} >Sobre</Button>

        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >

            <Link to={'/about'} onClick={handleClose} style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem>A Empresa</MenuItem>
            </Link>
            <Link to='/valores' onClick={handleClose} style={{ textDecoration: 'none', color: 'inherit' }}>
                <MenuItem>Missão, Visão e Valores</MenuItem>
            </Link>
        </Menu>
    </>);
}

export { AboutMenu };