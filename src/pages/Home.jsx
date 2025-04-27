import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

// Import images for the slider
import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import feature5 from "../assets/images/feature5.jpg";

// Komponen ImageSlider (updated to use images instead of text)
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const contents = [
    { title: "Feature 1", image: feature1 },
    { title: "Feature 2", image: feature2 },
    { title: "Feature 3", image: feature3 },
    { title: "Feature 4", image: feature4 },
    { title: "Feature 5", image: feature5 },
  ];

  // Simulasi loading selama 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? contents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-3xl mx-auto mt-12">
      <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center bg-gray-700"
          >
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-2">{contents[currentIndex].title}</h3>
              <img
                src={contents[currentIndex].image}
                alt={contents[currentIndex].title}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          </motion.div>
        )}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {contents.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-blue-500" : "bg-gray-500"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Komponen InfoCard
const InfoCard = ({ title, description }) => (
  <div className="bg-gray-800 p-6/jsx
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

// Import images for the slider
import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import feature5 from "../assets/images/feature5.jpg";

// Komponen ImageSlider (updated to use images instead of text)
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const contents = [
    { title: "Feature 1", image: feature1 },
    { title: "Feature 2", image: feature2 },
    { title: "Feature 3", image: feature3 },
    { title: "Feature 4", image: feature4 },
    { title: "Feature 5", image: feature5 },
  ];

  // Simulasi loading selama 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? contents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-3xl mx-auto mt-12">
      <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center bg-gray-700"
          >
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-2">{contents[currentIndex].title}</h3>
              <img
                src={contents[currentIndex].image}
                alt={contents[currentIndex].title}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          </motion.div>
        )}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {contents.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-blue-500" : "bg-gray-500"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Komponen InfoCard
const InfoCard = ({ title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Komponen PricingCard (revised for smaller price, button styling, and minimalistic package buttons)
const PricingCard = ({ activePkg, setActivePackage, activePackage }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-3">{activePkg.name}</h3>
    <p className="text-2xl font-semibold mb-3">{activePkg.price}</p> {/* Reduced price size */}
    <p className="text-gray-400 text-sm mb-4">{activePkg.description}</p> {/* Smaller description text */}
    <ul className="mb-4 text-sm">
      {activePkg.features.map((feature, index) => (
        <li key={index} className="text-gray-300 mb-1">✔ {feature}</li>
      ))}
    </ul>
    <a
      href={activePkg.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-blue-500 text-white py-2 px-6 rounded-tl-[16px] rounded-br-[16px] hover:bg-blue-600 transition glass text-sm font-semibold"
    >
      Buy
    </a>
    <div className="flex justify-center gap-2 mt-3">
      {["Online Business Setup", "Website", "Join Reseller"].map((pkg) => (
        <button
          key={pkg}
          onClick={() => setActivePackage(pkg)}
          className={`px-3 py-1 text-xs rounded-md ${
            activePackage === pkg ? "bg-blue-500" : "bg-gray-700"
          } hover:bg-blue-600 transition`}
        >
          {pkg}
        </button>
      ))}
    </div>
  </div>
);

// Komponen Home
const Home = () => {
  const [activePackage, setActivePackage] = useState("Online Business Setup");

  const infoGridItems = useMemo(
    () => [
      {
        title: "Proven Success Rate",
        description:
          "Most of our users successfully launch their online businesses with NolanDex, backed by real customer success stories",
      },
      {
        title: "Fast Setup",
        description: "Full setup completed within a few working hours — fast, professional, and ready to sell.",
      },
      {
        title: "Risk-Free Guarantee",
        description: "50% money-back guarantee if your business doesn't grow within 30 days.",
      },
    ],
    []
  );

  const pricingPackages = useMemo(
    () => [
      {
        name: "Online Business Setup",
        price: "$20",
        description: "Ideal for individuals or small businesses looking to set up their online presence",
        features: ["Full online business setup", "Website", "Social media booster", "Basic chatbot integration"],
        whatsappLink:
          "https://wa.me/6285156779923?text=Hello,%20I'm%20interested%20in%20the%20Starter%20package.%20Can%20you%20provide%20more%20details?",
      },
      {
        name: "Website",
        price: "$10",
        description: "Perfect for businesses ready to establish a professional website and digital presence",
        features: [
          "E-commerce websites",
          "Portfolio websites",
          "Landing pages",
          "Membership/community websites",
          "Free domain + unlimited hosting",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Hello,%20I'm%20interested%20in%20the%20Professional%20package.%20Can%20you%20provide%20more%20details?",
      },
      {
        name: "Join Reseller",
        price: "$0",
        description: "For businesses ready to expand with no upfront cost.",
        features: [
          "Everything in Professional",
          "Full support until you get your first customer",
          "Reseller program integration (Free)",
          "Access to exclusive marketing resources and tools",
        ],
        whatsappLink:
          "https://wa.me/6285156779923?text=Hello,%20I'm%20interested%20in%20the%20Enterprise%20package.%20Can%20you%20provide%20more%20details?",
      },
    ],
    []
  );

  const activePkg = useMemo(
    () => pricingPackages.find((pkg) => pkg.name === activePackage) || pricingPackages[0],
    [activePackage, pricingPackages]
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Create <br />
            <span className="text-gray-400">You Launch and Earn</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Ready to launch your business? With our complete setup service, you can focus on growth while we handle the hard
            work.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("pricing")}
              className="glass px-8 py-4 text-white font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-gray-100 hover:text-black transition"
            >
              Buy Now
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {infoGridItems.map((item, index) => (
              <InfoCard key={`info-${index}`} title={item.title} description={item.description} />
            ))}
          </div>
          <motion.div
            id="pricing"
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Choose Your Plan</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Clear Pricing, Big Results. Get everything you need, at the right price.
            </p>
            <PricingCard activePkg={activePkg} setActivePackage={setActivePackage} activePackage={activePackage} />
          </motion.div>
          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What You Get</h2>
            <ImageSlider />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
