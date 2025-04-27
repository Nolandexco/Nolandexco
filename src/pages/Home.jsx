import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";

// Impor gambar untuk ImageSlider
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.jpg";

// Komponen Info Card (statis, gunakan React.memo)
const InfoCard = React.memo(({ title, description }) => (
  <div className="glass p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
));

// Komponen Pricing Card
const PricingCard = ({ activePkg, setActivePackage, activePackage }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="max-w-md mx-auto"
    >
      <div className="p-6 rounded-lg text-left bg-gray-800 hover:scale-105 transition-all duration-300">
        <h3 className="text-2xl font-semibold text-white mb-3">{activePkg.name}</h3>
        <p className="text-3xl font-bold text-blue-400 mb-4">{activePkg.price}</p>
        <p className="text-gray-300 mb-4">{activePkg.description}</p>
        <ul className="text-gray-400 mb-6">
          {activePkg.features.map((feature, idx) => (
            <li key={`feature-${idx}`} className="mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-blue-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href={activePkg.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-blue-700 transition-colors duration-200 mb-4"
        >
          Pesan Sekarang
        </a>
        <div className="flex gap-4">
          {activePackage === "Starter" ? (
            <>
              <button
                onClick={() => setActivePackage("Professional")}
                className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-500 transition-colors duration-200"
              >
                Website
              </button>
              <button
                onClick={() => setActivePackage("Enterprise")}
                className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-500 transition-colors duration-200"
              >
                Join Reseller
              </button>
            </>
          ) : (
            <button
              onClick={() => setActivePackage("Starter")}
              className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-500 transition-colors duration-200"
            >
              Kembali ke Starter
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Komponen Image Slider
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Daftar gambar lokal
  const images = [image1, image2, image3, image4, image5];

  // Auto slide setiap 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Ganti 3000 dengan milidetik yang diinginkan (misalnya, 5000 untuk 5 detik)

    return () => clearInterval(timer); // Bersihkan interval saat komponen unmount
  }, [images.length]);

  // Fungsi untuk geser ke kiri
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk geser ke kanan
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-3xl mx-auto mt-12">
      {/* Gambar */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 object-cover rounded-lg"
        />
      </motion.div>

      {/* Tombol geser kiri */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Tombol geser kanan */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke "currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indikator slide */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [activePackage, setActivePackage] = useState("Starter");

  // Data untuk info grid (gunakan useMemo untuk mencegah pembuatan ulang)
  const infoGridItems = useMemo(
    () => [
      {
        title: "Proven Success Rate",
        description: "Most of our users successfully launch their online businesses with NolanDex, backed by real customer success stories",
      },
      {
        title: "Fast Setup",
        description: "Full setup completed within a few working hours — fast, professional, and ready to sell.",
      },
      {
        title: "Risk-Free Guarantee",
        description: "50% money-back guarantee if your business doesn’t grow within 30 days.",
      },
    ],
    []
  );

  // Data untuk pricing packages (gunakan useMemo)
  const pricingPackages = useMemo(
    () => [
      {
        name: "Online Business Setup",
        price: "$20",
        description: "Ideal for individuals or small businesses looking to set up their online presence",
        features: [
          "Full online business setup",
          "Website",
          "Social media booster",
          "Basic chatbot integration",
        ],
        whatsappLink: "https://wa.me/6285156779923?text=Hello,%20I'm%20interested%20in%20the%20Starter%20package.%20Can%20you%20provide%20more%20details?",
      },
      {
        name: "website",
        price: "$10",
        description: "Perfect for businesses ready to establish a professional website and digital presence",
        features: [
          "E-commerce websites",
          "Portfolio websites",
          "Landing pages",
          "Membership/community websites",
          "Free domain + unlimited hosting",
        ],
        whatsappLink: "https://wa.me/6285156779923?text=Hello,%20I'm%20interested%20in%20the%20Professional%20package.%20Can%20you%20provide%20more%20details?",
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
        whatsappLink: "https://wa.me/6285156779923?text=Hello,%20I'm%20interested%20in%20the%20Enterprise%20package.%20Can%20you%20provide%20more%20details?",
      },
    ],
    []
  );

  // Paket aktif (gunakan useMemo untuk mencegah perhitungan ulang)
  const activePkg = useMemo(
    () => pricingPackages.find((pkg) => pkg.name === activePackage) || pricingPackages[0],
    [activePackage, pricingPackages]
  );

  // Animasi untuk fade-in dari bawah (section)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Fungsi untuk scroll ke section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Create <br />
            <span className="text-gray-400">You Launch and Earn</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Ready to launch your business? With our complete setup service, you can focus on growth while we handle the hard work.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("pricing")}
              className="glass px-8 py-4 text-white font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-gray-100 hover:text-black transition"
            >
              Buy Now
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {infoGridItems.map((item, index) => (
              <InfoCard key={index} title={item.title} description={item.description} />
            ))}
          </div>

          {/* Pricing Section */}
          <motion.div
            id="pricing"
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Choose Your Plan</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Clear Pricing, Big Results. Get everything you need, at the right price.
            </p>
            <PricingCard
              activePkg={activePkg}
              setActivePackage={setActivePackage}
              activePackage={activePackage}
            />

            {/* Image Slider Section */}
            <motion.div
              className="mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">what you get</h2>
              <ImageSlider />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;