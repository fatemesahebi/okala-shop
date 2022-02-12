import React from 'react';
import {Button, Stack, Typography} from "@mui/material";
import {Box, Paper} from "@material-ui/core";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import MobileDialog from "./MobileDialog";
import Image from "next/image";
import magnifier from './magnifier.svg'
import back from './back.svg'

const MobileHeaderCategory = () => {
    return (
        <Box>
            <AppBar position="fixed" sx={{
                backgroundColor: '#02a0a4',
                display: {xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}
            }}>
                <Toolbar variant="dense" sx={{height: '137px', alignItems: 'flex-start', padding: '10px'}}>

                    <Box style={{display:'flex',flexDirection:'column',flexGrow:'1'}}>
                    <Box style={{display: 'flex', justifyContent: 'space-between',padding:'10px'}}>
                        <Box style={{display:'flex'}}>
                        <Image src={back}/>
                        <Box><Typography sx={{display: 'flex', color: 'white',marginRight:'3.5rem',fontWeight:'bold'}} component="div"> میوه و
                            سبزیجات </Typography></Box>
                        </Box>

                        <Box><Image src={magnifier}/></Box>
                    </Box>
                        <Box style={{marginTop:'30px'}}>
                            <Button style={{backgroundColor:'white',color:'black',fontWeight:'bold',marginLeft:'10px',padding:'2px 30px 2px 30px',borderRadius:'30px',display:'inline'}}>میوه</Button>
                            <Button style={{backgroundColor:'white',color:'black',fontWeight:'bold',marginLeft:'10px',padding:'2px 30px 2px 30px',borderRadius:'30px',display:'inline'}}>سبزی</Button>
                        </Box>

                    </Box>


                    {/*<Box sx={{display: 'flex', justifyContent: 'space-between'}}>*/}
                    {/*    <Box>b</Box>*/}
                    {/*    <Box>b</Box>*/}
                    {/*</Box>*/}
                    {/*<Box>*/}

                    {/*</Box>*/}
                </Toolbar>

                <Box>
                    <MobileDialog/>
                </Box>
            </AppBar>

        </Box>
    )
        ;
};

export default MobileHeaderCategory;
//

//                             </Box>
//