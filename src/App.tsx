import HomePage from "./pages/home"
import ChatRoom from "./pages/chartroom" 
import SignupPage from "./pages/signupPage"
function App() {


  return (
    <> 
    <div className="hidden">
<HomePage/> 
     <ChatRoom/>
</div> 
<SignupPage/>
    </>
  )
}

export default App
