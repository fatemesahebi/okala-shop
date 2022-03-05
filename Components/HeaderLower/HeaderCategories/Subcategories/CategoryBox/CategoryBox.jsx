import {Box, Typography} from "@mui/material";

const CategoryBox = ({categories}) => {
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
                    {categories.title}
                </Typography>
            </Box>
            {categories.items3.map((item,i) => (
                <Typography key={i} sx={{
                    paddingRight: "2rem",
                    color: "black !important",
                    fontSize: "0.9rem",

                }}>
                    {item.title}
                </Typography>
            ))}

        </>
    )
}

export default CategoryBox