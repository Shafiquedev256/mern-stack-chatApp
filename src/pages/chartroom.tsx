import { useState } from 'react';
import SendIcone from "../assets/send-svgrepo-com.svg"
const ChatRoom = () => {
  const [message, setMessage] = useState('');
  
  const handleInputChange = (e:any) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {

  };

  return (
    <div className="flex flex-col h-screen bg-blue-100 bg-opacity-25 relative">

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
