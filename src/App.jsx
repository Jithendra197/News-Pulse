import React from "react";
import { useState } from "react";
import News from './components/News';
import NavBar from "./components/NavBar";
import {Route, Routes } from 'react-router-dom';

const App = () => {
  const [articles,setArticles] = useState([])
 
  return(
    <div>
      <NavBar setArticles={setArticles}/>
      <Routes>
         <Route path='/' element={<News category ='General' articles={articles} setArticles={setArticles} />} />
      <Route path='/News-Pulse/' element={<News category ='General' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/business' element={<News category ='Business' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/entertainment' element={<News category ='Entertainment' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/sports' element={<News category ='Sports' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/health' element={<News category ='Health' articles={articles} setArticles={setArticles} />}></Route>
      <Route path='/science' element={<News category ='Science' articles={articles} setArticles={setArticles} />}></Route>
      
    </Routes>
    </div>

  )
}

export default App;
