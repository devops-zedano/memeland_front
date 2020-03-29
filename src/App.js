import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import MemePage from './components/MemePage'

const App = () => (
    <BrowserRouter>
        <Route path='/' exact component={HomePage} />
        <Route path='/meme' component={MemePage} />
    </BrowserRouter>
)

export default App