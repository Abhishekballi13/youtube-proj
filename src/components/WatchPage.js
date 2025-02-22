import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    
    const [searchParams] = useSearchParams();
    const vidId = searchParams.get("v")
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(closeMenu());
    },[])

  return (
    <div className='flex flex-col w-full'>
      <div className='px-5 flex w-full'>
      <div>
      <iframe width="1000" height="450" src={"https://www.youtube.com/embed/"+vidId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      <div className='w-full'>
        <LiveChat/>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage