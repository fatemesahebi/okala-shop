import {useEffect, useState} from "react";
import { Box, Typography} from "@mui/material";
import ListMiddleNavbar from "../Components/middleNavbar/ListMiddleNavbar"

import {
    getBrandProducts,
} from "../lib/axios/getData";

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
        {/*<ListBrands/>*/}
        <ListMiddleNavbar/>
    </div>)

};

export default Home