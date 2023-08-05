import './App.css';

import React, {useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import PageNotFound from './components/PageNotFound';

const App =()=> {
  const pagesize=10;
  const apiKey=process.env.REACT_APP_NEWS_API
  // state={
  //   progress:0
  // }
  const[progress,setProgress]=useState(0);
  // setProgress=(progress)=>{
  //   setState({
  //     progress:progress
  //   })
  // }
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={2.5}
        shadow={true}
      />
        <Routes>
        <Route exact  path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesize} country="in" category="general"/>} />
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pagesize} country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pagesize} country="in" category="entertainment"/>} />
        <Route exact path="/general"  element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesize} country="in" category="general"/>} />
        <Route exact path="/health"  element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pagesize} country="in" category="health"/>} />
        <Route exact path="/science"   element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pagesize} country="in" category="science"/>} />
        <Route exact path="/sports"   element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pagesize} country="in" category="sports"/>} />
        <Route exact path="/technology"   element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pagesize} country="in" category="technology"/>} />
        <Route path="*"   element={<PageNotFound/>} />
        </Routes>
        </Router>
      </div>
    )
}

export default App;