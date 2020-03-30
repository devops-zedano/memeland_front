import React from 'react'
import MemeList from '../MemeList'
import { withMemeFetching } from '../../hoc/withMemeFetching'
import UploadFileForm from '../UploadFileForm/UploadFileForm'

// const memes = [
//     {
//         url: 'https://avatars0.githubusercontent.com/u/9899860?s=60&u=5610d92cc88ad157f12a1ab46ccecb0cc02aefb2&v=4',
//         description: 'Reysmer\'s Meme'
//     },
//     {
//         url: 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg',
//         description: 'Udemy meme'
//     }
// ]

const HomePage = ({ memes }) => (
    <div>
        <UploadFileForm />
        <MemeList memes={memes} />
    </div>
)

export default withMemeFetching(HomePage)
