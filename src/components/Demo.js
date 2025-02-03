import { useMemo, useState } from 'react'
import { PrimeMover } from '../utils/helper';

const Demo = () => {
    const [num,setNum] = useState(0);
    const [isDarkTheme,setIsDarkTheme] = useState(false);
    //when we will toggle our theme,it will render again 
    //so it will also call PrimeOver again and evry time we switch our theme
    // console.log("Rendering");
    //useMemo also takes dependecny array
    //we are memoizing the heavy operations
    //you can think of basically like it cache the results,values which are returned by PrimeOver function
    //useCallBack is same but it caches the function definition instead of values like in useMemo
    const prime = useMemo(()=>PrimeMover(Number(num)),[num]);
  return (
    <div className={"m-4 p-2 w-96 h-96 border border-black " + (isDarkTheme && "bg-gray-900 text-white")}>
    <div>
        <button className='m-2 p-2 bg-green-100' onClick={()=>setIsDarkTheme(!isDarkTheme)}> 
           Toggle
        </button>
    </div>
    <div>
    <input className="border border-black w-76 px-2"
        type="number" value={num} 
        onChange={(e)=>setNum(e.target.value)}/>
    </div>
    <div>
       <h1 className='mt-4 font-bold text-xl'>nth Prime : {prime}</h1> 
    </div>
    </div>
  )
}

export default Demo