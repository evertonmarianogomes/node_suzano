import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { user } from "../routes/index";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { AboutMenu } from './AboutMenu';

const pages = [
    { name: 'Cultura', to: '/cultura' },
    { name: 'Normas e Procedimentos', to: '/documents' },
    { name: 'Benefícios', to: '/benefits' },
    { name: 'Estrutura', to: '/orgchart' },
    { name: 'Treinamento', to: '/opportunities' },
    { name: 'Fale Conosco', to: '/faq' },

];
const settings = ['Perfil', 'Sair'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);;

    // Abre o menu
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    // Fecha o menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed"
            elevation={0}
            sx={{
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)', // Efeito de desfoque
                WebkitBackdropFilter: 'blur(10px)', // Compatibilidade com Safari
                color: '#333',
                boxShadow: 'none',
            }}>

            <Container maxWidth="lg">
                <Toolbar disableGutters >
                    <Link to="/">
                        <Typography
                            variant="h6"
                            noWrap

                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={'/images/logo-suzano.png'} style={{ width: '100px' }} />
                        </Typography>

                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Mobile Menu */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <Link to="/about" style={{ textDecoration: 'none', color: '#45433a' }}>
                                <MenuItem onClick={handleCloseNavMenu} >
                                    <Typography sx={{ textAlign: 'center' }}>Sobre</Typography>
                                </MenuItem>
                            </Link>
                            <Link to="/valores" style={{ textDecoration: 'none', color: '#45433a' }}>
                                <MenuItem onClick={handleCloseNavMenu} >
                                    <Typography sx={{ textAlign: 'center' }}>Missão, visão e valores</Typography>
                                </MenuItem>
                            </Link>
                            {pages.map((page) => (
                                <Link to={page.to} style={{ textDecoration: 'none', color: '#45433a' }}>
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu} >
                                        <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>

                        {/* End Mobile Menu */}
                    </Box>

                    {/* Mobile Title */}
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to='/' style={{ margin: 0, padding: 0 }}>
                            <img src={'/images/logo-suzano.png'} style={{ width: '100px' }} />
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        {/* ABOUT MENU */}
                        <AboutMenu />

                        {pages.map((page) => (
                            <Link to={page.to} style={{ textDecoration: 'none' }}>
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#45433a', display: 'block', textDecoration: 'none' }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Opções de Usuário">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user?.firstName} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem disabled>{user?.firstName} {user?.lastName}</MenuItem>
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
