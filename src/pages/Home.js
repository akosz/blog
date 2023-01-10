import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Clock } from '../components/Clock'
import { MainSection } from '../components/MainSection'

export const Home = (news) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Typography variant="h3" gutterBottom>
                    Üdvözöljük a Hírnök oldalán
                </Typography>
                <MainSection />
            </Grid>
            <Grid item xs={3}>
                <Clock />
            </Grid>
        </Grid>
    )
}
