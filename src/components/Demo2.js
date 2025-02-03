import React, { useRef, useState } from 'react'

const Demo2 = () => {
    //we can see the difference between let and state variables
    //increase the value of x lets say 5 times so it will become 5
    //when you increase the value of y lets say from 1 -> 2
    //now when you will increase value of x ,it will reset and will start to increment from 0 again
    const [num,setNum] = useState(0);
    let x = 10;
    
    //ref is not like a normal variable,it is a object
    //not like ==> ref=0;
    //it is like ref = {current:0}
    //when we will increase ref it will not re render
    //but it will persist value,when you change the value of y which will re render he comp,you can see the changes on the page 
    const ref = useRef(0);
  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
        <div>
        <button className='bg-green-100 p-2 m-4'
        onClick={()=> x = x+1}>
        Increase x
        </button>
        <span className='font-bold text-xl'>Let x = {x}</span>
        <button className='bg-green-100 p-2 m-4'
        onClick={()=> setNum(num+1)}>
        Increase y
        </button>
        <span className='font-bold text-xl'>State y = {num}</span>
        <button className='bg-green-100 p-2 m-4'
         onClick={()=>{
            ref.current = ref.current+1;
         }}>
        Increase ref
        </button>
        <span className='font-bold text-xl'>Ref = {ref.current}</span>
        </div>
    </div>
  )
}

export default Demo2