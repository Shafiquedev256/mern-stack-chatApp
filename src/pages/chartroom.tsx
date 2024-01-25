import { useState,useEffect } from 'react'; 
import SendIcone from "../assets/send-svgrepo-com.svg" 


import io from 'socket.io-client';

const socket = io('http://localhost:4000',{
    transports: ['websocket'], // Required when using Vite      
}); 

const ChatRoom = () => {
  const [message, setMessage] = useState(''); 
const [messages, setMessages] = useState<any>([])
  
  useEffect(()=>{

socket.on("message",(msg)=>{
setMessages((prev:any)=>[...prev,msg])
})

  },[])
  
  const handleInputChange = (e:any) => { 
    
    setMessage(e.target.value);
  };

  const handleSendMessage = (e:any) => { 
    e.preventDefault()
 if(message){
   socket.emit("sendMessage",{message}) 
   setMessage("")
 }
  };

  return (
    <div className="flex flex-col h-screen bg-blue-100 bg-opacity-25 relative"> 
{
messages.length>0&&messages.map(item=>{
  return(<div>{item.message}</div>)
})
}
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
