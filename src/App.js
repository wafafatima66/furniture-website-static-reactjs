import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import CompanyDescription from "./components/CompanyDescription";
import CustomerRegistration from "./components/CustomerRegistration";
import ChatBox from './components/ChatBox';

import './App.css'; // Importing CSS for styling

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <Navbar />
      
      {/* Banner Section */}
      <Banner />
      
      {/* Services Section */}
      <Services />
      
      {/* Company Description Section */}
      <CompanyDescription />

       {/* Customer Registration Section */}
       <CustomerRegistration />

      {/* ChatBox Section */}
       <ChatBox />
    </div>
  );
}

export default App;
