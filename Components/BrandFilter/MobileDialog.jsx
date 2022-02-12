import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slide from '@mui/material/Slide';
import MobileBrandFilter from "./MobileBrandFilter";
import MobileCategory from "./MobileCategory";
import PriceFilterSlider from "../PriceFilter/PriceFilterSlider";
import OnlyAvailableProducts from "../CommodityFilters/OnlyAvailableProducts";
import OnlyOfferProducts from "../CommodityFilters/OnlyOfferProducts";
import Image from "next/image";
import arrow from "./arrow.svg";
import FilterMobileDrawer from "./FilterMobileDrawer";
import sort from './sortIcon.png'
import Container from "@mui/material/Container";
import MobileHeaderCategory from "./MobileHeaderCategory";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});
const MobileDialog = ({brandsOfCategory,setFilterBrand,filterBrand,setOfferFilter,offerFilter,setPriceFilter,maxPrice}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDeleteFilter=()=>{
        setOpen(false)
        setFilterBrand([])
        setOfferFilter(false)
        setPriceFilter([0,maxPrice])
    }

    return (
        <div>
            <AppBar position="static" color={'white'} elevation={0} sx={{height:'3rem',display:{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}}>
                <Toolbar sx={{display:'flex',justifyContent:'space-around',flexGrow:'1',alignItems:'center',alignContent:'center'}}>
                    <Typography>
                        <FilterMobileDrawer/>
                    </Typography>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{height:'2rem'}} />
                    <Button onClick={handleClickOpen} variant="outlined" sx={{border: 'none'}}>
                        <Typography  style={{color: 'black',display:'flex',alignItems:'center'}}><Image width={15} src={arrow}/>فیلترها</Typography>
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
                        <Typography sx={{fontWeight: 'bold'}} onClick={handleClose}>
                            حذف همه فیلترها
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <Typography><MobileCategory/></Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Typography><MobileBrandFilter brandsOfCategory={brandsOfCategory}
                                                       filterBrand={filterBrand} setFilterBrand={setFilterBrand}/></Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <div>
                            <div>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <Typography>محدوده قیمت</Typography>
                                    <Typography>مقدار پیشفرض</Typography>
                                </div>
                                <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                                    <PriceFilterSlider/>
                                </div>

                            </div>
                        </div>


                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Typography><OnlyAvailableProducts/></Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Typography><OnlyOfferProducts offerFilter={offerFilter} setOfferFilter={setOfferFilter}/></Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Button sx={{
                            mt:'2rem',
                            width:'55rem',
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
