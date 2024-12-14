import React from "react";
import Image from 'next/image'; // Import Image component from Next.js
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <Image
              src="/foodi.png" // Path to your image
              alt="Foodi Logo"
              width={150} // Adjust to your desired width
              height={50} // Adjust to your desired height
              className="object-contain"
            />
            <p className="text-gray-600">
              Savor the artistry where <br /> every dish is a culinary <br /> masterpiece
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 text-slate-500">
              <FaFacebook className="w-6 h-6 cursor-pointer hover:text-green-500" />
              <FaTwitter className="w-6 h-6 cursor-pointer hover:text-green-500" />
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-green-500" />
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Useful Links</h2>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-green-500">About Us</a></li>
              <li><a href="#" className="hover:text-green-500">Events</a></li>
              <li><a href="#" className="hover:text-green-500">Blogs</a></li>
              <li><a href="#" className="hover:text-green-500">FAQ</a></li>
            </ul>
          </div>

          {/* Main Menu Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Main Menu</h2>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-green-500">Home</a></li>
              <li><a href="/work" className="hover:text-green-500">Offers</a></li>
              <li><a href="#" className="hover:text-green-500">Menus</a></li>
              <li><a href="#" className="hover:text-green-500">Reservation</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
            <ul className="space-y-2 text-gray-600">
              <li><a href="mailto:example@email.com" className="hover:text-green-500">mk7275374@gmail.com</a></li>
              <li><a href="tel:+923313007384" className="hover:text-green-500">+92 331 300 7384</a></li>
              <li>Social Media
                <div className="flex space-x-4 text-green-600 mt-2">
                  <FaFacebook className="w-6 h-6 cursor-pointer hover:text-green-500" />
                  <FaTwitter className="w-6 h-6 cursor-pointer hover:text-green-500" />
                  <FaInstagram className="w-6 h-6 cursor-pointer hover:text-green-500" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
