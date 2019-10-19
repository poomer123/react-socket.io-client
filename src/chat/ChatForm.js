import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ChatForm() {
	const [name, setName] = useState('')
	const handleChange = e => {
		setName(e.target.value)
	}
	return (
		<div>
			<input type="name" onChange={handleChange} value={name} />
			<Link to={{ pathname: '/chatroom', name }}>Join</Link>
		</div>
	)
}
