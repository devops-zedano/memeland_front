import React from 'react'

const MemeListItem = (props) => (
    <div>
        <img src={props.url} />
        <p>{props.description}</p>
    </div>
)

export default MemeListItem