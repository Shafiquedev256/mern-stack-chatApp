
type Props ={
  message:string, 
  time:string
}

export const SentMessage = ({ message,time}:Props) => {
  return ( 
    <>
    <div className="hidden">{time}</div>
    <div className="">
<div className=" mb-2 w-[90%] mx-2">
      <div className="bg-green-500 text-white py-2 px-4 mt-1 rounded-lg w-fit">
        {message}
      </div>
    </div>
    </div>
    </>
  );
};
