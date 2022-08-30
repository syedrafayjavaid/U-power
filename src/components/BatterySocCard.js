import React from 'react'
import { Card, CardContent, Box, Grid } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LinearProgress from '@mui/material/LinearProgress';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar'



const BatterySocCard = () => {
    return (
        // <Card style={{ minHeight: "120px", width: "100%", backgroundColor: "#5DADE2", background: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`, boxShadow: "10px 10px 8px  #888888" }}>
        //     <CardContent style={{ justifyContent: "center" }}>
        //         <Grid container spacing={2} >
        //             <Grid item xs={12} display="flex" justifyContent="center" >

        //                 <span style={{ fontSize: "17px", fontWeight: "600", color: "white" }}>
        //                     Battery SOC
        //                 </span>
        //             </Grid>
        //             <LinearProgress color="success" />
        //             <Grid item >
        //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        //                 <BatteryChargingFullIcon style={{ color: "white", height: "38px", width: "38px" }} />

        //                 {/* <Avatar style={{ height: "38px", width: "38px", backgroundColor: "#009FF8", }}>

        //                 </Avatar> */}

        //                 <br></br>
        //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //                 <span style={{ height: "35px", width: "35px", fontSize: "17px", fontWeight: "600", color: "white", margin: "auto" }}>

        //                     <Chip label="100 %" style={{ fontSize: "17px", fontWeight: "600", color: "white" }} />
        //                 </span>


        //             </Grid>

        //         </Grid>

        //     </CardContent>
        // </Card>
        <Card className='powerCard' >
            <CardContent >
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <span className='powerCardName'>
                            Battery SOC
                        </span>
                    </Grid>
                    <Grid item>
                        <Avatar className='powerCardAvatar'>
                            <BatteryChargingFullIcon style={{ color: '#f39c12' }} />
                        </Avatar>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                        <span >
                            <Chip label="100 %" className='powerCardValue' />
                        </span>


                    </Grid>
                    <LinearProgress color="success" />
                </Grid>

            </CardContent>
        </Card>
    )
}

export default BatterySocCard