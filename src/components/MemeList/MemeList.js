import React from 'react'

import MemeListItem from '../MemeListItem'

const MemeList = (props) => (
    <ul>
        {
            props.memes.map((meme) => (
                <li><MemeListItem url={meme.url} description={meme.description} /></li>
            ))
        }
    </ul>
)

export default MemeList