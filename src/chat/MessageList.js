import React from 'react'
import Message from './Message'

export default function MessageList(props) {
	const { messages } = props
	return (
		<>
			{messages.length > 0 &&
				messages.map(message => (
					<ul key={message.id} className="Messages-list">
						<Message message={message} />
					</ul>
				))}
		</>
	)
}
