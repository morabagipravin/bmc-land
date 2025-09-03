import React from "react";
// import { Link } from "react-router-dom";
import childrenImg from "/children-playing.jpg";
import Footer from "./Footer";

const AboutUs: React.FC = () => {
  return (
    <div>
      {/* About Section */}
      <section className="py-12 bg-gradient-to-br from-lavender via-sky/20 to-mint/30 text-gray-700 font-semibold">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 items-start">
          {/* About Text */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold border-l-4 border-coral pl-3 mb-4">
                <span className="text-coral">About</span> Us
              </h2>
              <p className="text-gray-700 mb-4">
                Boostmychild is India's fastest growing online parenting & child
                development App and platform for early childhood (Ages 0 to 6).
                It is developed by a team of leading child psychologists,
                paediatricians and early childhood educators with decades of
                experience.
              </p>
              <p className="text-gray-700">
                Boostmychild has been conceptualized with an objective of
                promoting natural abilities with an all-rounded development
                approach in next generation children. Good Parenting and the
                right encouragement in the early years builds a foundation for
                success.
              </p>
            </div>
          </div>

          {/* About Image */}
          <div>
            <img
              src= {childrenImg}
              alt="About BoostMyChild"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Our Story & What We Do */}
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 mt-12">
          {/* Our Story */}
          <div>
            <h3 className="text-2xl font-bold border-l-4 border-mint pl-3 mb-4">
              <span className="text-mint">Our</span> Story
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Early childhood years are the most important years in a child’s
                life. More than 80% of the brain develops in these years. They
                are called the foundation years and are responsible for shaping
                a child’s future.
              </p>
              <p>
                Each child is unique with different skills and abilities. A
                child succeeds most when areas of interest and natural ability
                are identified and encouraged early in life.
              </p>
              <p>
                However, how much do we learn about one of our most important
                responsibilities? How to be a good parent and raise a happy and
                successful child?
              </p>
              <p>
                Parents today are actively seeking guidance on dos and don’ts,
                suitable activities, learning aids, toys, and how to handle
                different situations. Boostmychild caters to all these parental
                needs and more.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-2xl font-bold border-l-4 border-lime-600 pl-3 mb-4">
              <span className="text-lime-600">What</span> We Do
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Boostmychild App helps parents raise their child better in the
                foundation years. It generates a child’s development profile in
                6 categories and 20+ development areas.
              </p>
              <p>
                Based on this profile, customized recommendations are shared
                weekly throughout the year — including parenting guidelines,
                parent-child activities, worksheets, suitable hobby areas, and
                toolkits.
              </p>
              <p>
                A progress tracker maps the child’s development over the years,
                helping parents encourage and monitor their child’s growth while
                becoming better parents themselves.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
