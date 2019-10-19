import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

export default function ChatRoom() {
	const [messages, setMessages] = useState([
		{ id: 1, text: 'Hi', member: 'John' },
		{ id: 2, text: 'Good', member: 'Mark' },
		{ id: 3, text: 'Bye', member: 'Sarah' },
		{ id: 4, text: 'Good Bye', member: 'Jo' }
	])

	const messageSend = newMessage => {
		console.log(newMessage)
		setMessages([...messages, newMessage])
	}

	return (
		<div>
			<MessageList messages={messages} />
			<MessageForm messageSend={messageSend} />
		</div>
	)
}
