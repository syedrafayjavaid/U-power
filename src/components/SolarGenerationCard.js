import React from 'react'
import { Card, CardContent, Box, Grid } from '@mui/material'
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar'



const SolarGenerationCard = () => {
    return (
        <Card className='powerCard' >
            <CardContent >
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <span className='powerCardName'>
                            Solar Energy
                        </span>
                    </Grid>
                    <Grid item>
                        <Avatar className='powerCardAvatar'>
                            <WbSunnyIcon style={{ color: "#82e0aa" }} />
                        </Avatar>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                        <span >
                            <Chip label="100 KW" className='powerCardValue' />
                        </span>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default SolarGenerationCard