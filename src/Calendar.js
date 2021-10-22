import React, { useState } from 'react';
import Calendar from 'react-calendar';

function myCalendar() {

  const [value, onChange] = useState(new Date());

  

  return (
    <div>
      <h1>Affirmation Calendar:</h1>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default myCalendar;