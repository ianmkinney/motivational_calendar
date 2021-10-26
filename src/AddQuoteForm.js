import { contentType } from 'mime-types';
import React, { useEffect, useState } from 'react';
import { post } from 'request';

const CreateQuote = () =>{

  //creating a react hook to store the quote body
  const [quote,setNewQuote] = useState('')
  const [author, setQuoteAuthor] = useState('')
  

  const handleSubmit = async (e) => {

    e.preventDefault() //going to stop the page from refresehing after submitting
      const newQuote = {quote,author}
        try {
          const response = await fetch(`http://localhost:3000/motivation/add` ,{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newQuote)
          }).then((res)=>{
            console.log(res)
          })
        }catch(err){
          console.error(err)
        }
  }
    

  return(
    <div className= "CreateQuote">
      {/* Header for the form */}
      <h2> Add your quote below: </h2>
          {/* initializing the form */}
        <form onSubmit={handleSubmit}>
            
            {/* Adding field to input quote context */}
            <label> Add quote content:</label>
            <textarea
                required
                value = {quote}
                // changing the state of quote to update when user inputs text
                // using the e.target.value to target the even object which is the text area and the value within
                onChange = {(e)=> setNewQuote (e.target.value)}  
                
            />

            {/* adding field to add quote author */}
            <label> Quote author: </label>
            <input 
            required 
            value = {author}
            onChange ={ (e) => setQuoteAuthor(e.target.value)}
            />

             {/* stretch goal--- add the current username to pop up below
            <label>User Name: </label>
            <select>
              
              <option value='anonymous'>Anonymous</option>
            </select> */}

            {/* adding a submit button to save the changes */}
            <button> Submit </button>

            {/* testing to see if the setNewQuote works */}
            <p> {quote}</p>
            <p>{author}</p>

        </form>
    </div>
  )
}

export default CreateQuote
