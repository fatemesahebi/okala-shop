import {MagnifierContainer, Magnifier, MagnifierPreview, MagnifierZoom} from "react-image-magnifiers"
import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Swiper , SwiperSlide} from "swiper/react";

const imageBaseUrl =
    "https://s3-us-west-1.amazonaws.com/react-package-assets/images/";
const images = [
    {name: "wristwatch_355.jpg", vw: "355w"},
    {name: "wristwatch_481.jpg", vw: "481w"},
    {name: "wristwatch_584.jpg", vw: "584w"},
    {name: "wristwatch_687.jpg", vw: "687w"},
    {name: "wristwatch_770.jpg", vw: "770w"},
    {name: "wristwatch_861.jpg", vw: "861w"},
    {name: "wristwatch_955.jpg", vw: "955w"},
    {name: "wristwatch_1033.jpg", vw: "1033w"},
    {name: "wristwatch_1112.jpg", vw: "1112w"},
    {name: "wristwatch_1192.jpg", vw: "1192w"},
    {name: "wristwatch_1200.jpg", vw: "1200w"}
];

const ImageMagnifire = ({image}) => {
    const [show, setShow] = useState(false)
    return (
        <MagnifierContainer style={{display: "flex", flexDirection: "row",}}>
            <Box sx={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 1rem",
                width: "30rem",
                height: "30rem",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "10px"
            }}>
                <Box onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} sx={{width: "19.9rem"}}>
                    <MagnifierPreview
                        overlayOpacity={0}
                        overlayBoxColor={"transparent"}
                        overlayBoxOpacity={0.2}
                        overlayBoxImage={"https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png"}
                        cursorStyle={"move"}
                        imageSrc={image}/>
                </Box>
            </Box>
            <Box sx={{
                display: show ? "flex" : "none",
                backgroundColor: "white !important",
                border: "1px solid rgba(0,0,0,1)",
                borderRadius: "10px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "30rem",
                height: "20rem",
                overflow: "hidden",
                position: "absolute",
                right: "36rem",
                zIndex: 100
            }}>
                <MagnifierZoom style={{width: "30rem", height: "30rem", margin: "auto"}}
                               imageSrc={image}/>
            </Box>
        </MagnifierContainer>
    );
}

export default ImageMagnifire

