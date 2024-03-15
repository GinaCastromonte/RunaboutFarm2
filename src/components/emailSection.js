"use client";
import axios from "axios";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const [emailForm, setEmailForm] = useState({
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/send`;
      await axios.post(emailURL, emailForm);
      setEmailSubmitted(true);
      setEmailForm({
        email: "",
        subject: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form id="emailForm" className="flex flex-col z-10 w-full max-w-md mx-auto">
      <div className="mb-6">
        <label
          for="email"
          className="text-white block mb-2 text-sm font-medium"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={emailForm.email}
          required
          className=" placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
          placeholder="john@google.com"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="phone"
          className="text-white block mb-2 text-sm font-medium"
        >
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={emailForm.phone}
          required
          className="placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
          placeholder="123-456-7890"
        />
      </div>
      <div className="mb-6">
        <label
          for="subject"
          className="text-white block text-sm mb-2 font-medium"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          onChange={handleChange}
          name="subject"
          value={emailForm.subject}
          required
          className=" placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
          placeholder="I'm interested in booking a party!"
        />
      </div>
      <div className="mb-6">
        <label
          for="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          name="message"
          onChange={handleChange}
          value={emailForm.message}
          id="message"
          className=" placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
          placeholder="Leave your message here..."
        ></textarea>
      </div>
      <button
        type="submit"
        id="submitButton"
        onClick={handleSubmit}
        className=" bg-white text-gray font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Send Message
      </button>
      {emailSubmitted && (
        <p id="successMessage" className="text-white text-sm mt-2">
          Email sent successfully!
        </p>
      )}
    </form>
  );
};

export default EmailSection;
