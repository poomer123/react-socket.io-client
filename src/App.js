import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ChatRoom from './chat/ChatRoom'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={ChatRoom} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
