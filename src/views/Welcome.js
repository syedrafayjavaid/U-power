import React from 'react'
import TopBar from '../components/TopBar'
import ActivePowerCard from '../components/ActivePowerCard'
import SolarGenerationCard from '../components/SolarGenerationCard'
import BatterySocCard from '../components/BatterySocCard'
import ChargingDischargingCard from '../components/ChargingDischargingCard'
import StatusGraph from '../components/StatusGraph'
import InverterCard from '../components/InverterCard'
import { Grid, Card, CardContent } from '@mui/material'
import { Box } from '@mui/system'

const Welcome = () => {
    return (
        <>
            <TopBar />
            <Box style={{ padding: "30px", }}>
                <Grid container spacing="25" >
                    <Grid item xs={3} justifyContent="center" display={"flex"} >
                        <ActivePowerCard />
                    </Grid>
                    <Grid item xs={3} justifyContent="center" display={"flex"} >
                        <SolarGenerationCard />
                    </Grid>
                    <Grid item xs={3} justifyContent="center" display={"flex"} >
                        <BatterySocCard />
                    </Grid>
                    <Grid item xs={3} justifyContent="center" display={"flex"} >
                        <ChargingDischargingCard />
                    </Grid>
                    <Grid item xs={9} justifyContent="center" display={"flex"}  >
                        <StatusGraph />
                    </Grid>
                    <Grid item xs={3} justifyContent="center" display={"flex"}  >
                        <InverterCard />
                    </Grid>
                </Grid>
            </Box>


        </>
    )
}

export default Welcome