"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

// Define types for services array
interface Service {
  num: string;
  title: string;
  description: string;
  href: string;
}

// Define the services array with appropriate types
const services: Service[] = [
  {
    num: "01",
    title: "Web Development",
    description: "Build powerful, responsive websites tailored to meet your business needs. Our team delivers clean, efficient code for optimal performance and scalability.",
    href: "#",  // You can replace with actual links
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Enhance user engagement with intuitive, visually appealing designs tailored for seamless user experiences. From wireframes to prototypes, we craft user-centered interfaces that align with your brand and goals.",
    href: "#",  // You can replace with actual links
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Create a memorable brand identity with a custom logo that captures your essence. Our designs are unique, timeless, and crafted to make a lasting impression.",
    href: "#",  // You can replace with actual links
  },
  {
    num: "04",
    title: "SEO",
    description: "Boost your online visibility and drive organic traffic with tailored SEO strategies. We optimize your site to rank higher, attract the right audience, and increase conversions.",
    href: "#",  // You can replace with actual links
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* Top Section */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/60">{service.description}</p>

              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
