const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API;

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=30&key="+ GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCHLIST_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+GOOGLE_API_KEY+"&q=pubg";

export const LIVECHAT_COUNT = 10;