import React, { useState } from 'react'

export default function MessageForm(props) {
	const { messageSend, member } = props
	const initValue = ''
	const [value, setValue] = useState(initValue)

	const handleChange = e => {
		setValue(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		messageSend({ text: value, member: member })
		setValue(initValue)
	}

	return (
		<form onSubmit={handleSubmit} className="MessageForm">
			<input
				type="text"
				className="MessageInput"
				onChange={handleChange}
				value={value}
			/>
			<button className="MessageButton">Send</button>
		</form>
	)
}
