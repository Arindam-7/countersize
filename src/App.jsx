import React from 'react'
import Counter from './Components/Counter'
import Navbar from './Components/Navbar'
import {Route,Switch} from 'react-router-dom'
import Width from './Components/Width'
import Error from './Components/Error'
const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                {/* <Route exact path="/" component={Counter}/> */}
                <Route exact path="/countersize/" component={Counter}/>
                <Route exact path="/size" component={Width}/>
                <Route path="" component={Error}/>
            </Switch>
        </>
    )
}

export default App
