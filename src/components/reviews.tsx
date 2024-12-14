import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 p-4 md:p-8 lg:p-16">
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div className="relative">
          {/* Chef Image */}
          <Image
            src="/chef.png"
            alt="Best Chef"
            width={506} // Replace with your image's dimensions
            height={744}
            className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-md rounded-lg"
          />
          {/* Decorations */}
          <div className="absolute top-0 left-0 w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] rounded-full bg-green-300 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] bg-yellow-200 rounded-full"></div>
        </div>
        {/* Badge */}
        <div className="absolute bottom-2 bg-white shadow-md px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
          Our Best Chef 😁
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-red-500 font-bold text-sm sm:text-lg tracking-widest uppercase mb-2">
          Testimonials
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
          What Our Customers <br className="hidden lg:block" /> Say About Us
        </h2>
        <p className="text-[#555555] mb-6 leading-relaxed font-medium text-sm sm:text-base lg:text-2xl">
          “I had the pleasure of dining at Foodi last night, and <br className="hidden sm:block" />
          I am still raving about the experience! The attention to <br className="hidden sm:block" />
          detail in presentation and service was impeccable.”
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          {/* User Avatars */}
          <div className="flex -space-x-2">
            <Image
              src="/user1.png"
              alt="User 1"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
            />
            <Image
              src="/user2.png"
              alt="User 2"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
            />
            <Image
              src="/user3.png"
              alt="User 3"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
            />
          </div>
          {/* Rating */}
          <div>
            <p className="font-bold text-gray-800 text-base sm:text-xl">
              Customer Feedback
            </p>
            <p className="text-sm sm:text-lg text-gray-400 font-medium">
              <span className="text-[#454545] font-semibold">⭐ 4.9</span> (18.6k Reviews)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
