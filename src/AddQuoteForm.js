import React, { useEffect, useState } from 'react';

const CreateQuote = () =>{

  //creating a react hook to store the quote body
  // const [newQuote,setNewQuote] = useStates('')
  // cosnt [QuoteAuthor, setQuoteAuthor] = useState('')
  


  return(
    <div className= "CreateQuote">
      {/* Header for the form */}
      <h2> Add your quote below: </h2>
          {/* initializing the form */}
        <form>
            
            {/* Adding field to input quote context */}
            <label> Add quote content:</label>
            <textarea
                required
                
            />

            {/* adding field to add quote author */}
            <label> Quote author: </label>
            <input type={Text}
            required 
            // value = {QuoteAuthor}
            // onChange ={ (e) => setQuoteAuthor(e.target.value)}
            />

            {/* adding a submit button to save the changes */}
            <button> Submit </button>

            {/* testing to see if the setNewQuote works */}
            <p> {newQuote}</p>
            <p>{QuoteAuthor}</p>

        </form>
    </div>
  )
}

export default CreateQuote