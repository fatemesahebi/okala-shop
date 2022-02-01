import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import PN from "persian-number"

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
            height: "300px",
            display: "flex",
            alignContent: "flex-end",
            alignItems: "flex-end",
            flexDirection: "column",
            justifyContent: "space-between"
        }} dir="ltr">
            <Box>
                <svg height="50x" width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.945 20.076c.59.575 1.54.569 2.126-.02l.722-.72a3.026 3.026 0 012.123-.878h1.03c.834 0 1.512-.678 1.512-1.511v-1.03c0-.8.31-1.553.876-2.12l.72-.722a1.51 1.51 0 00.002-2.146l-.721-.723a2.991 2.991 0 01-.877-2.123V7.055c0-.835-.678-1.513-1.512-1.513h-1.028a2.991 2.991 0 01-2.121-.873l-.722-.724a1.518 1.518 0 00-2.147 0l-.719.72a3.004 3.004 0 01-2.125.877H7.055a1.514 1.514 0 00-1.511 1.513V8.08c0 .8-.311 1.553-.875 2.122l-.71.71-.021.021a1.513 1.513 0 00.007 2.138l.722.722c.566.567.877 1.32.877 2.121v1.032c0 .832.677 1.51 1.511 1.51h1.027a2.99 2.99 0 012.122.877l.721.72.02.022zM11.999 22a3.002 3.002 0 01-2.145-.896l-.71-.71a1.505 1.505 0 00-1.063-.438H7.055a3.014 3.014 0 01-3.011-3.01v-1.031a1.5 1.5 0 00-.439-1.064l-.719-.718A3.015 3.015 0 012.851 9.9l.027-.027.728-.73c.281-.283.438-.662.438-1.063V7.057c0-1.66 1.35-3.011 3.01-3.013h1.03a1.51 1.51 0 001.066-.44l.715-.717a3.014 3.014 0 014.259-.01l.731.73a1.5 1.5 0 001.063.438h1.028a3.015 3.015 0 013.012 3.012v1.026c0 .401.156.78.439 1.066l.718.719c.569.564.885 1.32.888 2.124a2.991 2.991 0 01-.875 2.133l-.733.731c-.281.284-.437.66-.437 1.063v1.029a3.015 3.015 0 01-3.011 3.01h-1.031c-.396 0-.783.16-1.064.44l-.718.718a3 3 0 01-2.135.887z" fill="current"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.43 15.322a.749.749 0 01-.53-1.28L14.04 8.9a.75.75 0 111.061 1.061l-5.14 5.14a.744.744 0 01-.53.22zM14.504 15.5a1.003 1.003 0 01-1.005-1c0-.554.442-1 .995-1h.01a1 1 0 110 2zM9.504 10.5a1.003 1.003 0 01-1.005-1c0-.554.443-1 .996-1h.009a1 1 0 110 2z" fill="current"></path></svg>
            </Box>
            <Typography sx={{
                fontSize: "1rem",
                color: "white !important"
            }} variant="h2" component="h2">
                پبشنهاد روز
            </Typography>
            <Box sx={{
                display:"inline-flex",
                borderRadius: "15px",
                backgroundColor: "black !important",
                fontSize: "40px",
                alignContent: "center",
                alignItems: "center"
            }}>
                <Box sx={{
                    borderRadius: "15px",
                    backgroundColor: "white !important",
                    padding: "10px !important",
                    margin: "10px",
                    fontSize: "40px"
                }}>
                    <Typography sx={{
                        fontSize: "40px",
                        width: "40px",
                        textAlign:"center"
                    }} component="div">
                        {PN.convertEnToPe(time.hours>9?time.hours:"0"+time.hours)}
                    </Typography>
                </Box>
                <Typography sx={{
                    color: "white !important",
                    fontSize: "40px"
                }} component="div">
                    :
                </Typography>
                <Box sx={{
                    borderRadius: "15px",
                    backgroundColor: "white !important",
                    padding: "10px !important",
                    margin: "10px",
                    fontSize: "40px"
                }}>
                    <Typography sx={{
                        fontSize: "40px",
                        width: "40px",
                        textAlign:"center"
                    }} component="div">
                        {PN.convertEnToPe(time.minutes>9?time.minutes:"0"+time.minutes)}
                    </Typography>
                </Box>
                <Typography sx={{
                    color: "white !important",
                    fontSize: "40px"
                }} component="div">
                    :
                </Typography>
                <Box sx={{
                    borderRadius: "15px",
                    backgroundColor: "white !important",
                    padding: "10px !important",
                    margin: "10px",
                    fontSize: "40px"
                }}>
                    <Typography sx={{
                        fontSize: "40px",
                        width: "40px",
                        textAlign:"center"
                    }} component="div">
                        {PN.convertEnToPe(time.seconds>9?time.seconds:"0"+time.seconds)}
                    </Typography>
                </Box>
            </Box>
            <Typography sx={{
                fontSize: "0.8rem",
                color: "white !important"
            }}>
                مشاهده همه
            </Typography>
        </Box>
    )
}

export default Countdown