import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const NewsList = ({ news }) => {
    return (
        <>
            {
                news.map((value) =>
                (<Card key={value.id} sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Link to={`/hir/${value.id}`}>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {value.title}
                            </Typography>
                        </Link>
                        <Typography variant="body2">
                            {value.subtitle}
                        </Typography>
                    </CardContent>
                </Card>
                ))
            }
        </>
    )
}
