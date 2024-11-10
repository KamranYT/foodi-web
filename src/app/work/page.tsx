"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsGithub, BsArrowUpRight } from 'react-icons/bs';
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";

interface Project {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: { name: string }[];
    image: string;
    live: string;
    github: string;
}

const projects: Project[] = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description:
            "Developed a responsive and dynamic frontend project using modern web technologies, including React and Tailwind CSS. Implemented a clean, user-friendly interface to enhance user interaction and experience. Leveraged reusable components and optimized performance for seamless browsing across all devices.",
        stack: [{ name: "Html 5" }, { name: "css 3" }, { name: "Javascript" }],
        image: "/assets/work/thumb.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description:
            "Built a full-stack web application using React, Node.js, and MongoDB, integrating both frontend and backend functionalities for a seamless user experience. Designed a responsive and intuitive UI while implementing robust API endpoints for efficient data management. Focused on scalability, security, and performance optimization to deliver a reliable solution across all devices",
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "frontend",
        title: "project 3",
        description:
            "Created a dynamic and responsive frontend project with Next.js and Tailwind CSS, focusing on fast loading times and smooth navigation. Designed an engaging user interface that adapts seamlessly to different screen sizes, ensuring a consistent experience across devices. Utilized Next.js's server-side rendering for optimized performance and improved SEO.",
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
        image: "/assets/work/thumb2.png",
        live: "",
        github: "",
    },
];

const Work: React.FC = () => {
    const [project, setProject] = useState<Project>(projects[0]);

    const handleSlideChange = (swiper: SwiperType) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-6">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                alt={project.title}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns
    containerStyles="flex gap-2 absolute right-0 bottom=[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
    btnStyles="bg-accent hover:bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
    iconsStyle="your-icon-style-here" // Add the required iconsStyle prop
/>

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
