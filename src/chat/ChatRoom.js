import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

export default function ChatRoom(props) {
	const { name } = props.location
	const serverUrl = 'http://localhost:8080'
	const [socket, setSocket] = useState(null)
	const [messages, setMessages] = useState([
		{ id: 1, text: 'Hi', member: 'John' },
		{ id: 2, text: 'Good', member: 'Mark' },
		{ id: 3, text: 'Bye', member: 'Sarah' },
		{ id: 4, text: 'Good Bye', member: 'Jo' }
	])

	const messageSend = newMessage => {
		const socketConnect = socketIOClient(serverUrl)
		setMessages([...messages, newMessage])
		socketConnect.emit('emit', { ...newMessage })
	}

	useEffect(() => {
		const socketConnect = socketIOClient(serverUrl)
		socketConnect.on('message', message => {
			setMessages({
				...message
			})
		})
		setSocket(socketConnect)
	}, [])

	if (!name) {
		return <Redirect to="/" />
	}

	return (
		<div>
			<MessageList messages={messages} />
			<MessageForm messageSend={messageSend} member={name} />
		</div>
	)
}
