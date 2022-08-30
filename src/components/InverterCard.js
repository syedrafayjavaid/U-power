import React from 'react'
import { Card, CardContent, Grid, Button } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import logo from "../public/images/h4.svg"
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { green } from '@mui/material/colors';

const InverterCard = () => {


    const [status, setStatus] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [vertical, setVerticle] = React.useState("bottom");
    const [horizontal, setHorizontal] = React.useState("right");


    // Close Snack Bar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    // handle inverter button
    const inverterSwitch = (state) => {
        setStatus(state)
        setOpen(true);
    }



    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ horizontal, vertical }} onClose={handleClose}>
                <Alert onClose={handleClose} severity={status ? "success" : "error"} variant="filled" sx={{ width: '100%' }}>
                    {status ? "Inverted turned on successfully" : "Inverted turned off successfully"}
                </Alert>
            </Snackbar>
            <Card className='inverterCard'>
                <CardContent>
                    <Grid container spacing={1} style={{ marginTop: "12px" }}>
                        <Grid item xs={12} display="flex" justifyContent={'center'} >
                            <img src={logo} alt="no logo" style={{
                                maxWidth: 75,
                            }} />
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent={'center'} >
                            <span className='inverterCardName'> Huawei 10KTL M1</span>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} style={{ marginTop: "35px" }}>
                        <Grid item xs={12} display="flex" justifyContent={'center'} >
                            <span className='inverterCardStatus' >Inverter ON/OFF</span>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent={'center'} >
                            <Button variant={status ? "contained" : "outlined"} onClick={() => inverterSwitch(true)} color='success' startIcon={<CheckCircleIcon />}>
                                ON
                            </Button>
                            <Button variant={status ? "outlined" : "contained"} onClick={() => inverterSwitch(false)} color='error' startIcon={<CancelIcon />}>
                                OFf
                            </Button>
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent={'center'} >
                            <Box sx={{ width: '5vw' }}>
                                <hr style={{ borderTop: `3px solid ${status ? "green" : "red"}` }}></hr>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </>

    )
}

export default InverterCard