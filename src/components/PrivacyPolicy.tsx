import React from "react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
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
              <span className="text-coral">Privacy</span> Policy
            </h2>
            <p className="mb-4">
              By visiting this Website, you agree to be bound by the Terms and
              Conditions of this Privacy Policy (“Policy”). If you do not agree,
              please do not use or access our Website. Further, this Policy is
              subject to change at any time without notice. Kindly review this
              Policy from time to time to make yourself aware of any changes
              hereto.
            </p>
            <p>
              By the use of the Website, you expressly consent to our use and
              disclosure of your personal information and other information in
              accordance with this Policy. This Policy is incorporated into and
              subject to the terms stated in the End User Agreement and Terms of
              Use (“Terms”).
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            <div>
              <h4 className="text-xl mb-4">
                1. Personally Identifiable Information and Other Information
              </h4>
              <p className="mb-2">
                1.1 When you use our Website, we collect, receive and store your
                personal information and other information which is provided by
                you from time to time.
              </p>
              <p className="mb-2">
                1.2 You can generally browse the Website without telling us who
                you are or revealing any personal information about yourself.
                Once you give us your personal information, you are not
                anonymous to us...
              </p>
            </div>

            <div>
              <h4 className="text-xl mb-4">
                2. Use of Your Information and Other Information
              </h4>
              <p>
                2.1 We use the personal information and other information we
                collect about/from you for the following general purposes: for
                registration and to manage your account...
              </p>
            </div>

            <div>
              <h4 className="text-xl mb-4">3. Grievance</h4>
              <p>
                3.1 The name and contact details of the Grievance Officer, as
                required in terms of the Information Technology Act, 2000 and
                rules/regulations made thereunder, are stated below:
              </p>
              <div className="mt-4 space-y-1">
                <p>
                  <strong>Name:</strong> Manisha Dhaygude
                </p>
                <p>
                  <strong>Address:</strong> Kanchan Heights, Sighgad Road, Pune
                  - 411030
                </p>
                <p>
                  <strong>Phone:</strong> (Your Support Number Here)
                </p>
                <p>
                  <strong>Email:</strong> manisha@boostmychild.com
                </p>
                <p>
                  <strong>Time:</strong> 10:00 A.M to 6:00 P.M
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer sticks to bottom */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
