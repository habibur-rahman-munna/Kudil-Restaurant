import React, { useState, useRef } from 'react';
import axios from 'axios';
import FromBtn from '../../Components/FromBtn';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const btnText = useRef(null);

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const sendMail = async (name, email, message) => {
    const data = {
      service_id: 'service_o465rz4',
      template_id: 'template_v1xrb7g',
      user_id: '_XzBxvWgnafFvg6__',
      template_params: {
        from_name: name,
        from_email: email,
        message,
      },
    };

    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      if (btnText.current) btnText.current.innerHTML = 'Sending...';
      await sendMail(name, email, message);
      setResponseMessage('Your message was submitted successfully!');
      if (btnText.current) btnText.current.innerHTML = 'Send';
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setResponseMessage('Please enter a valid email!');
    }
  };

  return (
    <section className="bg-white text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="text-4xl mb- font-bold text-black capitalize">Contact <span className='text-yellow-500'>Us</span></h1>
          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="w-full md:w-2/3 text-left mb-4">
              <label htmlFor="name-field" className="leading-7 text-base text- font-medium text-black">Name</label>
              <input
                type="text"
                id="name-field"
                value={name}
                onChange={(e) => handleInputChange(e, setName)}
                className="w-full bg-white rounded  focus:bg-transparent border border-gray-300 focus:border-yellow-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your name"
                required/>
            </div>
            <div className="w-full md:w-2/3 text-left mb-4">
              <label htmlFor="email-field" className="leading-7 text-base text-black font-medium"> E-mail</label>
              <input
                type="email"
                id="email-field"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                className="w-full bg-white rounded focus:bg-transparent border border-gray-300 focus:border-yellow-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your email"
                required/>
            </div>
            <div className="w-full md:w-2/3 text-left mb-4">
              <label htmlFor="message-field" className="leading-7 text-base text-black font-medium">Message</label>
              <textarea
                id="message-field"
                value={message}
                onChange={(e) => handleInputChange(e, setMessage)}
                className="w-full bg-white text-black rounded focus:bg-transparent border border-gray-300 focus:border-yellow-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your message"
                required/>
            </div>
            <FromBtn ref={btnText} type="submit">Send</FromBtn>
          </form>
          {responseMessage && (
            <p className="text-white mt-4 text-base font-medium">{responseMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
