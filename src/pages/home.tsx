import {Navbar} from "../components/navBar" 
import imgEl from "../assets/IMG-20231216-WA0009.jpg"
 const HomePage = ()=>{
   return (
     <> 
     <section className="bg-gray-300  py-2">
     <div className="text-2xl font-light p-4 text-gray-900">Messages</div>  
     <input className="w-60 bg-white p-3 rounded  border-0 mx-3" placeholder="search friend..."/> 
     <div className="flex flex-row overflow-scroll w-screen p-2">
    <div className="bg-white rounded-lg p-2"> 
    
    <div className="relative rounded-full w-16 h-16">
      <img
        src={imgEl}
        className="w-16 h-16 rounded-full object-center"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute -bottom-2 -right-2 border-2 border-white"></div> 
      </div>
      
      <p className="text-sm font-semibold">Shafiq</p>
    </div>
     </div>
     </section>
     <Navbar/> 
     </>
     )
 } 
 export default HomePage