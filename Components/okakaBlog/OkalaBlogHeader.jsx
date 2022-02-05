import React from 'react';
import {Grid} from "@material-ui/core";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
const OkalaBlogHeader = () => {
    return (
        <Grid container xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center',justifyItems:'center',alignContent:'center'}}>
            <Grid item xs={10}>
                okala blog
            </Grid>
           <Grid item  container xs={2}>
               view all
               <Grid>
                   <ArrowBackIosNewOutlinedIcon/>
               </Grid>

           </Grid>
        </Grid>
    );
};

export default OkalaBlogHeader;
