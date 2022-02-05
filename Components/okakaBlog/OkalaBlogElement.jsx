import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Container, Grid, Stack} from "@mui/material";
import Image from 'next/image'
import {Divider} from "@mui/material";
import recipe from './recipe.svg'
import calendar from './calendar.svg'

const OkalaBlogElement = ({blogItem}) => {
    return (
        <Grid container>
            <Grid item container>
                <Card  sx={{width: '312px', height: '312px',backgroundColor:'white'}}>
                    <Grid item container>
                        <CardMedia>
                            <Image width={312} height={180} src={blogItem.image}/>
                        </CardMedia>
                    </Grid>
                    <Grid item container>
                        <CardContent>
                            <Grid item container>
                                <Typography mb='20px' sx={{fontWeight:'bold'}}>{blogItem.title}</Typography>
                            </Grid>
                            <Grid>
                                <Stack direction="row" display={"flex"}
                                       divider={<Divider orientation="vertical" flexItem/>}>
                                    <Grid item container
                                          sx={{display: 'flex', justifyContent: 'flex-start'}}>
                                        <Grid item>
                                            <Image color={'#8f8f8f'} src={recipe} sx={{fontWeight:'bold'}} />
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                sx={{ color: '#8f8f8f', fontSize: '12px', marginLeft: '15px',fontWeight:'bold'}}>
                                                {blogItem.subtitle}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container>
                                        <Grid item>
                                            <Image color={'#8f8f8f'} src={calendar}/>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                style={{
                                                    color: '#8f8f8f',
                                                    fontSize: '12px',
                                                    fontWeight:'bold'
                                                }}>{blogItem.date}</Typography>
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Grid>
                        </CardContent>
                    </Grid>

                </Card>
            </Grid>

        </Grid>
    );
};

export default OkalaBlogElement;
