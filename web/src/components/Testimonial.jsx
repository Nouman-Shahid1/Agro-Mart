'use client'
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            company: "Tech Solutions",
            testimonial: "This service exceeded my expectations! The team was highly professional, and their attention to detail was remarkable.",

        },
        {
            id: 2,
            name: "Jane Smith",
            designation: "Marketing Manager",
            company: "Creative Agency",
            testimonial: "Working with this company was a game-changer. Their innovative approach and prompt delivery stood out!",

        },
        {
            id: 3,
            name: "Michael Brown",
            designation: "Entrepreneur",
            company: "Startup Co.",
            testimonial: "I highly recommend their services! They truly understood our needs and delivered beyond our expectations.",

        },
        {
            id: 4,
            name: "Sarah Wilson",
            designation: "HR Manager",
            company: "Global Corp.",
            testimonial: "The level of expertise and commitment demonstrated was truly outstanding. A great experience overall!",

        },
        {
            id: 5,
            name: "David Lee",
            designation: "Freelancer",
            company: "Self-Employed",
            testimonial: "Amazing experience! The quality of work and the professional communication were top-notch.",

        },
    ];


    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            
            <div className="flex items-center flex-col justify-center py-8 bg-gray-100">
            <div className="w-full text-center">
                <p className="font-bold text-3xl text-[#017d29] py-6 ">Testimonails </p>
            </div>  
                <div className="relative w-full md:w-[80%] h-[350px] bg-white shadow-lg rounded-md overflow-hidden">
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition"
                    >
                        <FaChevronLeft size={24} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition"
                    >
                        <FaChevronRight size={24} />
                    </button>
                    <div className="flex items-center justify-center w-full h-full text-center px-4">
                        <div className="border border-green-700 w-[80%] flex flex-col justify-center items-center h-[80%] rounded-lg">
                            <p className="text-2xl font-bold">
                                {testimonials[currentIndex].name}
                            </p>
                            <p className="font-bold text-xl ">
                                {testimonials[currentIndex].designation}
                            </p>
                            <p>
                                {testimonials[currentIndex].testimonial}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Testimonial;
