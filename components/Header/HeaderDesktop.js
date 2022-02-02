import Image from 'next/image'
import okalaLogo2 from './../../public/SVG/logo-okala2.svg'
import {SearchBox} from "../index";
import {Box} from "@mui/material";
import profileSvg from './../../public/SVG/profile.svg'
import shopBascket from './../../public/SVG/shopBascket.svg'
import {styled} from "@mui/system";
import ShoppingCard from '../shoppingCard/shoppingCard'
import {useState} from "react";

const IconHeader = styled('div')(
    () => `
                    height: 56px;
                    min-width: 56px;
                    display: inline-flex;
                    vertical-align: center;
                    align-items: center;
                    justify-content:center;
                    border-radius:10px;
   `,
);

function HeaderDesktop() {
    const [open, setOpen] = useState(false)
    const handleOpenShoppingCard = () => {
setOpen(true)    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 40px'
        }}>
            <Image src={okalaLogo2} alt={"فروشگاه اکالا"}/>
            <SearchBox/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                columnGap: '18px'
            }}>
                <IconHeader sx={{
                    backgroundColor: 'lightGray.dark',
                }}><Image src={profileSvg}/></IconHeader>
                <IconHeader sx={{backgroundColor: 'aqua.light'}} onClick={handleOpenShoppingCard}><Image
                    src={shopBascket}/></IconHeader>

        </Box>
    <ShoppingCard open={open} setOpen={setOpen}/>
</Box>
)
}

export default HeaderDesktop