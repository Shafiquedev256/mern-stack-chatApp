
type Props ={
  message:string, 
  color:string,
  userName:string
}


export const SentMessage = ({ message,color,userName}:Props) => {
  return ( 
    <>

    <div className=""> 
    <span className="text-xs text-purple-600 font-bold mx-2 ">{userName}</span>
<div className=" mb-2 w-[90%] mx-2">
      <div className={`${color} text-white py-2 px-4 mt-1 rounded-lg w-fit`}>
       <span className="mt-1">{message}</span>
      </div>
    </div>
    </div>
    </>
  );
};
