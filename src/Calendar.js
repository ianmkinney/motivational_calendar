import { id } from 'postcss-selector-parser';
import React from 'react'
import Calendar from 'react-calendar';

class myCalendar extends React.Component {
  
  state = {
    date:new Date(),
    quote: "",
    author: "",
    id: 0
  };

  handleClick = async (d) => {
    const response = await fetch("http://localhost:3000/getMotivation")
    const responseJSON = await response.json()
    console.log(responseJSON.quote)
    this.setState({
      date:d,
      quote:responseJSON.quote,
      author:responseJSON.author,
      id: responseJSON.id
    })
    console.log("QUOTE ID",this.state.id)
  }

//This does not work yet
  favButton = async (e) =>{
  
    e.preventDefault()

    console.log("FAV BUTTON QUOTE ID",this.state.id)
    console.log("What is this", e)

    const response = await fetch('http://localhost:3000/motivation/:id', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(e)
    }).then((res)=>{
      console.log(res)
      alert(`Quote has been added to favorites`)
    })
  }

  
  
  render() {
    return (
      <div>
        <h1>Motivational Calendar</h1>
        <p>Selected date: {this.state.date.toDateString()}</p>
        <button  onClick={this.favButton}>
            Favorite Quote
        </button>
        <p>{this.state.quote}</p>
        <p>- {this.state.author}</p>
        <Calendar onClickDay={this.handleClick}/>
      </div>
    );
  }
}

export default myCalendar;