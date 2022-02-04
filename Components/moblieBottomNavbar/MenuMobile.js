import * as React from 'react';
import home from "./../../public/SVG/home.svg"
import search from "./../../public/SVG/search.svg"
import cart from "./../../public/SVG/buy.svg";
import profile from "./../../public/SVG/profile.svg"
import grouping from "./../../public/SVG/grouping.svg"
import {Grid, Stack,Typography} from "@mui/material";
import MenuItem from "./MenuItem";
import {Button} from "@mui/material";
import Image from "next/image"



export default function MenuMobile() {
    return (

            <Grid spacing={8}>
                <Button>
                <Grid item sx={4}>
                  <Image src={home}/>
                    <Typography style={{color:"#888a89",fontSize:".625rem"}}>خانه</Typography>
                </Grid>
                </Button>

                <Button>
                    <Grid item sx={4}>
                    <Image src={search}/>
                        <Typography style={{color:"#888a89",fontSize:".625rem"}}>جستجو</Typography>
                </Grid>
                </Button>

                   <Button sx={{border:"2px solid red", borderRadius:"80%"}}>
                       <Image src={cart}/>
                   </Button>

                    <Button>
                        <Grid item sx={4}>
                        <Image src={grouping}/>
                        <Typography style={{color:"#888a89",fontSize:".625rem"}}>دسته بندی</Typography>
                        </Grid>
                    </Button>

                    <Button>
                        <Grid item sx={4}>
                    <Image src={profile}/>
                    <Typography style={{color:"#888a89",fontSize:".625rem"}}>پروفایل</Typography>
                        </Grid>
                    </Button>


            </Grid>

    );
}
