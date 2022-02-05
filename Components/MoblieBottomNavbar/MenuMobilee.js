import * as React from 'react';
import home from "./../../public/SVG/home.svg"
import search from "./../../public/SVG/search.svg"
import cart from "./../../public/SVG/buy.svg";
import profile from "./../../public/SVG/profile.svg"
import grouping from "./../../public/SVG/grouping.svg"
import {Box, Stack,Typography} from "@mui/material";
import {Button} from "@mui/material";
import Image from "next/image"


export default function MenuMobilee() {
    return (
        <Box item xs={1} sx={{display: {lg:'none', md:'none'},justifyContent:"space-between",flexShrink:"1",width:"100vw",position:"fixed",bottom:"0",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}  >
            <Stack sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",flexShrink:"1"}}>
                <Button>
                    <Stack>
                        <Image src={home}/>
                        <Typography style={{color:"#888a89",fontSize:".625rem"}}>خانه</Typography>
                    </Stack>
                </Button>

                <Button>
                    <Stack>
                        <Image src={search}/>
                        <Typography style={{color:"#888a89",fontSize:".625rem"}}>جستجو</Typography>
                    </Stack>
                </Button>

                <Button sx={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:"50%"}}>
                    <Image src={cart}/>
                </Button>

                <Button>
                    <Stack>
                        <Image src={grouping}/>
                        <Typography style={{color:"#888a89",fontSize:".625rem"}}>دسته بندی</Typography>
                    </Stack>
                </Button>

                <Button>
                    <Stack>
                        <Image src={profile}/>
                        <Typography style={{color:"#888a89",fontSize:".625rem"}}>پروفایل</Typography>
                    </Stack>
                </Button>


            </Stack>
        </Box>
    );
}
