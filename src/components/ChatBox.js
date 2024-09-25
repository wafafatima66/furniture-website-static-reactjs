import React, { useState } from 'react';
import './ChatBox.css';

const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [response, setResponse] = useState('Click the button below to start chatting!');
  
    const handleOptionClick = (answer) => {
      setResponse(answer);
    };
  
    return (
      <div className="chatbox-container">
        <button className="chatbox-toggle" onClick={() => setIsOpen(!isOpen)}>
          💬 Chat Support
        </button>
        {isOpen && (
          <div className="chatbox-content">
            <div className="chatbox-header">
              <h4>Chat Support</h4>
            </div>
            <div className="chatbox-options">
              <button className="chat-option" onClick={() => handleOptionClick('Your order is being processed.')}>
                Order Status
              </button>
              <button className="chat-option" onClick={() => handleOptionClick('Priority changed successfully.')}>
                Change Priority
              </button>
              <button className="chat-option" onClick={() => handleOptionClick('Available from next week.')}>
                Availability Date
              </button>
            </div>
            <div className="chatbox-response">
              <p>{response}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

export default ChatBox;
