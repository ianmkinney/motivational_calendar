import { contentType } from 'mime-types';
import React, { useEffect, useState } from 'react';
import { post } from 'request';
import { StyleSheet } from 'cssom';

const CreateQuote = () =>{

  //creating a react hook to store the quote body
  const [quote,setNewQuote] = useState('')
  const [author, setQuoteAuthor] = useState('')

  const handleSubmit = async (e) => { //creating a function to be executed when the submit button is pressed

    e.preventDefault() //going to stop the page from refresehing after submitting

      const newQuote = {quote,author}  //created a variable to store the new objest values set by the user

        try {
          const response = await fetch(`http://localhost:3000/motivation/add` ,{ //adding the route to be executed by the server
          method: 'POST',  //the type of request
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newQuote) //turning the new object into a string to pass through the server 
          }).then((res)=>{
            console.log(res) //logging success if the request went through with updating the database
            alert(`Your quote has been added.\n 
            Quote:${JSON.stringify(quote)}\n
            Author:${JSON.stringify(author)}`)
          })
        }catch(err){
          console.error(err) //logging error if the request was unsuccessful
          alert('Unable to add your quote')
        }
  }
  return(
    <div className= {CreateQuote} >
      {/* Header for the form */}
      <h2> Add your quote below: </h2>
          {/* initializing the form */}

          {/* Displaying the quote for the user to see how it will show display in the end */}
          <h4>How your quote will be saved:</h4>
          <p> "{quote}"</p> 
          <p>-{author}</p>

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
            <button style={{backgroundColor: "lightblue"}}> Submit </button>
            

        </form>
    </div>
  )
}

export default CreateQuote
