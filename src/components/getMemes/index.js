import React from 'react'

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