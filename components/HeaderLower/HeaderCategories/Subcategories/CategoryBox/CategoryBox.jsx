import {Box, Typography} from "@mui/material";

const CategoryBox = () => {
    return (
        <>
            <Box sx={{
                padding: "1rem",
                display: "inline-flex",
                gap: ".5rem"
            }}>
                <Box sx={{
                    border: "2px solid rgba(240,20,54,0.4)",
                    borderRadius: "4px"
                }}>
                </Box>
                <Typography sx={{
                    color: "black !important",
                    fontSize: "0.9rem",
                    fontWeight: "bold"
                }}>
                    بستنی
                </Typography>
            </Box>
            <Typography sx={{
                paddingRight: "2rem",
                color: "black !important",
                fontSize: "0.9rem",

            }}>
                بستنی چوبی
            </Typography>
            <Typography sx={{
                paddingRight: "2rem",
                color: "black !important",
                fontSize: "0.9rem",

            }}>
                بستنی قیفی
            </Typography>
            <Typography sx={{
                paddingRight: "2rem",
                color: "black !important",
                fontSize: "0.9rem",

            }}>
                بستنی قیفی
            </Typography>
        </>
    )
}

export default CategoryBox