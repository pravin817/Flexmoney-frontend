import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Images/Hero6.png";

const Home = () => {
  return (
    <div className="">
      <div className="flex h-5/6 items-center justify-between ml-20">
        {/* left side */}
        <div className="flex flex-col">
          <h3 className="text-4xl font-bold mb-8">
            Yoga is the perfect opportunity <br /> to be curious about <br />{" "}
            who you are.
          </h3>

          <p className="text-gray-700 text-lg mb-8">
            Yoga is a great way to work on your flexibility and strength. <br />{" "}
            Just about everyone can do it.
          </p>

          <div className="space-x-4">
          <Link 
          to="/admission">

            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Join Us
            </button>
          </Link>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">
              Know More
            </button>
          </div>
        </div>
        {/* img */}
        <div className="w-3/6">
          <img
            src={Hero}
            alt="Heroimage"
            className=" h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
