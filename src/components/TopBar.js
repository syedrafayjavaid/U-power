import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../public/images/logo.svg'


const TopBar = () => {

    return (
        <AppBar position="static" className='themeColor'>
            <Toolbar>
                <img src={logo} alt="Kitty Katty!" style={{
                    maxWidth: 40,
                    marginLeft: '10px'
                }} />
                <Box >

                </Box>
                <Box style={{ margin: "auto" }} >
                    <Typography variant="h6" >

                        <span style={{ fontSize: "18px", fontWeight: "600", color: "black", textShadow: "horizontalShadow verticalShadow blur color" }}>
                            U Energy Office Green Field
                        </span>
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar >

    );
};
export default TopBar;
