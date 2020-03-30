import React from 'react'
import { useState, useEffect } from 'react'

const URL = 'https://2vnt20y917.execute-api.us-east-1.amazonaws.com/dev/list'

export default () => {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(memes => {
                setMemes(memes)
            })
            .catch(err => console.log(err.message))
    }, []);

    return [memes];
}