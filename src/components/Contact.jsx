import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/964037a7-81da-46cd-ae68-e211fe59875e"
        className="flex flex-col max-w-[600px] w-full p-5"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-2">
            Submit the form below or shoot me an email at- jraza3363@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="bg-[#ccd6f6] p-2 mb-2 mt-2"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="bg-[#ccd6f6] p-2 mb-2"
          type="tel"
          placeholder="+92 307 3450411"
          name="phone"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 mb-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 p-2 my-4 mx-auto flex items-center">
          Let's Collaborate
        </button>
        <hr className="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <p className="text-gray-300 text-sm flex justify-center mb-3">
          @Copyright 2024 All rights resrved || Made with React.js by M Jawwad Raza
          </p>
      </form>
    </div>
  )
}

export default Contact