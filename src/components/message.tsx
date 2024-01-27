
type Props ={
  message:string, 
  time:string
}

export const SentMessage = ({ message,time}:Props) => {
  return ( 
    <>
    <div className="w-[75%] my-3">
      <div className="ml-3 bg-blue-500 text-white p-1 rounded-tl-2xl rounded-br-2xl">
        <p className="text-sm">{message}</p>
        <div className="text-xs text-gray-300 mt-2">{time}</div>
      </div>
    </div>  
    
    </>
  );
};
