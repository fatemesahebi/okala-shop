import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import PN from "persian-number"
import Discount from "./discount.svg"
import Image from "next/image"

const Countdown = () => {
    const [time, setTime] = useState({hours: 23, minutes: 59, seconds: 59})
    useEffect(() => {
        setTimeout(() => {
            setTime({
                seconds: time.seconds>0?time.seconds-1:59,
                minutes: time.seconds===0?time.minutes>0?time.minutes-1:23:time.minutes,
                hours: time.seconds===0?time.minutes===0?time.hours>0?time.hours-1:23:time.hours:time.hours
            },)
        },1000)
    },[time])
    return (
        <Box sx={{
            height: {md:"19rem", xs:"16rem"},
            display: "flex",
            alignContent: "flex-end",
            alignItems: "flex-end",
            flexDirection: "column",
            justifyContent: "space-between"
        }} dir="ltr">
            <Box>
                <Image height="48px" width="48px" src={Discount}/>
            </Box>
            <Typography sx={{
                fontWeight: "bold",
                fontSize: {md:"1.6rem",xs:"1.2rem"},
                color: "white !important"
            }} variant="h2" component="h2">
                پبشنهاد روز
            </Typography>
            <Box sx={{
                display:"flex",
                flexDirection: "column",
                borderRadius: "0.65rem",
                padding: {md: "0", xs:"0.5rem"},
                backgroundColor: "#363636 !important",
                fontSize: "2rem",
                alignContent: "center",
                alignItems: "center"
            }}>
                <Typography sx={{
                    textAlign: "center",
                    mb: "0.5rem",
                    fontWeight: "bold",
                    color: "white !important",
                    fontSize: {sm:"0.8rem" , xs:"1rem"}
                }}>
                    زمان باقیمانده پیشنهاد
                </Typography>
                <Box sx={{
                    display:"inline-flex",
                    alignContent: "center",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        borderRadius: "15px",
                        backgroundColor: "white !important",
                        padding: "10px !important",
                        margin: {md:"10px",xs:"0"},
                    }}>
                        <Typography sx={{
                            fontSize: {md:"1.6rem",xs:"1.2rem"},
                            fontWeight: "bold",
                            width: {md:"1.6rem",xs:"1.2rem"},
                            textAlign:"center"
                        }} component="div">
                            {PN.convertEnToPe(time.hours>9?time.hours:"0"+time.hours)}
                        </Typography>
                    </Box>
                    <Typography sx={{
                        color: "white !important",
                        fontSize: {md:"1.6rem",xs:"1.2rem"}
                    }} component="div">
                        :
                    </Typography>
                    <Box sx={{
                        borderRadius: "15px",
                        backgroundColor: "white !important",
                        padding: "10px !important",
                        margin: {md:"10px",xs:"0"},
                        fontSize: "40px"
                    }}>
                        <Typography sx={{
                            fontSize: {md:"1.6rem",xs:"1.2rem"},
                            fontWeight: "bold",
                            width: {md:"1.6rem",xs:"1.2rem"},
                            textAlign:"center"
                        }} component="div">
                            {PN.convertEnToPe(time.minutes>9?time.minutes:"0"+time.minutes)}
                        </Typography>
                    </Box>
                    <Typography sx={{
                        color: "white !important",
                        fontSize: {md:"1.6rem",xs:"1.2rem"}
                    }} component="div">
                        :
                    </Typography>
                    <Box sx={{
                        borderRadius: "15px",
                        backgroundColor: "white !important",
                        padding: "10px !important",
                        margin: {md:"10px",xs:"0"},
                        fontSize: "40px"
                    }}>
                        <Typography sx={{
                            fontSize: {md:"1.6rem",xs:"1.2rem"},
                            fontWeight: "bold",
                            width: {md:"1.6rem",xs:"1.2rem"},
                            textAlign:"center"
                        }} component="div">
                            {PN.convertEnToPe(time.seconds>9?time.seconds:"0"+time.seconds)}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Typography sx={{
                fontWeight: "bold",
                fontSize: "0.8rem",
                color: "white !important"
            }}>
                مشاهده همه
            </Typography>
        </Box>
    )
}

export default Countdown