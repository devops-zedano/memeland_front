import React from 'react'
import styles from './MemeListItem.module.css'
import { Link } from 'react-router-dom'

const deleteURL = process.env.REACT_APP_DELETE_MEME_URL
const MemeListItem = (props) => {
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
        <div>
            <h4>{props.description}</h4>
            <Link to={{
                pathname: '/meme',
                state: {
                    meme: props
                }
            }}>
                <img className={styles.item} src={props.url} />
            </Link>
            <br />
            <button onClick={e => handleDelete(e)}>Delete Meme</button>
        </div>
    )
}

export default MemeListItem