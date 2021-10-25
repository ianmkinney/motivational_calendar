import React from 'react'
import Calendar from 'react-calendar';

class myCalendar extends React.Component {
  state = {
    date:new Date(),
    quote: "",
    author: ""
  };

  handleClick = async (d) => {
    const response = await fetch("http://localhost:3000/getMotivation")
    const responseJSON = await response.json()
    console.log(responseJSON.quote)
    this.setState({
      date:d,
      quote:responseJSON.quote,
      author:responseJSON.author
    })
  }

  render() {
    return (
      <div>
        <h1>Motivational Calendar</h1>
        <p>Selected date: {this.state.date.toDateString()}</p>
        <p>{this.state.quote}</p>
        <p>- {this.state.author}</p>
        <Calendar onClickDay={this.handleClick}/>
      </div>
    );
  }
}

export default myCalendar;