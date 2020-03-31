import React from 'react'

import MemeListItem from '../MemeListItem'

const MemeList = ({ memes }) => {
    var content = <div></div>

    if (memes) {
        content = (
            <div>
                <table>
                    <tbody>
                        {
                            memes.map((meme) => (
                                <tr key={meme.uri}>
                                    <td>
                                        <MemeListItem
                                            {...meme}
                                            url={"https://a-memeland.s3.amazonaws.com/" + meme.uri}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        )
    }

    return content
}

export default MemeList