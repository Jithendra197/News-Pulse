import React, { use, useCallback, useEffect, useState,} from "react";
import axios from "axios"
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const News = ({articles,setArticles, category}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // To track if more articles are available
  const fetchAllNews = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      // Spinner(true);
      setLoading(true);
      setError(null);

      const res = await axios.get(
        
        `https://gnews.io/api/v4/top-headlines?&lang=en&category=${category}&max=12&apikey=3eb7434e6ad49f23196dbfb1468c1b80&page=${page}`
      );

      // Append new articles instead of replacing
      if (res.data.articles.length > 0) {
        setArticles((prev) => [...prev, ...res.data.articles]);
      } else {
        setHasMore(false); // No more articles to load
      }

      // Spinner(false);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch news");
    } 
    // finally {
      // Spinner(false);
    // }
  }, [category, page, hasMore, loading, setArticles]);

  
  useEffect(() => {
    setArticles([]);      // Clear old articles when category changes
    setPage(1);
    setHasMore(true);
    fetchAllNews();
  }, [category]);


  useEffect(()=>{
    fetchAllNews();
  },[page,category]);

  return(
     <>
     <div className="bg-gray-900">
    <h1 className="text-center text-3xl font-semibold pt-6 mb-4 text-white">Top-Headlines - {category}</h1>
      
   
        <InfiniteScroll
          dataLength = {articles.length}
          next={()=>setPage((prev)=> prev +1)}
          hasMore= {hasMore}
          loader = {<Spinner/>}
          endMessage = {<p className="text-center">Yay! You have seen it all</p>}>
            <div className="flex justify-center items-center">
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 p-4">
      {articles.map((lesson,index)=> (
              <NewsItem key ={index} article={lesson}/>
          ))}
            </div>
            </div>
          </InfiniteScroll>
    </div>
        
    </>
  )
}

export default News;