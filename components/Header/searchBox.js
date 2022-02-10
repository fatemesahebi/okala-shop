import {Box} from "@mui/system";
import {Swiper, SwiperSlide} from "swiper/react"
import searchSvg from './../../public/SVG/search.svg'
import Image from 'next/image'
import {Input, Paper, Typography, Stack, Divider, Button} from '@mui/material';
import {useState, useEffect} from "react";
import {getAllProducts} from "../../lib/axios/getData";
import SingleProduct from "../productCard/ProductCardElements";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import closeIcon from "./../../public/SVG/icons8-close.svg"

function SearchBox() {
    const [searchPaperShow, setSearchPaperShow] = useState('none')
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTermMob, setSearchTermMob] = useState('')
    const [products, setProducts] = useState([])
    const handleChangeSearchBar = (e) => {
        (e.target.value === '') ?
            setSearchPaperShow('none')
            :
            setSearchPaperShow('block')
        setSearchTerm(e.target.value)
    }
    const handleChangeMobileSearchBar = (e) => {
        (e.target.value === '') ?
            setSearchPaperShow('none')
            :
            setSearchPaperShow('block')
        setSearchTermMob(e.target.value)
        setSearchTerm(e.target.value)
    }
    const handleForwardSearch = () => {
        setSearchTerm("")
        setSearchTermMob("")
        setSearchPaperShow('none')

    }
    const handleCleanSearch = () => {
        setSearchTermMob("")
        setSearchTerm("")
    }
    useEffect(() => {
        getAllProducts().then(data => setProducts(data.products)).catch(res => alert(res.status))
    }, [])
    const filterDtat = (searchTerm === "") ? [] : products.filter(product => product.productName.includes(searchTerm) ||
        product.brand.includes(searchTerm))
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: {xs: "90%", md: "730px", lg: "820px"},
                height: '55px',
                border: '1px solid #c2b9b9ba',
                mx: {md: '70px', xs: "5vw"},
                padding: '0px 15px',
                borderRadius: '10px',
            }}>
                <Image src={searchSvg}/>
                <Input disableUnderline
                       value={searchTerm}
                       placeholder={'جستجو در محصولات اکالا'}
                       sx={{fontSize: '14px', paddingRight: '10px', color: 'black.main', width: '80%'}}
                       onChange={(e) => handleChangeSearchBar(e)}/>
            </Box>

            <Paper variant="outlined" elevation={24}
                   sx={{
                       display: {md: `${searchPaperShow}`, xs: "none"},
                       position: "fixed",
                       width: '80vw',
                       height: '26rem',
                       top: 100,
                       left: 150,
                       borderRadius: '10px',
                       overflow: 'auto',
                       p: 6,
                       boxShadow: 3


                   }}>

                <Swiper
                    style={{
                        display: "flex",
                        maxWidth: "100%",
                        // padding: "0.5rem",
                        flexDirection: "row",
                        flexGrow: "0",
                        flexShrink: "0",
                        overflowX: "hidden",
                        scrollBehavior: "smooth",
                        margin: "0 !important"
                    }}
                    slidesPerView={"auto"}
                    spaceBetween={0}
                    >
                    {filterDtat.map(
                        product => (
                            <SwiperSlide style={{
                                width: "220px"
                            }}>
                                <Box sx={{
                                    border: "1px solid rgba(0,0,0,0.1)"
                                }}>
                                    <SingleProduct key={product.id + product.productName} product={product}/>
                                </Box>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </Paper>
            {/*************************************Mibile SearchModel***********************************************/}
            <Paper
                sx={{
                    display: {xs: `${searchPaperShow}`, md: "none"},
                    backgroundColor: "white",
                    minWidth: "100vw",
                    minHeight: "100vh",
                    zIndex: 1000,
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,


                }}>
                <Stack boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} flexDirection={"row"} alignItems={"center"}
                       justifyContent={"start"} gap={1}
                       sx={{height: "60px"}}>
                    <ArrowForwardIcon fontSize={"small"} onClick={handleForwardSearch} sx={{mx:2}}/>
                    <Input disableUnderline
                           placeholder={'جستجو در محصولات اکالا'}
                           value={searchTerm}
                           sx={{fontSize: '18px', fontWeight:"bold !important",  pr: '20px', color: 'black.main', width: '80%'}}
                           onChange={(e) => handleChangeMobileSearchBar(e)}/>
                    {(searchTerm != "") &&
                    <Box component="img" src={closeIcon.src} width={"40px"}
                         sx={{mr: "auto", ml: 1.2, backgroundColor: 'lightGray.light', borderRadius: "6px",p:1.2}}
                         onClick={handleCleanSearch}/>
                    }

                </Stack>
                <Stack flexDirection={"column"} justifyContent={"center"} alignItems={"center"}
                       sx={{overflowY: "scroll", height: "80vh", width: "95%", mt: 4}}
                >
                    {filterDtat.map(

                        product => (
                            <Box sx={{
                                border: "1px solid rgba(0,0,0,0.1)"
                            }}>
                                <SingleProduct key={product.id + product.productName} product={product}/>
                            </Box>
                        )
                    )}
                </Stack>

            </Paper>

        </>

    )
}

export default SearchBox