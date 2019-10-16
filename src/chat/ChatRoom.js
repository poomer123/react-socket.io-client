import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

function ChatRoom() {
    const [socket, setSocket] = useState(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const socketIO = socketIOClient('localhost:8080')
        socketIO.on('count', data => {
            setCount(data.count)
        })
        setSocket(socketIO)
    }, [])

    const handleClick = () => {
        socket.emit('emit', { count: count })
        setCount(count + 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Count</button>
        </div>
    )
}

export default ChatRoom
