import React from "react";
import Header from "../buyers/Header";

function Aboutus() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/about.png')" }}
    >
      {/* Tint overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground content */}
      <div className="relative z-10 text-gray-800">
        <Header />

        <div className="max-w-5xl mx-auto px-6 py-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl my-10">
          {/* Title Section */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-blue-400 mb-3">
              🏢 About Us
            </h2>
            <p className="text-lg font-medium text-gray-600">
              Welcome to{" "}
              <span className="text-blue-600 font-semibold">ServiceLink</span>
            </p>
            {/* <img
              src="/images/about-us.jpg"
              alt="About ServiceLink"
              className="w-full md:w-2/3 mx-auto rounded-2xl shadow-lg mt-6"
            /> */}
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-8">
            Since 2013, ServiceLink has been your trusted destination for
            connecting with reliable service providers across IT and Non-IT
            domains. For over a decade, we’ve been helping individuals and
            businesses find the right professionals — whether it’s building a
            website, launching a digital marketing campaign, managing data, or
            availing expert consulting, creative, or wellness services.
          </p>

          <p className="text-lg leading-relaxed mb-12">
            At ServiceLink, we believe in simplifying access to quality
            services. Our platform brings together skilled sellers and smart
            buyers, ensuring seamless communication, transparent transactions,
            and dependable results.
          </p>

          {/* Mission */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              💡 Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              To empower people and businesses by bridging the gap between
              service seekers and providers through a simple, secure, and
              efficient digital platform.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              🌍 Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              To become a leading global marketplace where anyone can find
              trusted professionals for any service, anytime, anywhere.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              🔧 What We Offer
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
              <li>
                <span className="font-semibold text-blue-600">
                  IT Services:
                </span>{" "}
                Web Development, App Solutions, IT Consulting, Data Analytics,
                and more.
              </li>
              <li>
                <span className="font-semibold text-blue-600">
                  Non-IT Services:
                </span>{" "}
                Content Creation, Online Education, Health & Wellness, Event
                Planning, and more.
              </li>
              <li>
                <span className="font-semibold text-blue-600">
                  User-Friendly Portal:
                </span>{" "}
                Easy login, service selection, and profile management for buyers
                and sellers.
              </li>
              <li>
                <span className="font-semibold text-blue-600">
                  Secure Experience:
                </span>{" "}
                Your information stays safe, and your satisfaction remains our
                top priority.
              </li>
            </ul>
          </div>

          {/* Closing Note */}
          <p className="text-lg leading-relaxed text-gray-700 bg-blue-50 p-6 rounded-xl shadow-sm">
            Since 2013, thousands of users have trusted us to make their
            personal and professional lives easier — one service at a time.{" "}
            <br />
            <span className="font-semibold text-blue-600">
              Join us today
            </span>{" "}
            and experience how simple it can be to find the right service, at
            the right time, in the right place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
