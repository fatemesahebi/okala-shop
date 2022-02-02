import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    card: {
        height: '312px',
        width: '220px',
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        boxShadow: "none",
        borderRadius: "8px"
    },
    productName:{
        marginBottom:'5px',
        fontSize: '14px',
        fontWeight:'bold'
    },
    cardMedia: {
        display: "flex",
        justifyContent: 'center',
        marginTop: '15px',
        position: "relative",
        // flexDirection:'row',
        // justifyContent:'center'

    },
    cardContent: {
        display:'flex',
        flexDirection: 'column',
    },
    offPercent: {
        backgroundColor: '#49aa49',
        borderRadius: '5px',
        color: 'white',
        padding: '2px 10px 2px 10px',
        fontWeight: 'bold'
    },
    oldPriceCard:{
       textDecoration:'line-through',
        fontSize: '14px',
    },
    icon: {
        backgroundColor: '#f01436',
        color: 'white',
        fontSize: '42px',
        borderRadius: '10px',
        padding: '8px',
        position: 'absolute',
        zIndex: '1',
        [theme.breakpoints.between('xs','sm')]:{
            right: '10px'
        },
        [theme.breakpoints.between('sm','md')]:{
            right: '10px'
        },
        [theme.breakpoints.between('md','lg')]:{
            right: '10px',
        },
        [theme.breakpoints.between('lg',"xl")]:{
            right: '10px',
        },

    },
    newPrice: {
        display: "flex",
        justifyContent:'space-between',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    image: {
        width: '153px',
        position:'block'


    }
}))
