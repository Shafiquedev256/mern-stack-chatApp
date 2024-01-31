import {useContext,createContext,useState,useEffect} from "react" 

import imgEl from "../assets/IMG-20231216-WA0009.jpg"
 
type User = {
  email: string;
  password: string;
  name: string;
};
 
type ChartRoom = {
  name:string,
  img:string,
} 

type Context = {
  loginEl:()=>true|false,
  logIn:()=>void
  inChartRoom:()=>ChartRoom,
  newChartRoom:(e:ChartRoom)=>void,
  userEl:User,
  changeUser:(user:User)=>void
}   


type Children = {
  children: React.ReactNode
}

const Auth = createContext<Context>({}as Context) 

export const AuthProvider = ({children}:Children)=>{ 
  const [userEl,setUserEl]=useState<User>({}as User)
const [isLogedin,setIslogedin]= useState(false) 
const [room,setRoom]=useState<ChartRoom>({img:imgEl,name:"Developer"}) 

useEffect(()=>{ 
const storedUser = localStorage.getItem("user") 

if(storedUser){
  setIslogedin(true)
  const signin = JSON.parse(storedUser)
  setUserEl(signin)
}
  
},[])

const changeUser  = (user:any)=>{
setUserEl(user)
}

  const logIn = ()=>{
   setIslogedin(true)
  }   
  const loginEl = ()=>{
    return isLogedin
  } 
  
  const newChartRoom = (e:ChartRoom)=>{
    setRoom(e)
  }
  
  const inChartRoom = ()=>room
  

  return (
    <Auth.Provider value={{logIn,loginEl,inChartRoom,newChartRoom,userEl,changeUser}}> 
    {children}
    </Auth.Provider>
    )
} 

export const UseAuth = ()=>useContext(Auth)
