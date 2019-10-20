import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ChatRoom from './chat/ChatRoom'
import ChatForm from './chat/ChatForm'
import './App.css'

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/chatroom" exact component={ChatRoom} />
					<Route path="/" exact component={ChatForm} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
