import  {UseAuth} from "../authentications/auth" 
import {useNavigate} from "react-router-dom"

export const ChatroomHeader = () =>{ 
  const navigate = useNavigate()
  
  const headerData = UseAuth().inChartRoom()
  return (
    <div className="bg-white p-4 flex justify-between items-center sticky top-0 z-10">
      <button className="text-Black border-0 bg-white font-bold" onClick={()=>navigate("/")}>
        Back
      </button>
      <div className="flex items-center flex-row-reverse w-3/5 justify-between">
        <img src={headerData.img} alt="User Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
        <span className="text-purple-600  font-bold">{headerData.name}</span>
      </div>
    </div>
  );
};


