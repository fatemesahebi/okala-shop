import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Container, Grid} from "@mui/material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Image from 'next/image'

const OkalaBlogElement = ({blogItem}) => {
    return (
        <Container maxWidth={"xs"}>
            <Card sx={{width: '312px', height: '312px',boxSizing:"initial"}}>
                <CardMedia>
                    <Image width={310} height={180} src={blogItem.image}/>
                </CardMedia>
                <CardContent>
                    <Grid container>
                        <Grid item container>
                            <Typography>{blogItem.title}</Typography>
                        </Grid>
                        <Grid item container display={"flex"}>
                            <Grid item container
                                  sx={{display: 'flex', justifyContent: 'flex-start'}}>
                                <Grid item>
                                    <ArticleOutlinedIcon style={{color: '#989898', fontSize: '16px'}}/>
                                </Grid>

                                <Grid item>
                                    <Typography
                                        sx={{color: '#989898', fontSize: '12px', marginLeft: '15px'}}>
                                        {blogItem.subtitle}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container
                                  sx={{display: 'flex', justifyContent: 'flex-start'}}>
                                <Grid item>
                                    <CalendarTodayOutlinedIcon style={{color: '#989898', fontSize: '16px'}}/>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        style={{color: '#989898', fontSize: '12px'}}>{blogItem.date}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default OkalaBlogElement;
