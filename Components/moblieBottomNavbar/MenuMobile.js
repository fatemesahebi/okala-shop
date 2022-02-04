import * as React from 'react';
import home from "./../../public/SVG/home.svg"
import search from "./../../public/SVG/search.svg"
import cart from "./../../public/SVG/buy.svg";
import profile from "./../../public/SVG/profile.svg"
import grouping from "./../../public/SVG/grouping.svg"
import {Box, Stack,Typography} from "@mui/material";
import MenuItem from "./MenuItem";
import {Button} from "@mui/material";
import Image from "next/image"



export default function MenuMobile() {
    return (
        <Box >
            <Stack md={8} sx={{width:"960px",display:"flex",flexDirection:"row",justifyContent:"space-between",flexShrink:"1"}}>
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

                   <Button sx={{boxShadow:"0px -5px 5px 1px #888a89", borderRadius:"80%"}}>
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
