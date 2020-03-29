import React from 'react'
import styles from './MemeListItem.module.css'
import { Link } from 'react-router-dom'

const MemeListItem = (props) => (
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
    </div>
)

export default MemeListItem