import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MemePage.module.css'

const AMeme = (props) => (
    <React.Fragment>
        <h1>{props.description}</h1>
        <img src={props.url} className={styles.meme} />
    </React.Fragment>
)

const MemePage = (props) => {
    console.log(props)
    return (
        <div>
            <Link to='/' >Back to meme list</Link>
            <AMeme {...props.location.state.meme} />
            <br />
            <Link to='/' >Back to meme list</Link>
        </div>
    )
}

export default MemePage