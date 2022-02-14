import {Topsection} from "./index";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import chat from "../../public/SVG/chat.svg"
import star from "../../public/SVG/star.svg"
import Image from "next/image";
import * as React from "react";
import starline from "../../public/SVG/starline.svg";
import {styled} from "@mui/styles";
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";
import {Box, Button, Typography} from "@mui/material";
import starfull from "../../public/SVG/starfull.svg";
import rateEmptyStar from "../../public/SVG/rateEmptyStar.svg";
const Comment = styled('div')({
    padding: '12px 12px 2px',
    borderBottom: '1px solid rgb(240, 240, 240)',
});
const CommentInformation = styled('div')({
    display: 'flex',
    marginBottom: '15px',
    justifyContent: 'space-between',
});
const CommentDiscription = styled('p')({
    color: 'rgb(84, 84, 84)',
    fontSize:' 0.75rem',
    paddingRight: '54px',
})
const Avatar = styled('div')({
    width: '42px',
    height: '42px',
    display: 'flex',
    background:' rgb(212, 212, 212)',
    alignItems: 'center',
    marginLeft: '12px',
    borderRadius: '50%',
    justifyContent: 'center',
});

const Recommended = styled('span')({
    padding: '2px 10px',
    fontSize: '.75rem',
    color: 'rgb(55, 143, 56)',
    background: 'rgb(232, 245, 233)',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight:' 32px',
    borderRadius: '12px',
    fontWeight:'Bold'
})
const Date = styled('span')({
    padding: '2px 10px',
    fontSize: '.75rem',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight:' 32px',
    borderRadius: '12px',
    background: 'rgb(248, 248, 248)',
    color: 'rgb(0, 0, 0)',
    fontWeight:'Bold'
});

const RatesInfoSection = styled('div')({
    padding: '14px 24px 20px',
});
const RatesProgressSection = styled('div')({
    paddingBottom: '10px',
    borderBottom: '4px solid rgba(240, 240, 240, 1)'
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
export const Addtocart = styled('div')({
    left: '0',
    right: '0',
    bottom: '0',
    height: '70px',
    display: 'flex',
    padding: '16px',
    zIndex: '10',
    position: 'fixed',
    background: '#fff',
    boxShadow: '0 -1px 10px #dfdfdf',
    justifyContent: 'space-between',
    boxSizing:'border-box'
});

const ColorButton = styled(Button)(({theme}) => ({
    width: '100% !important',
    height: '38px !important',
    minWidth: '104px !important',
    padding: '0',
    lineHeight: 'inherit',
    fontSize:'100%',
    backgroundColor: 'rgb(240, 20, 54)',
    borderRadius: ' 12px',
    color: ' rgb(248, 248, 248) !important',
    "&.MuiButtonBase-root:hover": {
        color: 'rgb(230, 230, 230)',
        backgroundColor: 'rgb(222, 8, 46) !important'
    }
}));

export default function Comments({comments, setComments}){
    return(
        <div style={{
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "10px 10px 0 0 ",
            width: "100vw",
            height: "100vh",
            background: "white",
            top: comments ? "8.41rem":"100vh",
            overflow: "hidden",
            right: 0,
            zIndex: "160",
            position: "fixed",
            transition: "all 0.5s"
        }}>
            <Box onClick={() => setComments(!comments)}>
                <Topsection>
                    <ArrowForwardOutlinedIcon/>
                </Topsection>
            </Box>
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
                    }}>
                    <img style={{width:'3.5rem'}} src="https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FProduct%2F380841&w=128&q=75" alt=""/>
                </Box>
                <Box>
                    <Typography sx={{fontSize:'.75rem',fontWeight:'bold'}} component={"span"}>
                        شامپو بدن پوست چرب 400میلی لتری دیپ سنس
                    </Typography>
                </Box>
            </ProductInfo>
            <Commentinfosec>
                <Box  >
                    <Box ml={2} sx={{fontSize:'.75rem',display:'inline-block'}}>
                        <Image src={chat}/>
                        1 کاربر پیشنهاد کرده اند
                    </Box>
                    <Box sx={{fontSize:'.75rem',display:'inline-block'}}>
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
            <Comment>
                <CommentInformation>
                    <Box sx={{
                        display:'flex',
                        alignItems:"center",
                    }}
                         className={'rightpart'}>
                        <Avatar>
                            <img style={{
                                width: '42px',
                                height: '42px',
                                borderRadius:"25px"}}
                                 src="data:image/jpeg;base64,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" alt=""/>
                        </Avatar>
                        <Box>
                            <Typography sx={{fontSize:'.85rem',fontWeight:'bold'}}>
                                عباس بوعذار
                            </Typography>
                            <Box>
                                <Image src={starfull}/>
                                <Image src={starfull}/>
                                <Image src={starfull}/>
                                <Image src={starfull}/>
                                <Image src={rateEmptyStar}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={'leftpart'}>
                        <Recommended>پیشنهاد میکنم</Recommended>
                        <Date sx={{
                        }}> 12 بهمن
                            1400</Date>
                    </Box >
                </CommentInformation>
                <CommentDiscription>
                    بسیار عالی زیبا جادار و مطمعن
                </CommentDiscription>
            </Comment>
            <Addtocart>
                <ColorButton>
                    افزودن نظر
                </ColorButton>
            </Addtocart>
        </div>
    )
}