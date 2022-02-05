import React from 'react';
import {Box, Grid} from "@material-ui/core";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import {Typography} from "@mui/material";

const OkalaBlogHeader = () => {
    return (
        <div style={{display: "flex", justifyContent: 'center'}}>
            <div style={{display: "flex", justifyContent: 'space-between',  width: '83rem',alignContent:'center',alignItems:'center',borderBottom:'#e6e6e6 solid 2px',marginBottom:'5px'}}>
                <div style={{marginBottom:'20px'}}>
                    <Typography sx={{fontSize:'16px',fontWeight:'bold'}}>اُکالا بلاگ</Typography>
                </div>
                <div>
                    <div style={{display: "flex", justifyContent: 'space-between'}}>
                        <div><Typography sx={{fontSize:'14px',color:'#02a0a4',fontWeight:'bold'}}>مشاهده همه</Typography></div>
                        <div><Typography sx={{fontSize:'14px',color:'#02a0a4',fontWeight:'bold'}}><ArrowBackIosNewOutlinedIcon/></Typography></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OkalaBlogHeader;
//<Box  sx={{display:'flex',justifyContent:'space-between',alignItems:'center',justifyItems:'center',alignContent:'space-between'}}>
//             <Grid container   style={{marginRight:'6vw',backgroundColor:'red',display:'flex',justifyContent:'space-between'}}>
//                 <Grid item  ><Typography >اُکالا بلاگ</Typography></Grid>
//
//            <Grid item  container >
//                <Typography sx={{fontSize:'14px',color:'#02a0a4',fontWeight:'bold'}}>مشاهده همه</Typography>
//                <Grid>
//                    <Typography ><ArrowBackIosNewOutlinedIcon/></Typography>
//                </Grid>
//
//            </Grid>
//             </Grid>
//         </Box>
