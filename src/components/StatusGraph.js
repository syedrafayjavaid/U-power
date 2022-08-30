import React from 'react'
import { Card, CardContent } from '@mui/material'
import { Text, Area, AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import '../App.css'



const StatusGraph = () => {


    const data = [
        {
            time: '12-AM',
            batterySOC: 20,
            solarPower: 80,
            load: 50,
        },
        {
            time: '2-AM',
            batterySOC: 50,
            solarPower: 60,
            load: 35,
        },
        {
            time: '4-AM',
            batterySOC: 30,
            solarPower: 43,
            load: 42,
        },
        {
            time: '6-AM',
            batterySOC: 10,
            solarPower: 65,
            load: 69,
        },
        {
            time: '8-AM',
            batterySOC: 50,
            solarPower: 35,
            load: 54,
        },
        {
            time: '10-AM',
            batterySOC: 80,
            solarPower: 78,
            load: 67,
        },
        {
            time: '12-PM',
            batterySOC: 90,
            solarPower: 45,
            load: 75,
        },
        {
            time: '2-PM',
            batterySOC: 63,
            solarPower: 67,
            load: 82,
        },
        {
            time: '4-PM',
            batterySOC: 50,
            solarPower: 39,
            load: 87,
        },
        {
            time: '6-PM',
            batterySOC: 90,
            solarPower: 85,
            load: 70,
        },
        {
            time: '8-PM',
            batterySOC: 75,
            solarPower: 35,
            load: 50,
        },
        {
            time: '10-PM',
            batterySOC: 45,
            solarPower: 55,
            load: 55,
        },
        {
            time: '12-PM',
            batterySOC: 55,
            solarPower: 35,
            load: 80,
        },
    ];


    return (
        <Card style={{ backgroundColor: "#5DADE2", background: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`, height: "100%", width: "100%", boxShadow: "10px 10px 8px  #888888" }}>
            <CardContent >
                <div style={{ width: "100%", height: "395px" }} >
                    <ResponsiveContainer width="100%" height="100%"  >
                        <LineChart
                            width={1000}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >

                            <XAxis dataKey="time" stroke="black" label={{ value: 'Time', position: 'insideBottomRight', offset: -12 }} />
                            <YAxis dataKey="batterySOC" stroke="black" label={{ value: 'Power (KW)', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend />
                            <Line name='Battery SOC(%)' type="monotone" dataKey="batterySOC" stroke="#f39c12" fill="#f39c12" activeDot={{ r: 8 }} strokeWidth="2px" />
                            <Line name='Solar Power(KW)' type="monotone" dataKey="solarPower" stroke=" #82e0aa" fill="#82e0aa" activeDot={{ r: 8 }} strokeWidth="2px" />
                            <Line name='Load(KW)' type="monotone" dataKey="load" stroke="#c0392b" fill="#c0392b" activeDot={{ r: 8 }} strokeWidth="2px" />
                        </LineChart>

                    </ResponsiveContainer>


                </div>


            </CardContent>

        </Card>


    )
}

export default StatusGraph