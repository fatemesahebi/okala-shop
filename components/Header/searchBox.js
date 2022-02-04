import {Box} from "@mui/system";

import searchSvg from './../../public/SVG/search.svg'
import Image from 'next/image'
import {Input, Paper, Typography,Stack} from '@mui/material';
import {useState, useEffect} from "react";
import {getAllProducts} from "../../lib/axios/getData";
import SingleProduct from "../productCard/ProductCardElements";
function SearchBox() {
    const [searchPaperShow, setSearchPaperShow] = useState('none')
    const [searchTerm, setSearchTerm] = useState('')
    const [products, setProducts] = useState([])
    const handleChangeSearchBar = (e) => {
        (e.target.value === '') ?
            setSearchPaperShow('none')
            :
            setSearchPaperShow('block')
        setSearchTerm(e.target.value)
    }
    useEffect(() => {
        getAllProducts().then(data => setProducts(data.products)).catch(res => alert(res.status))
    }, [])
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '820px',
                height: '55px',
                border: '1px solid #c2b9b9ba',
                marginLeft: '70px',
                padding: '0px 15px',
                borderRadius: '10px'
            }}>
                <Image src={searchSvg}/>
                <Input disableUnderline
                       placeholder={'جستجو در محصولات اکالا'}
                       sx={{fontSize: '14px', paddingRight: '10px', color: 'black.main', width: '80%'}}
                       onChange={(e) => handleChangeSearchBar(e)}/>
            </Box>
            <Paper variant="outlined" elevation="24"
                   sx={{
                       display: `${searchPaperShow}`,
                       position: "fixed",
                       width: '80vw',
                       height: '70vh',
                       top: 100,
                       left: 100,
                       borderRadius: '10px',
                       overflow: 'auto',
                       p:6,
                       boxShadow: 3


                   }}>
                <Stack sx={{flexDirection:'row',gap:2}}>
                    {products.filter(product => product.productName.includes(searchTerm) ||
                        product.brand.includes(searchTerm)).map(
                        product=><SingleProduct key={product.id+product.productName} product={product}/>
                    )}
                </Stack>
            </Paper>

        </>

    )
}

export default SearchBox