import {Navigate} from "react-router-dom" 
import {UseAuth} from "./auth"

type Children = {
  children: React.ReactNode
}

export const Protected = ({children}:Children)=>{ 
  const isLogedin = UseAuth().loginEl()

  if(!isLogedin){
    return <Navigate to="signup" replace/>
  }
  return children
}