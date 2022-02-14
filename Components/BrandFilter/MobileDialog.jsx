import * as React from 'react';
import {Button, ListItem, List, Divider, AppBar, Toolbar, IconButton, Typography, Dialog} from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slide from '@mui/material/Slide';
import MobileBrandFilter from "./MobileBrandFilter";
import MobileCategory from "./MobileCategory";
import PriceFilterSlider from "../PriceFilter/PriceFilterSlider";
import OnlyAvailableProducts from "../CommodityFilters/OnlyAvailableProducts";
import OnlyOfferProducts from "../CommodityFilters/OnlyOfferProducts";
import Image from "next/image";
import arrow from "./arrow.svg";
import sortIcon from '../PriceFilter/sort.svg'
import nextIcon from './nextIcon.svg'
import FilterMobileDrawer from "./FilterMobileDrawer";
import {Box} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});
const MobileDialog = ({
                          brandsOfCategory,
                          setFilterBrand,
                          filterBrand,
                          setOfferFilter,
                          offerFilter,
                          setPriceFilter,
                          maxPrice,sort,setSort

                      }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)



    };
    const handleDeleteFilter = () => {
        setOpen(false)
        setFilterBrand([])
        setOfferFilter(false)
        setPriceFilter([0, maxPrice])
    }

    return (
        <div>
            <AppBar position="static" color={'white'} elevation={0}
                    sx={{height: '3rem', display: {xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <Typography style={{
                        display: 'flex',
                        flexGrow: '0.97',
                        justifyContent: 'center'
                    }}>
                        <Image src={arrow}/><FilterMobileDrawer sort={sort} setSort={setSort}  />
                    </Typography>


                    <Divider orientation="vertical" variant="middle" flexItem sx={{height: '2rem'}}/>
                    <Button onClick={handleClickOpen} variant="outlined"
                            sx={{
                                border: 'none',
                                display: 'flex',
                                flexGrow: '1',
                                "&.MuiButtonBase-root:hover": {border: "none", backgroundColor: 'transparent'}
                            }}>
                        <Image src={sortIcon}/>
                        <Typography
                            style={{
                                color: 'black',
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 'bold',
                                marginRight: '5px',
                                fontSize: '14px'
                            }}>فیلترها</Typography>
                    </Button>
                </Toolbar>
            </AppBar>


            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar elevation={1} color={'white'}
                        sx={{position: 'relative', height: '3rem', alignContent: 'baseline', padding: '0'}}>
                    <Toolbar>
                        <IconButton color={'black'} edge="start" onClick={handleClose} aria-label="close">
                            <ArrowForwardIcon/>
                        </IconButton>
                        <Typography sx={{mr: 2, flex: 1, fontWeight: 'bold', display: 'flex', alignItems: 'baseline'}}
                                    component="div">
                            فیلترها
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}} onClick={handleDeleteFilter}>
                            حذف همه فیلترها
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>

                    </ListItem>
                    <Divider/>
                    <ListItem button sx={{display: 'flex', justifyContent: 'space-between', flexGrow: '1'}}>
                        <Typography><MobileCategory/></Typography>
                        <Image src={nextIcon}/>
                    </ListItem>
                    <Divider/>
                    <ListItem button sx={{display: 'flex', justifyContent: 'space-between', flexGrow: '1'}}>
                        <Typography><MobileBrandFilter brandsOfCategory={brandsOfCategory}
                                                       filterBrand={filterBrand}
                                                       setFilterBrand={setFilterBrand}/></Typography>
                        <Image src={nextIcon}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: '1'
                        }}>
                            <Box style={{display: 'flex', justifyContent: 'space-between', flexGrow: '1'}}>
                                <Box>
                                    <Box><Typography component="div"> محدوده قیمت</Typography></Box>

                                </Box>
                                <Box>
                                    <Box><Typography>مقدار پیشفرض</Typography></Box>

                                </Box>
                            </Box>
                            <Box style={{display: 'flex', justifyContent: 'center', flexGrow: '1'}}>
                                <Box sx={{width: '90vw'}}><PriceFilterSlider/></Box>
                            </Box>
                        </div>


                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Typography><OnlyAvailableProducts/></Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Typography><OnlyOfferProducts offerFilter={offerFilter}
                                                       setOfferFilter={setOfferFilter}/></Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Button sx={{
                            mt: '2rem',
                            width: '100vw',
                            backgroundColor: '#f01436',
                            "&.MuiButtonBase-root:hover": {bgcolor: "#f01436"}
                        }} variant="contained"><Typography>اعمال فیلتر</Typography></Button>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
};

export default MobileDialog;
