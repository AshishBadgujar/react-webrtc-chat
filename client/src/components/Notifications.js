import React, { useContext } from 'react'
import { SocketContext } from '../SocketContex'

export default function Notifications() {
    const { answerCall, call, callAccepted } = useContext(SocketContext)
    return (
        <div>
            {call.isReceivedCall && !callAccepted && (

                <div>
                    {alert(`{call.name} is calling...`)}
                    <h1>{call.name} is calling...</h1>
                    <button onClick={answerCall}>Answer</button>
                </div>
            )}
        </div>
    )
}
