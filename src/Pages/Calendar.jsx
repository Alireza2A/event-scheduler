import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MainLayout from '../layouts/MainLayout';
import './MyCalendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-start pt-8">
        <h2 className="text-4xl font-cabin font-bold text-green-800 mb-8">My Calendar</h2>
        <div className="shadow-lg rounded-lg">
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="custom-calendar"
          />
        </div>
        <p className="text-lg mt-4 text-gray-700">
          Selected Date: <span className="font-bold">{date.toDateString()}</span>
        </p>
      </div>
    </MainLayout>
  );
};

export default MyCalendar;