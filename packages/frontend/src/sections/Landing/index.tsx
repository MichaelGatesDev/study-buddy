import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Box } from '@material-ui/core';

import "./style.scss";

const LandingSection = () => {
    return (
        <section id="landing-section">

            <Box display={{ xs: 'none', md: 'block' }}>
                <Grid container direction="row" justify="flex-end" style={{ padding: '1em 1em' }}>
                    <Grid item>
                        <Button variant="contained" color="secondary">Login / Register</Button>
                    </Grid>
                </Grid>
            </Box>

            <Grid container direction="row" style={{ padding: '0 3em' }}>
                <Grid item xs={12} lg={6}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12}>
                            <h1 className="logo">Educate You</h1>
                            <p>Potential slogan here...</p>
                        </Grid>
                        <Grid item xs={12}>
                            <h2>Highlights</h2>
                        </Grid>
                        <Grid item>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Example Highlight
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Here is a catchy description about a highlight of the application!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Example Highlight
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Here is a catchy description about a highlight of the application!
                                </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                            </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Example Highlight
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Here is a catchy description about a highlight of the application!
                                </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                            </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Example Highlight
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Here is a catchy description about a highlight of the application!
                                </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                            </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <h1>Other Section</h1>
                </Grid>
            </Grid>

        </section>
    );
};

export default LandingSection;
