import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid } from '@material-ui/core';
import React from 'react'
import styles from './MemeGrid.module.css'

import MemeGridItem from '../MemeGridItem'

const BASE_URL = process.env.REACT_APP_MEMES_BASE_URL

const Cell = ({ columnIndex, rowIndex, style }) => (
    <div style={style}>
        Item {rowIndex},{columnIndex}
    </div>
);


const MemeGrid = ({ memes }) => {
    var content = <div></div>

    if (memes) {
        content = (
            <Container maxWidth='md' spacing={4}>
                <Grid container>
                    {memes.map((meme) => (
                        <MemeGridItem
                            {...meme}
                            url={BASE_URL + '/' + meme.uri}
                        />
                    ))}
                </Grid>
            </Container>
        )
    }

    return content
}

export default MemeGrid