import React from 'react'

import MemeListItem from '../MemeListItem'

const MemeList = (props) => (
    <div>
        <table>
            {
                props.memes.map((meme) => (
                    <tr>
                        <td>
                            <MemeListItem
                                url={meme.url}
                                description={meme.description}
                            />
                        </td>
                    </tr>
                ))
            }
        </table>
    </div>
)

export default MemeList