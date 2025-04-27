// src/pages/Contact.jsx

import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-6 rounded-lg">
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
          <div className="glass p-6 rounded-lg">
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
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">💬 Follow Us</h3>
            <div className="flex justify-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/nolandexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm5 5c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm6.5-1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@nolandexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2v14.5a3.5 3.5 0 11-3.5-3.5h.5V9h2v4h1V2h2z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/nolandexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.2 8.5 9.9v-7H8v-2.9h2.5V9.5c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7h2.7l-.4 2.9h-2.3v7c4.8-.7 8.5-4.9 8.5-9.9z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/nolandexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 2 11 13l9 9H15l-9-9 9-9z" />
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/Nolandex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.3 17.6l-.4 4.1c.6 0 .9-.2 1.3-.6l2.7-2.5 5.6 4.1c1 .7 1.7.3 2-1l3.7-17.5c.4-1.9-.7-2.7-2-2.2L2.6 9.5c-1.8.7-1.8 1.7-.3 2.1l5.8 1.8L20.2 5.4c.4-.2.8 0 .6.3L9.3 17.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

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
      </div>
    </section>
  );
              }
