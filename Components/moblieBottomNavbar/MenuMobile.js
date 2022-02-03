import * as React from 'react';
import home from "./../../public/SVG/home.svg"
import profile from "./../../public/SVG/profile.svg"
import cart from "./../../public/SVG/shopBascket.svg"
import search from "./../../public/SVG/search.svg"
import grouping from "./../../public/SVG/grouping.svg"
import {Stack} from "@mui/material";
import MenuItem from "./MenuItem";
import {Button} from "@mui/material";

const listItem = [
    {image: home, title: "خانه"},
    {image: search, title: "جستجو"},
    {image: cart, title: ""},
    {image: grouping, title: "دسته بندی"},
    {image: profile , title: "پروفایل"},
]


export default function MenuMobile() {
    return (
        <React.Fragment>
            <Stack sx={{ display: 'flex',flexDirection:"row", textAlign: 'center',width:"960px" }}>
                {listItem.map((item,index) => (<Button><MenuItem key={index} iconMenu={item.image} textMenu={item.title}/> </Button>))}
                {/*/!*<SvgIcon>{home}</SvgIcon>*!/*/}
                {/*<Typography>home</Typography>*/}
            </Stack>

        </React.Fragment>
    );
}
