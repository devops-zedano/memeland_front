import React from 'react'
import MemeList from '../MemeList'
import { withMemeFetching } from '../../hoc/withMemeFetching'
import UploadFileForm from '../UploadFileForm/UploadFileForm'

const HomePage = ({ memes }) => (
    <div>
        <UploadFileForm />
        <br />
        <MemeList memes={memes} />
    </div>
)

export default withMemeFetching(HomePage)
