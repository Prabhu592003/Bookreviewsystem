import React from 'react'
import Bookitem from '../bookitems/Bookitem'
import "./Booklayout.css"
   
const Booklayout = (props) => {
  const{searchData}=props;



  // return (
  //   <div className='outer'>
  //     {searchData.map((e) => {
  //       return (
  //         <div className='inner' >
  //           <h2>{e.title}</h2>
  //           <p>Rating: {e.rating}</p>
  //           <p>{e.review}</p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
  return (
 <div className='outerr'>
  {searchData.map((e)=>{
      return(
  <div className='inner'>
      <h2>{e.title}</h2>
      <p>Rating:{e.rating}</p>
      <p>"{e.review}"</p>
 </div>
      )
  })}
  </div>
  )
}

export default Booklayout