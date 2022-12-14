import { Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const Clock = () => {
    const [date, setDate] = useState(new Date());
    const dateFormat = `${date.toLocaleDateString("hu", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    })}, ${date.toLocaleDateString("hu", {weekday: "long"})}`;

    const timeFormat = date.toLocaleTimeString("hu");


    useEffect(() => {
        const inter = setInterval(() => {
           setDate(new Date()); 
        }, 1000);
        
        return (() => {
            clearInterval(inter);
        })
    }, []);
    

    return (
        <Paper elevation={3}>
            <Typography>

            </Typography>
            <Typography>
                {dateFormat}
            </Typography>
            <Typography variant='h5'>
                {timeFormat}
            </Typography>
        </Paper>
    )
}
