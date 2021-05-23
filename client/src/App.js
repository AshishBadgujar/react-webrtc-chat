import { useContext } from "react";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";
import { SocketContext } from "./SocketContex";


function App() {
  const { callAccepted } = useContext(SocketContext)
  return (
    <div className="App" style={{ width: "90%", height: "100vh", margin: "auto", backgroundColor: "#ffff", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      <div>
        <h1>Let's Talk</h1>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
      {!callAccepted && (
        <div style={{ textAlign: "center" }}>
          <img src="./1.jpg" alt="hero" width={400} height={400} />
          <p style={{ margin: 0, fontSize: 23 }}>My first video calling app with React,<br /> Express, webRTC. <br /> Let's check it out!</p>
        </div>
      )}
    </div>
  );
}

export default App;
