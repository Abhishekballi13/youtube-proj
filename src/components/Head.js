import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const [searchQuery,setSearchQuery] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    
    useEffect(()=>{
       //make an API call after every keypress
       //but if the difference between two API calls is <200ms
       //decline the API call
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery]){
                //setting suggestions of already cached data or suggestion
              setSuggestions(searchCache[searchQuery]);
            }else{
                getSearchSuggestions()
            }
        },200);
       
        //will get called when unmounting of component takes place
        return (()=>{
            clearTimeout(timer);
        });
    },[searchQuery])

    const getSearchSuggestions = (async ()=>{
       const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
       const json = await data.json();
       console.log(json);
       setSuggestions(json[1]);

       dispatch(cacheResults({
        //we will have same object as we get from api
        //we have array of suggestion for a search query ,here json[1] is array of suggestion
          [searchQuery]:json[1],
       }))
    })
   
    //we will dispatch an action 
    //this dispatch is a hook which is coming from react redux

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col p-5 m-auto shadow-lg'>
    <div className='flex col-span-1 '>
        <img 
        onClick={()=>toggleMenuHandler()}
        className="h-8 cursor-pointer" alt="menu" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"/>
        <img className="h-8 mx-2" alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
    </div>
    
    <div className='col-span-10 px-10'>
     <div>
        <input className="px-5 w-1/2 text-center border border-gray-400 p-2 rounded-l-full" type="text" value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>🔍</button>
     </div>
     {showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg  border border-gray-100'>
        <ul>
            {suggestions.map((s)=>(
                <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                  🔍{s}
               </li>
            ))}
        </ul>
     </div>)}
     
    </div>
    <div className='col-span-1'>
        <img className="h-8"alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
    </div>
       
    </div>
  )
}

export default Head