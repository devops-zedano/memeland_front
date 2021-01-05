import React from 'react'
import MemeGrid from '../MemeGrid'
import { withMemeFetching } from '../../hoc/withMemeFetching'
import UploadFileForm from '../UploadFileForm/UploadFileForm'

const HomePage = ({ memes }) => (
    <div>
        <UploadFileForm />
        <br />
        <MemeGrid memes={memes} />
    </div>
)

export default withMemeFetching(HomePage)
