import React from 'react'
import Message from './Message'

export default function MessageList(props) {
	const { messages } = props
	return (
		<div>
			{messages.length > 0 &&
				messages.map(message => (
					<ul key={message.id}>
						<Message message={message} />
					</ul>
				))}
		</div>
	)
}
