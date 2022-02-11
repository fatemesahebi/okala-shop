import * as React from 'react';
import {Box, Typography} from "@mui/material";
import OnlyAvailableProducts from "./OnlyAvailableProducts";
import OnlyOfferProducts from "./OnlyOfferProducts";

export default function CommodityFilters({offerFilter,setOfferFilter}) {
    return (
        <Box display={{xl:'block',lg:'block',md:'none',sm:'none',xs:'none'}} sx={{width:"20rem",color:"white", height:"7rem",boxShadow:"rgba(0, 0, 0, 0.04) 0px 3px 5px",borderRadius:"1rem",padding:"1rem",margin:"1rem",background:"white"}}>
           <OnlyAvailableProducts/>
            <hr style={{color:"rgba(236,236,236,0.21)"}}/>
           <OnlyOfferProducts offerFilter={offerFilter} setOfferFilter={setOfferFilter}/>
        </Box>
    );
}
