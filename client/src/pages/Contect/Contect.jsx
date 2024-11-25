import React, { useState } from "react";
import "./Contect.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

const Contect = () => {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    regarding: '',
    news: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContact = () => {
    axios
      .post('http://localhost:3001/contact', formdata)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        // Handle the response, e.g., display a success message
      })
      .catch((error) => {
        console.error('Error sending data:', error);
        // Handle error, e.g., display an error message
      });
  };

  return (
    <>
      <Navbar />
      <div id="above">
        <div id="outerContainer">
          <div id="innerone">
            <p>/ Write to us /</p>
            <div id="loo">
              <h1>
                We are here for you<br></br>and will be happy to<br></br>answer
                your<br></br>questions.{" "}
              </h1>
            </div>
            <p>
              we look forward to hearing from you! Whether you want to use our
              <br></br> contact form or call us directly
            </p>

            <div id="smallcontainers">
              <div id="one">
                <h2>Yes Lisa</h2>
                <p>+435572 432002</p>
              </div>
              <div id="two">
                <h2>E-mail</h2>
                <p>office@keey.ai</p>
              </div>
            </div>

            <div id="smallcontainers">
              <div id="one">
                <h2>Human Dejan</h2>
                <p>+43 6763490699</p>
              </div>
              <div id="two">
                <h2>KEY Studio</h2>
                <p>
                  Lochau 6911<br></br>
                  Hörbranzer Straße 1
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="formcontainer">
          <h2>Contact Us</h2>
          <p>Your information, our expertise</p>
          <div id="inputs">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formdata.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formdata.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="regarding"
              placeholder="Regarding"
              value={formdata.regarding}
              onChange={handleInputChange}
            />
            <input
              id="lasti"
              type="text"
              name="news"
              placeholder="News"
              value={formdata.news}
              onChange={handleInputChange}
            />
          </div>
          <div id="buttoner">
            <button onClick={handleContact}>Make Contact</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contect;
