import {useContext,createContext,useState} from "react" 

type Context = {
  loginEl:()=>true|false,
  logIn:()=>any
} 
type Children = {
  children: React.ReactNode
}

const Auth = createContext<Context>({}as Context) 

export const AuthProvider = ({children}:Children)=>{ 
const [isLogedin,setIslogedin]= useState(false)
  const logIn = ()=>{
   setIslogedin(true)
  }   
  const loginEl = ()=>{
    return isLogedin
  }
const localInfo = localStorage.getItem("_youInfo") 
  if(localInfo){
    setIslogedin(true)
  } 
  return (
    <Auth.Provider value={{logIn,loginEl}}> 
    {children}
    </Auth.Provider>
    )
} 

export const UseAuth = ()=>useContext(Auth)
