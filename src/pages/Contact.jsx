import React from "react";

function Contact() {
  return (
    <>
      <section className="pt-24 px-6">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Us */}
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

          {/* WhatsApp Us */}
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

          {/* Follow Us */}
          <div className="glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">💬 Follow Us</h3>
            <div className="flex justify-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/nolandexco?igsh=NHBqczF1a2dvbXA5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                {/* Instagram Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301..."/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324z"/>
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@nolandexco?_t=ZS-8vtLBkk9WAE&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.245V2h-3.445v13.672..."/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/nolandexco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0..."/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/nolandexco?t=uSxJhqbQHM-gA04NvOmX6w&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17..."/>
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Nolandex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12..."/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
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
          />
          <button
            type="submit"
            className="glass px-6 py-3 font-semibold hover:bg-blue-500 transition rounded-md"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
