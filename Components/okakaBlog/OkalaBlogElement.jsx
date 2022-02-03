import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Container} from "@mui/material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Image from 'next/image'
const OkalaBlogElement = ({blogItem}) => {
    return (
        <Container>
            <Card sx={{width: '312px', height: '312px'}}>
                <CardMedia>
                    <Image style={{width: '312px', height: '180px'}} src={blogItem.image}/>
                </CardMedia>
                <CardContent>
                    <div>
                        <Typography gutterBottom variant='h6'>{blogItem.title}</Typography>
                    </div>
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            alignContent: 'center',
                            justifyContent: 'flex-start',
                            justifyItems: 'center'
                        }}>
                            <div><ArticleOutlinedIcon style={{color: '#989898', fontSize: '16px'}}/></div>
                            <div style={{borderLeft: 'solid #989898 2px', marginLeft: '15px'}}><Typography
                                style={{color: '#989898', fontSize: '12px', marginLeft: '15px'}}
                                variant="paragraph">{blogItem.subtitle}</Typography></div>
                            <div><CalendarTodayOutlinedIcon style={{color: '#989898', fontSize: '16px'}}/></div>
                            <Typography style={{color: '#989898', fontSize: '12px'}}
                                        variant='paragraph'>{blogItem.date}</Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default OkalaBlogElement;
