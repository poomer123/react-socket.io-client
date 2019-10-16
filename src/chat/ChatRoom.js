import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

function ChatRoom() {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const socketIO = socketIOClient('localhost:8080')
        setSocket(socketIO)
        socketIO.emit('emit', { data: 'tet' })
    }, [])

    return <div>ChatRoom</div>
}

export default ChatRoom
