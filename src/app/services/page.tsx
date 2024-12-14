"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaGift } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiTimer } from "react-icons/bi";
import { LuSalad } from "react-icons/lu";
// import { useOutsideClick } from "@/components/ui/animated-model";

// Example service data
const services = [
  {
    title: "CATERING",
    description: "Delight your guests with our flavors and presentation",
    icon: <LuSalad className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />,
  },
  {
    title: "FAST DELIVERY",
    description: "We deliver your order promptly to your door",
    icon: <BiTimer className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />,
  },
  {
    title: "ONLINE ORDERING",
    description: "Explore menu & order with ease using our Online Ordering",
    icon: <RiShoppingCart2Line className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />,
  },
  {
    title: "GIFT CARDS",
    description: "Give the gift of exceptional dining with Foodi Gift Cards",
    icon: <FaGift className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />,
  },
];

const Services = () => {
  return (
    <section className="py-12 flex justify-between items-center px-20 gap-16">
      {/* Left Section */}
      <div className="max-w-lg ml-60">
        <h1 className="text-[#FF6868] mb-4 font-bold tracking-wider">OUR STORY & SERVICES</h1>
        <h2 className="font-bold text-5xl text-black mb-6 tracking-wide">
          Our Culinary Journey <br /> And Services
        </h2>
        <h3 className="text-[#555555] text-xl font-medium mb-8">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </h3>
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center text-white gap-2 bg-[#39DB4A] hover:bg-[#34c43e] border-b-2 font-semibold px-8 py-4"
        >
          <span>Explore</span>
        </Button>

      </div>

      {/* Right Section - Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mr-60">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0px_15px_25px_rgba(0,0,0,0.15)] transition-shadow duration-300"
          >
            <div className="flex items-center justify-center rounded-full bg-green-100 mb-4">
              {service.icon}
            </div>
            <h2 className="text-xl font-bold mb-2 text-center text-[#5FE26C]">{service.title}</h2>
            <p className="text-[#90BD95] text-center w-full max-w-[200px]  line-clamp-3">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
