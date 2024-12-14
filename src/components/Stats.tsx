"use client";

import CountUp from "react-countup";

// Define the type for items in the `stats` array
type StatItem = {
  num: number;
  text: string;
};

// Define the stats array with the correct type
const stats: StatItem[] = [
  {
    num: 2,
    text: "Year of experience",
  },
  {
    num: 5,
    text: "Projects completed",
  },
  {
    num: 10,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 mx-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start text-black"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 20 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/88`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
