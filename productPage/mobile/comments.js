import {Topsection} from "./index";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import chat from "../../public/SVG/chat.svg"
import star from "../../public/SVG/star.svg"
import Image from "next/image";
import * as React from "react";
import starline from "../../public/SVG/starline.svg";
import {styled} from "@mui/styles";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import {Box, Typography} from "@mui/material";
import starfull from "../../public/SVG/starfull.svg";
import rateEmptyStar from "../../public/SVG/rateEmptyStar.svg";

const RatesInfoSection = styled('div')({
    padding: '14px 24px 20px',
});
const RatesProgressSection = styled('div')({
    paddingBottom: '10px'
});
const RateProgressBar = styled('div')({
    display: 'flex',
    padding: '0 24px',
    alignItems: 'center',
    marginBottom: '10px',
});
const Progress = styled('div')({
    flex: '1',
    height: '4px',
    overflow: 'hidden',
    position: 'relative',
    background: 'rgba(240, 240, 240, 1)',
    borderRadius: '10px',
    MozBoxSizing:'border-box'
});

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 10,
    width: "100%",

    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.green.light,

    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],

    },
}));
const ProductInfo = styled('div')({
    height:' 98px',
    display: 'flex',
    padding: '0 23px',
    alignItems: 'center',
    borderBottom: '1px solid rgba(240, 240, 240, 1)',
})
export const Commentinfosec = styled('div')({
    display: 'flex',
    padding:' 17px',
    alignItems: 'center',
    borderBottom: '1px solid rgba(240, 240, 240, 1)',
    boxSizing:"inherit"
});

export default function Comments(){
    return(
        <div>
            <Topsection>
                <ArrowForwardOutlinedIcon/>
            </Topsection>
            <ProductInfo>
                <Box sx={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                    boxSizing: 'border-box',
                    margin: '0px',
                    minWidth: '56px',
                    minHeight: '56px',
                    }}></Box>
            </ProductInfo>
            <Commentinfosec>
                <Box  >
                    <Box ml={2} sx={{display:'inline-block'}}>
                        <Image src={chat}/>
                        1 کاربر پیشنهاد کرده اند
                    </Box>
                    <Box sx={{display:'inline-block'}}>
                        <Image src={star}/>
                        1 کاربر امتیاز داده اند
                    </Box>
                </Box>
            </Commentinfosec>
            <RatesInfoSection>
                <Box >
                    <Typography component={"span"} sx={{
                        color: 'rgba(22, 22, 22, 1)',
                        fontSize: '1rem',
                        fontWeight: '700',
                        lineHeight: '24px',
                        marginLeft:' 17px',}}>
                        4.0
                    </Typography>
                    <Box sx={{marginLeft: '9px',
                        display: 'inline-block',
                        position: 'relative',
                        direction: 'ltr',
                        textAlign: 'center',}}>
                        <Image src={starfull}/>
                        <Image src={starfull}/>
                        <Image src={starfull}/>
                        <Image src={starfull}/>
                        <Image src={rateEmptyStar}/>
                    </Box>
                    <span>
                                        از 1 نظر
                                    </span>
                </Box>
            </RatesInfoSection>
            <RatesProgressSection>
                <RateProgressBar>
                    <Image src={starline}/>
                    <span style={{margin:'0 10px 0 10px'}}>5</span>
                    <Progress>
                        <BorderLinearProgress value={30} variant="determinate"/>
                    </Progress>
                </RateProgressBar>
                <RateProgressBar>
                    <Image src={starline}/>
                    <span style={{margin:'0 10px 0 10px'}}>4</span>
                    <Progress>
                        <BorderLinearProgress value={50} variant="determinate"/>
                    </Progress>
                </RateProgressBar>
                <RateProgressBar>
                    <Image src={starline}/>
                    <span style={{margin:'0 10px 0 10px'}}>3</span>
                    <Progress>
                        <BorderLinearProgress value={80} variant="determinate"/>
                    </Progress>
                </RateProgressBar>
                <RateProgressBar>
                    <Image src={starline}/>
                    <span style={{margin:'0 10px 0 10px'}}>2</span>
                    <Progress>
                        <BorderLinearProgress value={10} variant="determinate"/>
                    </Progress>
                </RateProgressBar>
                <RateProgressBar>
                    <Image src={starline}/>
                    <span style={{margin:'0 10px 0 10px'}}>1</span>
                    <Progress>
                        <BorderLinearProgress value={0} variant="determinate"/>
                    </Progress>
                </RateProgressBar>
            </RatesProgressSection>
        </div>
    )
}