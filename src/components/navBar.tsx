import chatIcone from "../assets/chat-dots-svgrepo-com.svg"
import groupIcone from "../assets/group-svgrepo-com.svg" 

export const Navbar = () => {
  return (
    <div className="bg-gray-100  p-4 fixed bottom-0 w-screen left-0">
        <div className="flex flex-row justify-evenly items-center w-screen">
          <img src={chatIcone} className="text-gray-300 hover:bg-blue-200 hover:rounded hover:bg-opacity-60 p-1" />
          <img src={groupIcone} className="text-gray-300 hover:bg-blue-200 hover:rounded hover:bg-opacity-60 p-1" />
      </div>
    </div>
  );
};

