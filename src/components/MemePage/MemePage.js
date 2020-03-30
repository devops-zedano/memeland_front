import React from 'react'
import { Link } from 'react-router-dom'

const AMeme = (props) => (
    <React.Fragment>
        <h1>{props.description}</h1>
        <img src={props.url} />
    </React.Fragment>
)

const MemePage = (props) => {
    console.log(props)
    return (
        <div>
            <Link to='/' >Back to meme list</Link>
            <AMeme {...props.location.state.meme} />
        </div>
    )
}

export default MemePage