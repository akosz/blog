import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import news from "../news.json"
import { NewsCard } from './NewsCard'

export const MainSection = () => {
    return (
        <Grid container spacing={2} mt={5}>
            <Grid item xs={6}>
                <NewsCard
                    title={news[0].title}
                    subtitle={news[0].subtitle}
                    image={news[0].img}
                    media={true}
                    id={news[0].id}
                />
            </Grid>
            <Grid item xs={6}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 12 }}>
                    {
                        news.slice(1, 5).map((item, index) =>
                            <Grid item xs={12} sm={6} key={index}>
                                <NewsCard
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    media={false}
                                    id={item.id}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
