"use client";
import React from "react";
import bgAbout from "../../Assets/images/farm2-about.jpg";
import Navbar from "@/Components/Navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#2d4838] bg-repeat text-white">
        <div className=" flex md:flex-row flex-col   gap-10 items-center ">
          <div className="w-full md:w-1/2 md:text-left text-center  ">
            <h1 className=" lg:text-6xl sm:text-3xl text-2xl  text-green-600 font-bold">
              It is very important to take care of the pain, and the growth of
              the patient will be followed.
            </h1>
            <button className="text-white bg-green-600 hover:bg-green-500 pl-14 pr-14 p-3 mt-10">
              Read more
            </button>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              className="w-full max-w-sm sm:max-w-md md:max-w-full "
              src={bgAbout.src}
              alt="about"
            />
          </div>
        </div>
        <div>
          <h1 className="text-center  text-white  mt-96 mb-14 font-serif text-5xl">
            Meet our team
          </h1>
        </div>
      </div>
      {/* Cards */}
      <div className="flex justify-center items-center gap-8 ">
        <div className="w-[350px] h-[500px] flex justify-center items-center text-center flex-col bg-[#1a2f22]">
          <h1 className="font-bold text-4xl font-serif text-white">
            Carl <br />
            Rossman
          </h1>
          <img
            className="w-[150px] h-[150px] rounded-[50%] mt-10"
            src={bgAbout.src}
            alt="2nd profile"
          />
          <p className="p-10 text-gray-400 text-center">
            Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus,
            eleifend mi vel, maximus justo.
          </p>
        </div>
        <div className="w-[350px] h-[500px] flex justify-center items-center text-center flex-col bg-[#2d4838]">
          <h1 className=" text-center font-bold text-4xl font-serif text-white">
            Carl <br /> Rossman
          </h1>
          <img
            className="w-[150px] h-[150px] rounded-[50%] mt-10 "
            src={bgAbout.src}
            alt="2nd profile"
          />
          <p className="p-10 text-gray-400 text-center">
            Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus,
            eleifend mi vel, maximus justo.
          </p>
        </div>
        <div className="w-[350px] h-[500px] flex justify-center items-center text-center flex-col bg-[#2d4838]">
          <h1 className="font-bold text-4xl font-serif text-white">
            Carl <br /> Rossman
          </h1>
          <img
            className="w-[150px] h-[150px] rounded-[50%] mt-10"
            src={bgAbout.src}
            alt="2nd profile"
          />
          <p className="p-10 text-gray-400 text-center">
            Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus,
            eleifend mi vel, maximus justo.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-center mt-24 text-4xl font-bold font-serif ">
        <h1 className="w-1/2 ">
          In order to finance members. Some ecological element
        </h1>
      </div>
      {/* small cards */}
      <div className="w-full flex justify-center bg-slate-300">
        <div className="w-[80%] bg-slate-300 flex flex-wrap gap-6 justify-center items-center mt-14 space-y-5">
          <div className="flex justify-center items-center ">
            <div>
              {" "}
              <img
                className="w-[70x] h-[70px]"
                src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon1.png"
                alt="Butter logo"
              />
            </div>
            <div className="w-[300px] p-6 space-y-4 flex flex-col justify-center items-center">
              <h1 className="text-xl font-serif font-bold text-black">
                Lorem ipsum
              </h1>
              <p className="text-black text-center">
                Lorem ipsum dolor sit amet, consing eli do eiod.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div>
              {" "}
              <img
                className="w-[70x] h-[70px]"
                src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon2.png"
                alt="Butter logo"
              />
            </div>
            <div className="w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
              <h1 className="text-xl font-serif text-black font-bold">
                Velit esse
              </h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consing eli do eiod.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div>
              {" "}
              <img
                className="w-[70x] h-[70px]"
                src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon3.png"
                alt="Butter logo"
              />
            </div>
            <div className=" w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
              <h1 className="text-xl font-serif text-black font-bold">
                Voluptate
              </h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consing eli do eiod.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div>
              {" "}
              <img
                className="w-[70x] h-[70px]"
                src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon4.png"
                alt="Butter logo"
              />
            </div>
            <div className="w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
              <h1 className="text-xl font-serif text-black font-bold">
                Aliquam erat
              </h1>
              <p className="text-black text-center">
                Lorem ipsum dolor sit amet, consing eli do eiod.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div>
              {" "}
              <img
                className="w-[70x] h-[70px]"
                src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon5.png"
                alt="Butter logo"
              />
            </div>
            <div className="w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
              <h1 className="text-xl font-serif text-black font-bold">
                Hendrerit nulla
              </h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consing eli do eiod.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div>
              {" "}
              <img
                className="w-[70x] h-[70px]"
                src="https://themes.muffingroup.com/be/farm2/wp-content/uploads/2020/12/farm2-home-icon6.png"
                alt="Butter logo"
              />
            </div>
            <div className="w-[300px] p-6 text-center space-y-4 flex flex-col justify-center items-center">
              <h1 className="text-xl font-serif text-black font-bold">
                Curabitur
              </h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consing eli do eiod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
