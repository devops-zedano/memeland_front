import React from 'react'
import styles from './MemeGridItem.module.css'
import { Link } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core'

const deleteURL = process.env.REACT_APP_DELETE_MEME_URL
const MemeGridItem = (props) => {
    const handleDelete = (e) => {
        e.preventDefault()
        if (window.confirm('Are you sure to delete this meme?')) {
            deleteMeme(props.uri)
        }
    }

    const deleteMeme = (memeUri) => {
        fetch(deleteURL + "?uri=" + memeUri, {
            method: 'DELETE'
        }).then(response => {
            console.log("Status deleting the meme: " + response.status)
            window.location.reload(false)
        })
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card class={styles.card}>
                <Paper elevation='5'>
                    <Link to={{
                        pathname: '/meme',
                        state: {
                            meme: props
                        }
                    }}>
                        <CardMedia
                            component="img"
                            class={styles.cardMedia}
                            image={props.url}
                            title={props.description}
                        />
                    </Link>
                    <CardContent>
                        <Typography color='textPrimary' align='center' component='h5'>
                            {props.description ? props.description : 'N/A'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            color='secondary'
                            variant='contained'
                            size='small' fullWidth
                            onClick={e => handleDelete(e)}>
                            Delete Meme
                    </Button>
                    </CardActions>
                </Paper>
            </Card>
        </Grid>
        // <div>
        //     <h4>{props.description}</h4>
        //     <Link to={{
        //         pathname: '/meme',
        //         state: {
        //             meme: props
        //         }
        //     }}>
        //         <img className={styles.item} src={props.url} />
        //     </Link>
        //     <br />
        //     <button onClick={e => handleDelete(e)}>Delete Meme</button>
        // </div>
    )
}

export default MemeGridItem