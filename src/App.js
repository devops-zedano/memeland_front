import React from 'react'
import MemeList from './components/MemeList'

const memes = [
    {
        url: 'https://avatars0.githubusercontent.com/u/9899860?s=60&u=5610d92cc88ad157f12a1ab46ccecb0cc02aefb2&v=4',
        description: 'Reysmer Meme'
    },
    {
        url: 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg',
        description: 'Udemy meme'
    }
]

const App = () => (
    <div>
        Hello world!
        <MemeList memes={memes} />
    </div>
)

export default App