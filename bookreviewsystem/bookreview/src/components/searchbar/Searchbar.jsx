// import React from 'react'
// import { useNavigate } from 'react-router'
// import "./Searchbar.css"
// import Booklayout from '../booklayout/Booklayout';
// const Searchbar = () => {
//   const navigate = useNavigate();
//   return (
//     <div >
//     <div className='fr1'>
//       <h1 className='f1h1'>Read More.Explore Endlessly</h1>
//     </div>
//     <div className='fr2'>
  
//         <input className='searcharea' type="search" placeholder="Eg.Think like a monk" aria-label="Search"/>
//         <button  className='searchbutton' type="submit">Search</button>
    
//     </div>
    
//       <Booklayout/>    
//       </div>
//   )
// }

// export default Searchbar

import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router';
import "./Searchbar.css";

import Booklayout from '../booklayout/Booklayout';
import axios from 'axios';
import { Link,Outlet } from 'react-router-dom';

const Searchbar =() => {

const [searchInput, setSearchInput] = useState(String);
const [searchValue, setSearchValue] = useState('');
const [searchData,setSearchData] = useState([]);
const handleSearchClick = () => {
  // Save the input value to the searchValue state variable when the button is clicked
  setSearchValue(searchInput);
};
useEffect(()=>{
  searchdatafetch();
},[searchValue]);
const searchdatafetch = async ()=>{
  try{
  const response = await  axios.get(`http://localhost:5000/review/get?title=${searchValue}`);
  console.log(response.data);
  setSearchData(response.data);
  }
  catch(error){
    console.log(error)
  }
}
  
  return (
    <div className="outer">
     
      <div className='fr1'>
        <h1 className='f1h1'>Read More. Explore Endlessly</h1>
      </div>
      
      <div className='fr2'>
        <input id="searchInput" className='searcharea' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="search" placeholder="Eg. Think like a monk" aria-label="Search" />
        <button className='searchbutton' type="submit" onClick={handleSearchClick}>Search</button>
      </div>
   
       {
        (searchData.length > 0)?<>
        <Booklayout searchData={searchData}/>
        </>:<>
        No data Found
        </>
       }

     </div>
  );
};

export default Searchbar;
