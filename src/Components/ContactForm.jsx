import React from "react";

const ContactForm = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#274c7c] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-[#a1aac5] border-b-4 border-blue-600 inline">
            Contact
          </p>
          <p className="text-[#a1aac5] py-4">
            Submit the form or send me an Email ramkissoon.vijay@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          id=""
          rows="10"
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 px-4 py-3 hover:bg-gray-900 hover:border-gray-900 my-8">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
