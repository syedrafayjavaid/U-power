import React from 'react'
import { Card, CardContent, Box, Grid } from '@mui/material'
import { Bolt } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar'





const ActivePowerCard = (props) => {

    return (
        <Card className='powerCard' >
            <CardContent >
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <span className='powerCardName'>
                            Active Power
                        </span>
                    </Grid>
                    <Grid item xs={12}>
                        <Avatar className='powerCardAvatar'>
                            <Bolt style={{ color: "#c0392b" }} />
                        </Avatar>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                        <span>
                            <Chip label="100 KW" className='powerCardValue' />
                        </span>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}






export default ActivePowerCard