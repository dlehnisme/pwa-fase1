import React, { Component } from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import City from './page/City'
import Destination from './page/Destination'
import Headers from './page/Headers'
import Hero from './page/Hero'
import HowItWork from './page/HowItWork'
import Problems from './page/Problems'
export class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Headers/>
                <Route path='/' exact component={Hero} />    
                <Route path='/' exact component={Problems} />    
                <Route path='/' exact component={HowItWork} />    
                <Route path='/city' component={City} />    
                <Route path='/destination' component={Destination} />    
            </div>
            </BrowserRouter>
        )
    }
}

export default App
