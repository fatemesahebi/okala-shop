import axios from "../lib/axios/setup";
import {useEffect, useState} from "react";
import {TextField, Button, Box, Typography} from "@mui/material";
import theme from "../styles/theme";
import {
    getBrandProducts,
} from "../lib/axios/getData";
import {error} from "next/dist/build/output/log";

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getBrandProducts('رامک').
        then(data => setData(data.products)).
        catch(res => alert(res.status))
    }, [])
    return (<div>
        <Typography variant={"subtitle1"}>تایید</Typography>
        <Box>نبیبتب</Box>

    </div>)

};

export default Home