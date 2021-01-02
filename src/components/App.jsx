import React, { Component } from 'react'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Dashboard from './page/Dashboard'
import Footer from './page/Footer'
import Headers from './page/Headers'
import Home from './page/Home'
import Tranportasi from './page/Dashboard/Transportasi'
import Destinasi from './page/Dashboard/Destinasi'
import Akomodasi from './page/Dashboard/Akomodasi'
import Restourant from './page/Dashboard/Restourant'
export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <Headers/> */}
                        <div className='container-one'>
                    <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/dashboard' component={Dashboard}/>
                            <Route path='/transportasi' component={Tranportasi}/>
                            <Route path='/akomodasi' component={Akomodasi}/>
                            <Route path='/restourant' component={Restourant}/>
                            <Route path='/destinasi' component={Destinasi}/>
                    </Switch>
                        </div>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default App
