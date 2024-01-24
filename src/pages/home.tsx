import {Navbar} from "../components/navBar"   

import {FriendsCard} from "../components/friendsCard" ;
 const HomePage = ()=>{
   return (
     <> 
     <section className="py-2">
     <div className="text-2xl font-light pt-2 px-2 pb-4 text-gray-900">Messages</div>  
     <input className="w-64 bg-gray-100 outline-0 p-3 rounded  border-0 ml-2" placeholder="Search..."/>  
     <FriendsCard/>
     </section>
     <Navbar/>  

     </>
     )
 } 
 export default HomePage