import {Navbar} from "../components/navBar" 
import imgEl from "../assets/IMG-20231216-WA0009.jpg"
 const HomePage = ()=>{
   return (
     <> 
     <section className="py-2">
     <div className="text-2xl font-light p-4 text-gray-900">Messages</div>  
     <input className="w-60 bg-gray-100 outline-0 p-3 rounded  border-0 ml-2" placeholder="search friend..."/> 
     <div className="flex flex-row overflow-scroll  p-2">
    <div className="bg-white rounded-lg p-2"> 
    
    <div className="relative rounded-full w-16 h-16 flex flex-col justify-center">
      <img
        src={imgEl}
        className="w-16 h-16 rounded-full object-cover"
        alt="img"
      /> 
      <div className="bg-green-500 w-4 h-4 rounded-full absolute  bottom-0 left-0 border-2 border-white"></div> 
      </div>
      
      <p className="text-xs font-semibold">Shafiq</p>
    </div>
     </div>
     </section>
     <Navbar/> 
     </>
     )
 } 
 export default HomePage