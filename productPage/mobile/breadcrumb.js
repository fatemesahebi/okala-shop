import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from '@mui/material';

const Breadcrumb = styled('ul')({
    background:'#f8f8f8',
    height: '3rem',
    display: 'flex',
    alignContent: "center",
    padding: '2rem 16px',
    overflowY: "hidden",
    overflowX: 'auto',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    marginBottom:'2rem'
});
const Listitems = styled('li')({
    fontSize:'1rem',
    color:' rgba(84, 84, 84, 1)',
    height: '32px',
    display: 'flex',
    padding:' 0 24px',
    background: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    marginLeft: '6px',
    borderRadius: '8px',
    listStyle:'none'
})

export default function Breadcrumbs({product}) {
    return (
        <Breadcrumb>
            <Listitems>
                <Link ml={2} href="#" underline="none" color="inherit">
                    اکالا
                </Link>
                <ArrowBackIosNewIcon fontSize='small'/>
            </Listitems>
            <Listitems>
                <Link ml={2} href="#" underline="none" color="inherit">
                    {product.categories}
                </Link>
                <ArrowBackIosNewIcon fontSize='small'/>
            </Listitems>
            <Listitems>
                <Link ml={2} href="#" underline="none" color="inherit">
                    {product.batchType}
                </Link>
                <ArrowBackIosNewIcon fontSize='small'/>
            </Listitems>
            <Listitems>
                <Link ml={2} href="#" underline="none" color="inherit">
                    {product.Type}
                </Link>
                <ArrowBackIosNewIcon fontSize='small'/>
            </Listitems>
            <Listitems>
                <Link ml={2} href="#" underline="none" color="inherit">
                    {product.productName}
                </Link>
                <ArrowBackIosNewIcon fontSize='small'/>
            </Listitems>
        </Breadcrumb>
    )

}
