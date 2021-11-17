import React from 'react'
import Counter from './Components/Counter'
import Navbar from './Components/Navbar'
import {Route,Switch} from 'react-router-dom'
import Width from './Components/Width'
const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                {/* <Route exact path="/countersize" component={Counter}/> */}
                <Route exact path="/counter" component={Counter}/>
                <Route exact path="/size" component={Width}/>
                {/* <Route path="" component={Error}/> */}
            </Switch>
        </>
    )
}

export default App
