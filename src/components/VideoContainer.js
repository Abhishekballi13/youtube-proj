import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCHLIST_API, YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
    const [videos,setVideos] = useState([]);
   
    // const ifSearchResult = useSelector((store) => store.searchedVideo)

    useEffect(()=>{
       getVideos();
    },[]);
    
    // const getSearchedVideos = async() => {
    //     const data = await fetch(YOUTUBE_SEARCHLIST_API);
    //     const json = await data.json();
    //     setVideos(json.items);
    // }

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        setVideos(json.items);
    };

  return (
    <div className='flex flex-wrap'>
    {videos[0] && <AdVideoCard info={videos[0]}/>}
        {videos && videos.map(video => <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>)}
    </div>
  )
}


export default VideoContainer