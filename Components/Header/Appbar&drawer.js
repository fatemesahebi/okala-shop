import React, { Component } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListItemText from '@mui/material/ListItemText';
import { createSvgIcon } from '@mui/material';
import {Link,Grid,Button,ListItem,List,Toolbar,Box,AppBar,Divider} from '@mui/material';

const drawerWidth = "30rem";

const PhoneIcon = createSvgIcon(
    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z" />,'Phone');

const DrawerHeader = styled('div')(({ theme }) => ({
    height:'5rem',
    display: 'flex',
    justifyContent:'center',
    // alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function HeaderDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}
                    sx={{
                        boxShadow:'none',
                        backgroundColor:'white !important',
                        display: { xs: 'block', md: 'none' }}}>
                <Toolbar
                    sx={{ justifyContent:'space-between'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ color:'black !important', mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box>
                        <img style={{width:'4rem'}} src="https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Flogo-okala2.svg&w=128&q=75" alt="" />
                    </Box>
                    <Button variant="text" disableElevation
                            sx={{background:'transparent'}}>
                        <Grid container
                        >
                            <Grid item>
                                <PhoneIcon sx={{color:'black !important'}}/>
                            </Grid>
                            <Grid item>
                                <Link sx={{color:'black !important', fontWeight:'bold'}} mr={1} href="tel:1536"  underline="none" >۱۵۳۶</Link>
                            </Grid>
                        </Grid>
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                dir={'ltr'}
                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        display: { xs: 'block', md: 'none' },
                    },
                }}
                transitionDuration={0}
                anchor="right"
                open={open}
            >
                <DrawerHeader >
                    <Link>
                        <Box>
                            <img src="https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Flogo-okala2.svg&w=128&q=75" alt="" />
                        </Box>
                    </Link>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '.5rem',
                            top:'.5rem'
                        }}>
                        <IconButton
                            onClick={handleDrawerClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DrawerHeader>
                <Divider />
                <List>
                    {['مواد غذایی ',
                        'نوشیدنی و دمنوش',
                        'خوار و بار',
                        'آرایشی و بهداشتی',
                        'میوه و سبزیجات',
                        'لوازم التحریر و اداری',
                        'مادر و کودک',
                        'پوشاک'
                    ].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText sx={{textAlign:'right'}} primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}