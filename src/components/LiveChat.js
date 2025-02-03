import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";



const LiveChat = () => {
    
    const [liveMessage,setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=>store.chat.messages);

    useEffect(()=>{
        const i = setInterval(()=>{
            //api polling
            //we are putting it lot of messages in dom,as if we keep our page left open for more time
            //it will freeze
          console.log("API POLLING")
          dispatch(addMessage({
            name:generateRandomName(),
            message:"Lorem Ipsum dolor Site React 🚀",
        }))
        },2000);

        return () => clearInterval(i);
    },[])

  return (
    <>
    <div className='w-full h-[450px] p-2 ml-2 border border-black bg-slate-100 rounded-lg overflow-scroll flex flex-col-reverse'>
    <div >
      {chatMessages.map((c,i) => (
          <ChatMessage key={i} name={c.name} message={c.message}/>
        ))}
    </div>
    </div>

    <form className="w-full p-2 ml-2 border border-black" 
      onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Sensei",
            message:liveMessage,
        }))
        setLiveMessage("");
      }}>
       <input
       value={liveMessage}
       onChange={(e)=>{
        setLiveMessage(e.target.value);
       }}
        className="w-96 px-2"
        type="text"/>
        <button className="px-2 mx-2 bg-green-100">Send</button>
    </form>
    </>
  )
}

export default LiveChat