import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d7ku204",
        "template_6mawsls",
        e.currentTarget as HTMLFormElement,
        "2r0dLr1XPfzZurBDn"
      )
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message. Try again."));
  };

  return (
    <>
      <div
        id="Contact"
        className="flex items-center justify-center min-h-screen bg-gray-900 pl-7 pr-7 "
      >
        <form
          onSubmit={sendEmail} // Using EmailJS
          className="w-full max-w-md sm:max-w-lg bg-gray-800 p-6  sm:p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">First Name:</label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Email:</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Message:</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded"
              rows={4}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
