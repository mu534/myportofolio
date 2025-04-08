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
    <div
      id="Contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4 md:p-6"
    >
      <form
        onSubmit={sendEmail}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
          Get in Touch
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full px-3 py-2 bg-gray-700/50 text-white border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-300"
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 bg-gray-700/50 text-white border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-300"
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              className="w-full px-3 py-2 bg-gray-700/50 text-white border border-gray-600 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all duration-300 resize-y"
              rows={4}
              onChange={handleChange}
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
