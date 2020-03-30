import React from 'react'
import getMemes from '../../components/getMemes'

export const withMemeFetching = (WrappedComponent) => {
    return (props) => {
        const [memes] = getMemes();
        return <WrappedComponent memes={memes} {...props} />
    }
}
