import React from 'react'

import MemeListItem from '../MemeListItem'

const MemeList = ({ memes }) => (
    <div>
        <table>
            <tbody>
                {
                    memes.map((meme) => (
                        <tr>
                            <td>
                                <MemeListItem
                                    url={"https://a-memeland.s3.amazonaws.com/" + meme.uri}
                                    description={meme.description}
                                />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)

export default MemeList