import {Box, SvgIcon, Typography} from "@mui/material";
import Image from "next/image";
import Icon from "./sidbarIcon.jpeg"
import {NavigateBefore} from "@mui/icons-material";
import {red} from "@mui/material/colors";
import {useState} from "react";

const SidebarCategories = ({children}) => {
    const [show, setShow] = useState(false)
    return (
        <Box onMouseOver={() => setShow(true) } onMouseOut={() => setShow(false)} sx={{
            display: "inline-flex",
            width: "17rem",
            justifyContent: "space-between",
            height: "4rem",
            alignContent: "center",
            alignItems: "center",
            padding: "0 10px !important",
            margin: "0 !important",
            cursor: "pointer"
        }}>
            <Box sx={{
                display: "inline-flex",
                gap: "2rem"
            }}>
                <Image height="20px" width="20px" src={Icon}/>
                <Typography  sx={{
                    fontSize: "1rem",
                    fontWeight: "bolder",
                    color: "red !important"
                }}>
                    {children}
                </Typography>
            </Box>
            { show ? (<NavigateBefore sx={{
                fontSize: "2rem",
                fontWeight: "lighter"
            }} color={"red"}/>) : (<></>)
            }

        </Box>
    )
}

export default SidebarCategories