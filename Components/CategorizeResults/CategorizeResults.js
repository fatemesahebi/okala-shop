import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import search from "./../../public/SVG/search.svg"
import Image from "next/image";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Box, Button, Stack} from "@mui/material";
import arrowdwon from "./../../public/SVG/arrowdwon.svg"
import arrowleft from "../../public/SVG/left.svg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {menuData} from "../../lib/mirage/menuData";
import {useEffect, useState} from "react";

export default function CategorizeResults({categoryName,dataCategory}) {
    const getSubMenu=()=>{
        for (let item of dataCategory){
            (categorizeResultsData?.[0]?.items1?.[item.batchType]?.items2?.[item.Type]?.count)?
                categorizeResultsData?.[0]?.items1?.[item.batchType]?.items2?.[item.Type]?.count++
                : categorizeResultsData?.[0]?.items1?.[item.batchType]?.items2?.[item.Type]?.count=1
        }
    }
  let categorizeResultsData= menuData.filter(item => item.mainTitle === categoryName)
    getSubMenu()
    console.log(categorizeResultsData)

    // const [categorizeResultsData, setCategorizeResultsData] = useState(menuData)
    // getSubMenu()
    // console.log(getSubMenu())
    // useEffect(async() => {
    //     await setCategorizeResultsData(menuData.filter(item => item.mainTitle === categoryName))
    //    await getSubMenu()
    //     console.log(getSubMenu())
    // }, {categoryName})



    return (
        <Box display={{xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none'}} sx={{padding: "1rem 1rem 0 0"}}>
            <Accordion sx={{width: "20rem", boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px", borderRadius: "1rem"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{
                        borderRight: "4px solid rgba(124, 200, 204, 1)",
                        height: "1rem",
                        top: ".5rem",
                        paddingRight: ".41rem",
                        right: "0",
                        fontWeight: "bolder"
                    }}> دسته بندی در نتایج</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{height: "11rem", overflowY: "scroll", lineHeight: "0", padding: "0"}}>

                    <Stack sx={{flexDirection: "row", paddingRight: "1rem"}}>
                        <Image src={arrowdwon}/>
                        <Button style={{color: "gray", fontSize: ".9rem", fontWeight: "bold", lineHeight: ".7rem"}}>
                            {categorizeResultsData?.[0]?.mainTitle}</Button>
                    </Stack>
                    {categorizeResultsData?.[0]?.items1?.map((cat1, i) =>
                        <>
                            <Stack key={i + cat1} sx={{flexDirection: "row", marginRight: "2.2rem"}}>
                                <Image src={arrowleft}/>
                                <Button style={{
                                    color: "gray",
                                    fontSize: ".9rem",
                                    fontWeight: "bold",
                                    marginRight: "-.6rem",
                                    lineHeight: ".7rem"
                                }}>
                                    {categorizeResultsData?.[0]?.items1?.[i]?.title}</Button>
                            </Stack>
                            {categorizeResultsData?.[0]?.items1?.[i]?.items2?.map((cat2, j) =>
                                <>
                                    <Stack key={j + cat2} sx={{flexDirection: "row", marginRight: "3rem"}}>
                                        <Image src={arrowdwon}/>
                                        <Button style={{
                                            color: "gray",
                                            fontSize: ".9rem",
                                            fontWeight: "bold",
                                            lineHeight: ".7rem"
                                        }}>
                                            {categorizeResultsData?.[0]?.items1?.[i]?.items2?.[j]?.title}</Button>
                                    </Stack>
                                    {
                                        categorizeResultsData?.[0]?.items1?.[i]?.items2?.[j]?.items3?.map((cat3, k) =>
                                            <>
                                                <Stack key={k + cat3}
                                                       sx={{flexDirection: "row", marginRight: "3.9rem"}}>
                                                    <Button style={{
                                                        color: "gray",
                                                        fontSize: ".9rem",
                                                        fontWeight: "bold",
                                                        lineHeight: ".7rem"
                                                    }}>
                                                        {categorizeResultsData?.[0]?.items1?.[i]?.items2?.[j]?.items3?.[k]?.title}</Button>
                                                </Stack>
                                            </>
                                        )}

                                </>
                            )}
                        </>
                    )}


                </AccordionDetails>
            </Accordion>

        </Box>
    );
}
