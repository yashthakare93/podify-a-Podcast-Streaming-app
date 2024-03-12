import React from 'react';
import { Grid, Paper, Typography, useMediaQuery, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home as HomeIcon, Search as SearchIcon, Settings as SettingsIcon, Restore as RecentsIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const sideNavStyle = {
    height: '100%',
};



const Home = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    return (
        <Grid container spacing={2} style={{ height: '100vh' }}>
            {/* Side Navigation */}
            {isMobile ? null : (
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
            )}

            <Grid item xs={isMobile ? 12 : 9} container direction="column" style={{ height: '100%', paddingTop: isMobile ? '0' : '30px', paddingBottom: '45px' }}>
                <Paper style={{ ...sideNavStyle, borderRadius: '10px', padding: '10px' }}>
                    <Typography variant="h6">Header</Typography>
                    <Typography variant="h6">Main Screen</Typography>
                    
                </Paper>
            </Grid>

            {isMobile && (
                <Grid item xs={12} style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999, marginLeft: '8px', paddingBottom: '8px' }}>
                    <Paper style={{ padding: '5px 0', background: theme.palette.background.paper }}>
                        <BottomNavigation showLabels>
                            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                            <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                            <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
                            <BottomNavigationAction label="Recents" icon={<RecentsIcon />} />
                        </BottomNavigation>
                    </Paper>
                </Grid>
            )}
        </Grid>
    );
};

export default Home;
