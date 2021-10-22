import React, { useEffect, useState } from 'react';

function Quotes() {
    // React hook
    // Store, update, and use data within this functional component
    // [storage, setMusic] how your state will be initialize when your component renders
    const [quotes, setQuotes] = useState([])

    // write a function that will make a fetch request to our server
    async function fetchQuotes() {
        // try catch block
        // try something, if it doesn't work, it will go straight to the catch block
        try {
            const response = await fetch('http://localhost:3000/allMotivations')
            const responseJSON = await response.json()
            // update Quotes storage []
            setQuotes(responseJSON)
        } catch {
            console.log('Fetching Quotes failed!')
        }
    }

    // invoke useEffect
    // useEffect is a callback after your component renders, function
    useEffect( () => {
        // call fetchMusic to fill quote[]
        fetchQuotes()
    }, [])// Second parameter of useEffect must match useState() parameter


    return(
        <div>
            <h1>Quotes:</h1>
            <table>
                <tr>
                    <td>Quote</td>
                    <td>Author</td>
                </tr>
                {quotes.map((quote) => {
                return <tr>
                        <td>{quote.quote}</td>
                        <td>{quote.author}</td>
                       </tr>
            })} 
            </table>
        </div>
    )
}

export default Quotes