import React, { useState ,useEffect} from 'react';
import "./Reviewcard.css"
import HoverRating from './HoverRating';
import axios from 'axios';
const   Reviewcard= () => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      title,
      rating,
      category,
      review
    };

    // Send a POST request to your backend route
    // axios.post('http://localhost:5000/review/create', formData)
    //   .then((response) => {
    //     console.log('Book saved successfully', response);
    //   })
    //   .catch((error) => {
    //     console.log('Error saving book:', error);
    //   });
    console.log(formData);
    await fetch('http://localhost:5000/review/create',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
 
  };
 
  
  
  return (
  <>
  <div className='f1'>
        <div className="img" ></div>
      <div className='f1f2'>
          <form className='form'  onSubmit={handleSubmit}>
            <label>Book Title</label>
             <input type="text" value={title}
        onChange={(e) => setTitle(e.target.value)} placeholder="Eg.how to win friends and influence people"/>
             <label id='rr'> Rating</label>
             <div className="ratt">
              <HoverRating setRating={setRating} />
             </div>
             <label id='cc'>Category</label>

          
             

<select value={category} onChange={(e) => setCategory(e.target.value)}>
<option value="" disabled>Select an option</option>
  <option value="self_improvement">Self Improvement</option>
  <option value="fantasy">Fantasy</option>
  <option value="science_fiction">Science Fiction</option>
  <option value="mystery">Mystery</option>
  <option value="romance">Romance</option>
  <option value="biography">Biography</option>
  <option value="historical_fiction">Historical Fiction</option>
  <option value="horror">Horror</option>
  <option value="thriller">Thriller</option>
  <option value="dystopian">Dystopian</option>
  <option value="adventure">Adventure</option>
  <option value="science">Science</option>
  <option value="business">Business</option>
  <option value="fantasy_romance">Fantasy Romance</option>
  <option value="classic">Classic</option>
  <option value="historical">Historical</option>
  <option value="comedy">Comedy</option>
  <option value="philosophy">Philosophy</option>
  <option value="art">Art</option>
</select>

            <label>Review</label>

             

             <textarea  value={review}
        onChange={(e) => setReview(e.target.value)}placeholder="Write your post here..."rows="10"cols="100"></textarea>           
             <button className="butt"  type="submit">Post</button>
        </form>
      </div>
    </div></>
  );
};

export default Reviewcard;
