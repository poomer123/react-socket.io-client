import React, { useState } from 'react'

export default function MessageForm(props) {
	const { messageSend, member } = props
	const [value, setValue] = useState('')

	const handleChange = e => {
		setValue(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		messageSend({ id: 5, text: value, member: member })
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={handleChange} value={value} />
			<button>Send</button>
		</form>
	)
}
