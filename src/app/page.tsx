import Image from "next/image";
import { Button } from "@/components/ui/moving-border";

// components
import CategoryGrid from "@/components/Categories";
import SpecialDish from "@/components/Special";
import TestimonialSection from "@/components/reviews";
import Services from "./services/page";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none font-bold mt-10">
            <h1 className="h1 mb-6 text-black xl:text-6xl ml-28">
              Dive into Delights <br /> Of Delectable{" "}
              <span className="text-[#39DB4A]">Food</span>
            </h1>
            <p className="mx-w-[500px] mb-9 text-[#4A4A4A] font-medium text-2xl ml-28">
              Where Each Plate Weaves a Story of Culinary <br /> Mastery and
              Passionate Craftsmanship
            </p>
            {/* Button */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ml-28">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 bg-[#39DB4A]"
              >
                <span>Order Now</span>
              </Button>
            </div>
          </div>

          {/* Photo Section */}
          <div>
            <Image
              src="/girl.jpg"
              alt="Person with food"
              width={650}
              height={500} // Provide a suitable height for the image
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Components */}
      <CategoryGrid />
      <SpecialDish />
      <TestimonialSection />
      <Services />
    </section>
  );
};

export default Home;
