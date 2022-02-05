import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Container, Grid, Stack} from "@mui/material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Image from 'next/image'
import {Divider} from "@mui/material";

const OkalaBlogElement = ({blogItem}) => {
    return (
        <>

        <Container maxWidth={"xs"}>
            <Card sx={{width: '312px', height: '312px',boxSizing:"initial"}}>
                <CardMedia>
                    <Image width={310} height={180} src={blogItem.image}/>
                </CardMedia>
                <CardContent>
                    <Stack>
                        <Box>
                            <Typography mb='20px' >{blogItem.title}</Typography>
                        </Box>
                        <Stack  direction="row" display={"flex"}  divider={<Divider orientation="vertical" flexItem />}>
                            <Box item container
                                  sx={{display: 'flex', justifyContent: 'flex-start'}}>
                                <Box>
                                    <ArticleOutlinedIcon style={{color: '#989898', fontSize: '16px'}}/>
                                </Box>

                                <Box>
                                    <Typography
                                        sx={{color: '#989898', fontSize: '14px', marginLeft: '15px'}}>
                                        {blogItem.subtitle}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'flex-start',mr:'10px'}}>
                                <Box>
                                    <CalendarTodayOutlinedIcon style={{color: '#989898', fontSize: '16px'}}/>
                                </Box>
                                <Box>
                                    <Typography
                                        style={{color: '#989898', fontSize: '14px'}}>{blogItem.date}</Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
        </>
    );
};

export default OkalaBlogElement;
