// import { useState } from "react";
// import "./App.css";
// import Searchbar from "./components/Searchbar/Searchbar";
// import Newbar from "./components/Sidebar/Newbar";
// import Reviewcard from "./components/reviewuploadcard/Reviewcard";
// const App = () => {
//   const [option, setoption] = useState(0);

//   return (
//     <>
//       <div className="whole">
//         <div className="f1">
//           <Newbar setoption={setoption}/>
//         </div>
//         {
//           option == 0? (
//             <div className="f2">
//               <Searchbar />
//             </div>
//           ) : option == 1?(
//             <Reviewcard />
//           ) : (
//             <></>
//           )
//         }
//       </div>
//     </>
//   );
// };

// export default App;
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React, { useEffect } from 'react'
import Layout from './components/layout/Layout';
import Searchbar from './components/searchbar/Searchbar';
import Reviewcard from './components/reviewuploadcard/Reviewcard';
import axios from 'axios';
import Booklayout from './components/booklayout/Booklayout';
import Login from './components/loginpage/Login';


function App() {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get('http://localhost:5000/review/get?title=ink').then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);
  // console.log(post)
  return (


    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Searchbar" element={<Searchbar/>}/>
        <Route path="/Reviewcard" element={<Reviewcard/>}/>
        <Route path="/Booklayout" element={<Booklayout/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;