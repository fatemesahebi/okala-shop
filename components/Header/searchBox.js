import {Box} from "@mui/system";

import searchSvg from './../../public/SVG/search.svg'
import Image from 'next/image'
import {Input} from '@mui/material';
import {styled} from "@mui/system";


// const InputBox = styled('Input')(
//     () => `
//     &:focus ,&:hover, &:acive: {
//             border:none;
//             border-bottum:none}
//
//
//    `,
// );

function SearchBox() {
    return (
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',width:'800px',height:'60px',border:'1px solid #c2b9b9ba',padding:'0px 15px',borderRadius:'10px'}}>
            <Image src={searchSvg}/>
            <Input disableUnderline
                   placeholder={'جستجو در محصولات اکالا'} sx={{fontSize: '14px',paddingRight:'10px'}}/>


        </Box>
    )
}

export default SearchBox