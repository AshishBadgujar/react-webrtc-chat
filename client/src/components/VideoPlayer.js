import React, { useContext } from 'react'
import { SocketContext } from '../SocketContex'

export default function VideoPlayer() {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return (
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
            {/* my video */}
            {stream && (
                <div style={{ width: 478, height: 270, marginRight: 40 }}>
                    <video playsInline muted ref={myVideo} autoPlay style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            )
            }
            {/* users video */}
            {callAccepted && !callEnded && (
                <div style={{ width: 478, height: 270, borderRadius: 20 }}>
                    <video playsInline ref={userVideo} autoPlay style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            )}
        </div >
    )
}
