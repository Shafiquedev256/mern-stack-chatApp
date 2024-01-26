import { useState,useEffect } from 'react'; 
import SendIcone from "../assets/send-svgrepo-com.svg" 
import {SentMessage} from "../components/message"
import io from 'socket.io-client';

type MESSAGE = {
  message:string
}

const socket = io('http://localhost:4000',{
    transports: ['websocket'], // Required when using Vite      
}); 

const ChatRoom = () => {
  const [message, setMessage] = useState(''); 
const [messages, setMessages] = useState<MESSAGE[]>([])
  
  useEffect(()=>{
socket.on("message",(msg)=>{
setMessages((state)=>[...state,msg])
}) 
return ()=>{socket.off("message")}; 
  }, []);
  
  const handleInputChange = (e:any) => { 
    
    setMessage(e.target.value);
  };

  const handleSendMessage = () => { 
 if(message){
   socket.emit("sendMessage",{message}) 
 } 
setMessage("")
  };

  return (
    <div className="flex flex-col h-screen bg-blue-100 bg-opacity-25 relative overflow-scroll"> 
{
messages&&messages.map(item=>{
  return(<SentMessage message={item.message}/>)
})
}
<div className="p-1 bg-none w-screen h-[150px] my-16"></div>
      <div className="flex items-center justify-center fixed bottom-0 bg-white w-screen left-0">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="outline-none  py-5 px-2 border-0 w-4/5"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white flex items-center py-1.5 w-1/5 border-0"
        >
      <img
        src={SendIcone}
        className=""
        alt="img"
      /> 
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
