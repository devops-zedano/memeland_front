import { useState, useEffect } from 'react'

const URL = process.env.REACT_APP_LIST_MEMES_URL

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