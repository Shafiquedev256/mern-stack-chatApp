import imgEl from "../assets/IMG-20231216-WA0009.jpg"




export const FriendsCard = ()=>{
  
  return(
    <>
     <div className="flex flex-row overflow-scroll  p-2">
    <div className="bg-white rounded-lg p-2"> 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={imgEl}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">React</p>
    </div> 
    
    <div className="bg-white rounded-lg p-2"> 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={imgEl}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">Tailwind</p>
    </div> 
    
    <div className="bg-white rounded-lg p-2"> 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={imgEl}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">freelancers</p>
    </div> 
    
    <div className="bg-white rounded-lg p-2"> 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={imgEl}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">Developer</p>
    </div> 
    
    <div className="bg-white rounded-lg p-2"> 
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={imgEl}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 right-0 border-2 border-white"></div> 
      </div>
      <p className="text-xs font-semibold">Nodejs</p>
    </div>
    
     </div>
    </>
    )
}