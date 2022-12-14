import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Parallax } from 'react-parallax'
import { useParams } from 'react-router-dom'
import newsObject from '../news.json'

export const News = () => {
    const { id } = useParams();
    const currNews = newsObject.filter((item) => item.id === Number(id))[0];
    return (
        <Container maxWidth="100%" style={{ padding: 0 }}>
            <Grid conatiner >
                <Parallax
                    bgImage={require(`../images/${currNews.img}`)}
                    bgImageAlt={currNews.title}
                    blur={{ min: -15, max: 15 }}
                    strength={200}
                >
                    <div style={{height: "500px", display: "flex", alignItems: "center"}}>
                        <Typography
                            variant='h2'
                            style={{ margin: "0 auto" }}
                        >
                            {currNews.title}
                        </Typography>
                    </div>
                </Parallax>
            </Grid>
        </Container>
    )
}
