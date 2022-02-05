import {Box, SvgIcon, Typography} from "@mui/material";
import Image from "next/image";
import Icon from "./sidbarIcon.jpeg"
import {NavigateBefore} from "@mui/icons-material";
import {red} from "@mui/material/colors";
import {useState} from "react";

const SidebarCategories = ({children , value , index}) => {
    return (
        <Box sx={{
            display: "inline-flex",
            width: "17rem",
            justifyContent: "space-between",
            height: "3rem",
            alignContent: "center",
            alignItems: "center",
            paddingRight: "10px !important",
            margin: "0 !important",
            cursor: "pointer"
        }}>
            <Box sx={{
                display: "inline-flex",
                gap: "2rem"
            }}>
                <Box sx={{
                    filter: value===index?
                        "unset"
                        : "invert(0%) sepia(0%) saturate(0%) hue-rotate(320deg) brightness(97%) contrast(104%)"
                }}>
                    <Image height="20px" width="20px" src={Icon}/>
                </Box>
                <Typography  sx={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color: value===index?"#f01436 !important":"#363636 !important"
                }}>
                    {children}
                </Typography>
            </Box>
            { value === index ? (<NavigateBefore sx={{
                fontSize: "2rem",
                fontWeight: "lighter"
            }} color={"#f01436"}/>) : (<></>)
            }

        </Box>
    )
}

export default SidebarCategories