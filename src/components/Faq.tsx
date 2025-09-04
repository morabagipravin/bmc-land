import React from "react";
import Footer from "./Footer";

const Faq = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-lavender via-sky/20 to-mint/30 text-gray-600 font-semibold">
      {/* Main content should grow */}
      <section
        id="privacy"
        className="privacy_section flex-grow py-5 px-3 lg:px-20"
      >
        <div className="container mx-auto px-4">
          {/* Intro */}
          <div className="mb-10">
            <h2 className="text-2xl mb-4">
              <span className="text-coral">Frequently </span> Asked Questions
            </h2>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <div>
              <h4 className="text-xl mb-4">What is boostmychild?</h4>
              <p className="mb-2">
                Boostmychild is India’s fastest growing online parenting & child
                development App and platform for early childhood. It is
                developed by a team of leading child psychologists,
                paediatricians and early childhood educators with decades of
                experience.
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-4">
                Which age groups does boostmychild support?
              </h4>
              <p className="mb-2">
                Boostmychild caters to a child's foundation years, which are
                Ages 0 to 6 Years.
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-4">Why is boostmychild necessary?</h4>
              <p className="mb-2">
                Early childhood years also known as foundation years are most
                important in a child's development. Stronger the child's
                foundation, more likely the child will do well in later years in
                the areas of academics, sports and career. Harvard University
                research has proved that to build this strong foundation, the
                child's development needs to be holistic or all-rounded. What
                that means is, the child develops well in not one or two but in
                all the six development areas. This development of each child is
                unique and can be monitored and encouraged. Many modern parents
                are now aware of the importance of holistic development and are
                curious to understand how their child is developing. They are
                looking to know their child's strengths and improvement areas.
                Parents are seeking guidance on dos and don'ts, activities of
                the child's interest, which learning aids/toys are appropriate
                and spending quality time with their child. Boostmychild caters
                to all these parental needs and much more.
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-4">
                What benefits does boostmychild provide?
              </h4>
              <p className="mb-2">
                Boostmychild caters to promoting natural abilities with an
                all-rounded development approach in next generation children.
              </p>
              <div className="mb-2">
                <h6 className="!font-bold">Boostmychild Benefits:</h6>
                <ol>
                  <li>1. Discover and encourage your child's talents early</li>
                  <li>2. Understand your child's development</li>
                  <li>3. Get customized Parenting recommendations</li>
                  <li>4. Improves Parent Involvement</li>
                  <li>5. Promotes All-Rounded Development</li>
                  <li>6. Builds a Strong Foundation Boostmychild Features</li>
                </ol>
              </div>

              <div className="mb-2">
                <h6>Boostmychild Features: </h6>
                <ol>
                  <li>
                    1. Development Profile in 6 Categories & 21 Development
                    Areas
                  </li>
                  <li>2. Customized Parenting Guidelines</li>
                  <li>3. Parent-Child Home Activities</li>
                  <li>4. Area-Wise Worksheets</li>
                  <li>5. Top Suitable Hobbies</li>
                  <li>6. Age-Specific Activity Toolkit</li>
                </ol>
              </div>
            </div>
            <div>
              <h4 className="text-xl mb-4">
                Which are the six development areas?
              </h4>
              <p className="mb-2">
                <ol>
                  <li>
                    Step 1. Parents answer simple objective questions online
                    based on day to day observations of their child in the six
                    development areas.
                  </li>
                  <li>
                    Step 2. The answers are processed by proprietary algorithms
                    and reports are generated for each development area.
                  </li>
                  <li>
                    Step 3. These reports tells parents areas where their
                    child's development is on schedule and those where some
                    encouragement is needed.
                  </li>
                  <li>
                    Step 4. Customized recommendations, guidance, activity
                    recipes, worksheets and relevant information is provided.
                  </li>
                  <li>
                    Step 5. Parents may also decide to take a 45 minute video
                    session with our parenting advisors.
                  </li>
                  <li>Step 6. This process is be done once a year.</li>
                </ol>
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-4">
                Which are the six development areas?
              </h4>
              <p className="mb-2">
                <ul>
                  <li>Physical Development</li>
                  <li>Communication and Language</li>
                  <li>Socio-Emotional Development</li>
                  <li>Problem Solving</li>
                  <li>General Knowledge</li>
                  <li>Arts and Creativity</li>
                </ul>
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-4">
                What is the Activity Toolkit about?
              </h4>
              <p className="mb-2">
                Boostmychild's activity toolkits are age-specific and are
                included in the Silver and Gold plans. They contain those items
                that are to be used for suggested Parent-Child activities for
                that particular year. Each kit contains about 12 - 15 items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer sticks to bottom */}
      <Footer />
    </div>
  );
};

export default Faq;
