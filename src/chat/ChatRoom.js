import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import Message from './Message'

export default function ChatRoom() {
    return (
        <div>
            <MessageList />
            <MessageForm />
            <Message />
        </div>
    )
}
