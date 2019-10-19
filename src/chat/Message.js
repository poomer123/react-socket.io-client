import React from 'react'

export default function Message(props) {
	const { message } = props
	return (
		<li>
			{message.member} : {message.text}
		</li>
	)
}
