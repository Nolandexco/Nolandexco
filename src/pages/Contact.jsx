import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-12">
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <div className="glass p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">📧 Email Us</h3>
          <p className="text-gray-300">
            Reach us at{" "}
            <a
              href="mailto:nolandexco@gmail.com"
              className="text-blue-400 hover:underline"
            >
              nolandexco@gmail.com
            </a>
          </p>
        </div>

        {/* WhatsApp */}
        <div className="glass p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">📲 WhatsApp Us</h3>
          <p className="text-gray-300">
            Chat with us on{" "}
            <a
              href="https://wa.me/6285156779923"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              WhatsApp
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="glass p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">💬 Follow Us</h3>
          <div className="flex justify-center gap-4 mt-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/nolandexco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-pink-400"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@nolandexco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-black"
            >
              <i className="fab fa-tiktok text-2xl"></i>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/nolandexco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            {/* Twitter */}
            <a
              href="https://x.com/nolandexco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/Nolandex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-400"
            >
              <i className="fab fa-telegram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="mt-12 max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg mb-24">
        <h3 className="text-xl font-semibold mb-4">📩 Send a Message</h3>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md outline-none"
          rows="5"
        ></textarea>
        <button className="glass px-6 py-3 font-semibold hover:bg-blue-500 transition rounded-md">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
