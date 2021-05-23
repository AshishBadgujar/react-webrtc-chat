import React, { useContext, useState } from 'react'
import { SocketContext } from '../SocketContex'
import { CopyToClipboard } from 'react-copy-to-clipboard'
export default function Options({ children }) {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState('');

    return (
        <div>
            <div>
                <form noValidate autoComplete="off" style={{ display: 'flex', width: "100%", justifyContent: "space-between" }}>
                    <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h2>Account Info</h2>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <CopyToClipboard text={me}>
                            <button onClick={(e) => e.preventDefault()}>copy your id</button>
                        </CopyToClipboard>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        <h2>Make Call</h2>
                        <input type="text" value={idToCall} placeholder="Id" onChange={(e) => setIdToCall(e.target.value)} />
                        {callAccepted && !callEnded ?
                            <button style={{ backgroundColor: "#ff6d74" }} onClick={(e) => {
                                e.preventDefault();
                                leaveCall();
                            }}>Hang Up</button>
                            :
                            <button style={{ backgroundColor: "skyblue" }} onClick={(e) => {
                                e.preventDefault();
                                callUser(idToCall);
                            }}>Call</button>
                        }
                    </div>
                </form>
            </div>
            {children}
        </div>
    )
}
