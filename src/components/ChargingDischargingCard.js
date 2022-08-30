import React from 'react'
import { Card, CardContent, Box, Grid } from '@mui/material'
import { Bolt } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';
import Avatar from '@mui/material/Avatar'




const ChargingDischargingCard = () => {
    return (
        // <Card style={{ minHeight: "120px", width: "100%", backgroundColor: "#5DADE2", background: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`, boxShadow: "10px 10px 8px  #888888" }}>
        //     <CardContent style={{ justifyContent: "center" }}>
        //         <Grid container spacing={2} >
        //             <Grid item xs={12}>

        //                 <span style={{ fontSize: "17px", fontWeight: "600" }}>
        //                     Charging & Discharging
        //                 </span>
        //             </Grid>
        //             <Grid item>
        //                 <EarbudsBatteryIcon style={{ height: "40px", width: "40px", borderRadius: "5px" }} />&nbsp;&nbsp;
        //                 <span style={{ height: "35px", width: "35px", fontSize: "17px", fontWeight: "600" }}>
        //                     <Chip label="1000 KWh" style={{ fontSize: "17px", fontWeight: "600", }} />
        //                 </span>

        //             </Grid>
        //             <LinearProgress color="success" />
        //         </Grid>

        //     </CardContent>
        // </Card>
        <Card className='powerCard' >
            <CardContent >
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <span className='powerCardName'>
                            Charging & Discharging
                        </span>
                    </Grid>
                    <Grid item>
                        <Avatar className='powerCardAvatar'>
                            <EarbudsBatteryIcon style={{ color: "white" }} />
                        </Avatar>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                        <span >
                            <Chip label="100 KWh" className='powerCardValue' />
                        </span>


                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default ChargingDischargingCard