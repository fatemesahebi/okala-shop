import {useEffect, useState} from "react";
import { Box, Typography} from "@mui/material";
import ListBrands from "./../Components/BrandsIconPart/ListBrands"
import {
    getBrandProducts,
} from "../lib/axios/getData";
import HomePage from "../HomePage/homePage";
const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getBrandProducts('رامک').
        then(data => setData(data.products)).
        catch(res => alert(res.status))
    }, [])
    return (<div>
        <Typography  sx={{backgroundColor:'darkGray.main'}} variant={"subtitle1"}>تایید</Typography>
        <Box sx={{backgroundColor:'red.main',color:'aqua.main',}}>نبیبتب</Box>
        <ListBrands/>
        {/*<Typography  sx={{backgroundColor:'darkGray.main'}} variant={"subtitle1"}>تایید</Typography>*/}
        {/*<Box sx={{backgroundColor:'red.main',color:'aqua.main',}}>نبیبتب</Box>*/}
<HomePage/>
    </div>)

};

export default Home