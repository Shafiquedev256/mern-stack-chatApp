import {BrowserRouter,Routes,Route} from "react-router-dom"  
import io from "socket.io-client"
import HomePage from "./pages/home"
import ChatRoom from "./pages/chartroom" 
import SignupPage from "./pages/signupPage"  
import  {AuthProvider} from "./authentications/auth"
import  {Protected} from "./authentications/protected"

export const socket = io('https://chartserver-2asn.onrender.com/',{
    transports: ['websocket'], 
    autoConnect:false,
}); 

function App() {

  return (
    <>   
   
    <AuthProvider> 
 <div className="font-sans">
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<Protected><HomePage /></Protected> }/> 
    <Route path="/signUp" element={<SignupPage socket={socket}/>}/> 
    <Route path="/chatroom" element={<Protected><ChatRoom socket={socket}/></Protected> }/> 
    </Routes>
    </BrowserRouter> 
    </div>
    </AuthProvider> 
    </>
  )
}

export default App
