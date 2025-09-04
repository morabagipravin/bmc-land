// import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-[91vh] bg-gradient-to-br from-lavender via-sky/20 to-mint/30 py-20 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:mt-24">
          <h1 className="text-4xl md:text-6xl font-playful text-coral mb-6 leading-tight drop-shadow-sm">
            Transforming Early Years
            <span className="text-mint block">Development</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/contact#freetrail"
              className="bg-coral text-white px-8 py-4 rounded-full hover:bg-sunshine hover:text-coral transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold shadow-lg"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            {/* <button
              className="border-4 border-coral px-8 py-4 rounded-full hover:bg-white text-coral transition-all duration-300 text-lg font-bold shadow-lg"
              onClick={() =>
                window.open(
                  "https://youtu.be/W_bcZTgjomE?si=a8_M33GT5F7OGi0c",
                  "_blank"
                )
              }
            >
              Watch Demo
            </button> */}

            <button className="flex items-center space-x-2 text-gray-700 hover:text-mint transition-colors text-lg font-semibold"
              onClick={() => window.open('https://youtu.be/W_bcZTgjomE?si=a8_M33GT5F7OGi0c', '_blank')}>
              <div className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-mint">
                <Play className="h-6 w-6 text-coral" />
              </div>
              <span >Watch Demo</span>
            </button>
          </div>


          <div className="hero-image">
            <img
              className="w-full rounded-3xl shadow-2xl"
              src="/hero_image_coloredHands.jpg"
              alt="Hero Image"
            />
          </div>

          <div className="grid [@media(max-width:500px)]:grid-cols-1 md:grid-cols-3 gap-2 mt-4">
            <div className="text-center">
              <div className="text-3xl font-playful text-coral mb-2">
                10000+
              </div>
              <div className="text-gray-700 font-semibold">
                Happy Little Learners
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playful text-mint mb-2">50+</div>
              <div className="text-gray-700 font-semibold">
                Preschools Using SAM
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-playful text-lime-600 mb-2">
                95%
              </div>
              <div className="text-gray-700 font-semibold">
                Parent Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
