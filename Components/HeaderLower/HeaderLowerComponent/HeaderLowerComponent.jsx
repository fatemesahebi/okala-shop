import {Box, Typography} from "@mui/material"
import Image from "next/image"

 const HeaderLowerComponent = ({children , icon}) => {
    return (
        <Box sx={{
            display: "inline-flex",
            gap: "5px",
            alignContent: "center",
            alignItems: "center",
            padding: "0 10px !important",
            margin: "0 !important",
            cursor: "pointer"
        }}>
            <Box>
                <Image height="18px" width="18px" src={icon}/>
            </Box>
            <Typography sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "black !important"
            }}>
                {children}
            </Typography>
        </Box>
    )
}
export default HeaderLowerComponent