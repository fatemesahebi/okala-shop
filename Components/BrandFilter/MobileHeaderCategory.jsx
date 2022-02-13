import React from 'react';
import {Button, Stack, Typography} from "@mui/material";
import {Box, Paper} from "@material-ui/core";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import MobileDialog from "./MobileDialog";
import Image from "next/image";
import magnifier from './magnifier.svg'
import back from './back.svg'
import {menuData} from "../../lib/mirage/menuData";

const MobileHeaderCategory = ({categoryName,brandsOfCategory,filterBrand,offerFilter,setOfferFilter,setPriceFilter,maxPrice,setFilterBrand,sort,setSort}) => {
    const categorizeResultsData = menuData.filter(item => item.mainTitle === categoryName)
    console.log(categorizeResultsData)
    let categoryTags = categorizeResultsData ?
        [categorizeResultsData[0].items1[0].title, categorizeResultsData[0].items1[1].title]
        : ['', '']
    return (
        <Box>
            <AppBar position="fixed" elevation={0} sx={{
                backgroundColor: '#02a0a4',
                display: {xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}
            }}>
                <Toolbar variant="dense" sx={{height: '137px', alignItems: 'flex-start', padding: '10px'}}>

                    <Box style={{display: 'flex', flexDirection: 'column', flexGrow: '1'}}>
                        <Box style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                            <Box style={{display: 'flex'}}>
                                <Image src={back}/>
                                <Box><Typography
                                    sx={{display: 'flex', color: 'white', marginRight: '3.5rem', fontWeight: 'bold'}}
                                    component="div">
                                    {categoryName}
                                </Typography></Box>
                            </Box>

                            <Box><Image src={magnifier}/></Box>
                        </Box>
                        <Box style={{marginTop: '30px'}}>
                            <Button style={{
                                backgroundColor: 'white',
                                color: 'black',
                                fontWeight: 'bold',
                                marginLeft: '10px',
                                padding: '2px 30px 2px 30px',
                                borderRadius: '30px',
                                display: 'inline'
                            }}>{categoryTags[0]}</Button>
                            <Button style={{
                                backgroundColor: 'white',
                                color: 'black',
                                fontWeight: 'bold',
                                marginLeft: '10px',
                                padding: '2px 30px 2px 30px',
                                borderRadius: '30px',
                                display: 'inline'
                            }}>{categoryTags[1]}</Button>
                        </Box>

                    </Box>

                </Toolbar>

                <Box>
                    <MobileDialog brandsOfCategory={brandsOfCategory}
                                  filterBrand={filterBrand} setFilterBrand={setFilterBrand}
                                  setOfferFilter={setOfferFilter} offerFilter={offerFilter}
                                  setPriceFilter={setPriceFilter}
                                  maxPrice={maxPrice}/>
                </Box>
            </AppBar>

        </Box>
    )
        ;
};

export default MobileHeaderCategory;
