import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const sideNavStyle = {
    height: '100%',
};


const Home = () => {


    return (
        <Grid container spacing={2} style={{ height: '100vh' }}>
            {/* Side Navigation */}
            <Grid item xs={3} style={{ height: '100%', paddingLeft: '30px', paddingBlock: '30px', borderRadius: '50px' }}>
                <Grid container direction="column" spacing={2} style={{ height: '100%' }}>
                    {/* First Grid */}
                    <Grid item style={{ height: '20%' }}>
                        <Paper style={{ ...sideNavStyle, borderRadius: '10px', overflow: 'hidden' }}>
                            <div style={{ padding: '10px' }}>
                                <Typography variant="h6">First Part</Typography>
                                {/* Add your first part content here */}
                            </div>

                        </Paper>
                    </Grid>


                    {/* Second Grid */}
                    <Grid item style={{ height: '80%' }}>
                        <Paper style={{ ...sideNavStyle }}>
                            <div style={{ padding: '10px' }}>
                                <Typography variant="h6">Second Part</Typography>
                                {/* Add your second part content here */}
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={9} container direction="column" style={{ height: '100%', paddingTop: '30px', paddingBottom: '45px' }}>
                <Paper style={{ ...sideNavStyle, borderRadius: '10px',padding:'10px' }}>
                    <Typography variant="h6">Header</Typography>
                    <Typography variant="h6">Main Screen</Typography>
                </Paper>

            </Grid>

        </Grid>
    );
};

export default Home;
