import React from 'react';
import './CustomerRegistration.css';

const CustomerRegistration = () => {
  return (
    <div className="registration">
        <div className="registration-container">
        <h2>Customer Registration</h2>
        <form className="registration-form">
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Feedback" required />

            {/* {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="question">
                <label>{`Question ${index + 1}`}</label>
                <select className='answer-select'>
                {Array.from({ length: 5 }, (_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                ))}
                </select>
            </div>
            ))} */}

<div className="question">
        <label>How was your interaction with Chatbot</label>
        <select className='answer-select'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="question">
        <label>Was Your contact field fulfilled ? </label>
        <select className='answer-select'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="question">
        <label>How will you recommend our business ? </label>
        <select className='answer-select'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="question">
        <label>Question 4</label>
        <select className='answer-select'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="question">
        <label>Question 5</label>
        <select className='answer-select'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>


            <textarea placeholder="Additional Comments" />

            <button type="submit" className="submit-button">Submit</button>
        </form>
        </div>
    </div>
  );
};

export default CustomerRegistration;
