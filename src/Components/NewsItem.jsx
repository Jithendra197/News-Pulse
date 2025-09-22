import React from "react";
import { Link } from "react-router-dom";
import book from '../assets/book.jpg'

const NewsItem = ({article}) => {

  const {source, title, url, image, publishedAt} = article

  return (
    <>
         
    <div className=" max-w-md mx-auto w-100 md:w-70 lg:w-70 gap-4 bg-gray-300 hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300">
          <img src={image ? image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fstock-photos%2Fnature-and-landscapes&psig=AOvVaw1BPFONWU_wTJnpuSeVqc04&ust=1758614492328000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJimwNfz648DFQAAAAAdAAAAABAE"} className="h-48 w-full rounded-lg object-cover bg-gray-200" alt={title}></img>
      
          <div className="p-4">
           
              <h2 className="text-md font-semibold transition-all">{title?.length>90 ? title.slice(0,30) : title}...</h2>
            
            {/* <p className="tet-xl text-gray-600 mt-2">{desrcription?.length >100 ? desrcription.slice(0,100) : desrcription}</p> */}
            <div className="mt-4 text-sm text-gray-500">
             
              <span className="text-black font-medium">At {new Date(publishedAt).toLocaleDateString()} {new Date(publishedAt).toLocaleTimeString()}</span>
          </div>
          <div className="mt-1 text-xs text-blue-500 font-medium">
            Source : {source.name}
          </div>
        </div>
          <div className="relative left-2/6 bg-gray-700 inline p-1 pl-2 pr-2 rounded-2xl bottom-1 hover:bg-gray-900" >
             <Link to={url} target="_blank" className="relative bottom-0 text-md text-white">Read More &rarr;</Link>
          </div>
    </div>

</>
  );
};

export default NewsItem;
