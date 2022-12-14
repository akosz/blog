import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NewsCard = (props) => {
    const navigate = useNavigate();
    return (
        <Card>
            <CardActionArea onClick={() => navigate(`/hir/${props.id}`)}>
                {
                    props.media &&
                    <CardMedia
                        component="img"
                        height="140"
                        image={require(`../images/${props.image}`)}
                        alt={props.title}
                    />
                }
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.subtitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
