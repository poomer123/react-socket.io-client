import React from 'react'

export default function Message(props) {
	const { message } = props
	return (
		<li>
			<div className="Message-content">
				<div className="username">{message.member}</div>
				<div className="text">{message.text}</div>
			</div>
		</li>
	)
}
