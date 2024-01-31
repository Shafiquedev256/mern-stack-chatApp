import {useNavigate} from "react-router-dom" 
import {socket} from "../App"
import imgEl from "../assets/149778835.png"
import reactLogo from "../assets/React-icon.svg.png"
import NodeLogo from "../assets/2560px-Node.js_logo.svg.png" 
import tailwindLogo from "../assets/tailwind.png" 

import  {UseAuth} from "../authentications/auth" 

type ChartRoom = {
  name:string,
  img:string,
} 

export const FriendsCard = ()=>{
  const navigate = useNavigate()
  const setRoom = UseAuth()
  
  const {name,email,password}=UseAuth().userEl
  
  
  const handleClick = (roomEl:ChartRoom)=>{
    setRoom.newChartRoom(roomEl)  
    socket.emit("joinroom",{room:roomEl.name})
   socket.emit("userDetails",{name,email,password,room:roomEl}); 
    navigate("/chatroom") 
  }
  
  return(
    <>
     <div className="flex flex-row overflow-scroll  p-2">
    <div className="bg-white rounded-lg p-2" onClick={()=>{handleClick({name:"React",img:reactLogo})}} > 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={reactLogo}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">React</p>
    </div> 
    
    <div className="bg-white rounded-lg p-2" onClick={()=>{handleClick({name:"Tailwind",img:tailwindLogo})}} > 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={tailwindLogo}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">Tailwind</p>
    </div> 
    
    <div className="bg-white rounded-lg p-2" onClick={()=>{handleClick({name:"Freelancer",img:imgEl})}} > 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={imgEl}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">Freelancer</p>
    </div> 
    
    <div className="bg-white rounded-lg p-2" onClick={()=>{handleClick({name:"Mern Stack",img:imgEl})}} > 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={imgEl}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">Mern stack</p>
    </div> 
    
    <div className="bg-white rounded-lg p-2" onClick={()=>{handleClick({name:"Node js",img:NodeLogo})}} > 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={NodeLogo}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">Node js</p>
    </div>
    
     </div>
    </>
    )
}