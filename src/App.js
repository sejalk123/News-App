import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, {useState} from 'react'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const  App =()=>{
  const pageSize=8;
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

 
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
         
      />
        <Routes>
          <Route path="/" element={ <News setProgress={setProgress} apikey={apikey}   key='general' pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/Business" element={  <News setProgress={setProgress} apikey={apikey}  key='business'  pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={ <News setProgress={setProgress} apikey={apikey}  key='entertainment'  pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={  <News setProgress={setProgress} apikey={apikey}  key='general'  pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/Health" element={  <News setProgress={setProgress} apikey={apikey}  key='health'  pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route path="/Science" element={  <News setProgress={setProgress} apikey={apikey}  key='science'  pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={  <News setProgress={setProgress} apikey={apikey}  key='sports'  pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={  <News setProgress={setProgress} apikey={apikey}   key='technology' pageSize={pageSize} country="in" category="technology"/>}></Route>

        </Routes>
        </Router>
      </div>
    )
  }


export default App;