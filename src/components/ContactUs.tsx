import { ArrowRight } from "lucide-react";
import Footer from "./Footer";
import ContactusImg from "/contactus_img.png"

const ContactUs: React.FC = () => {

    return (
        <div className="bg-gradient-to-br from-lavender via-sky/20 to-mint/30 text-gray-600">
            {/* Info Section */}
            <div className="hidden lg:block">
                <img src={ContactusImg} alt="contact image" className="w-full h-52 object-cover" />
            </div>
            <div className="text-center pt-5">
                <h3 className="text-4xl font-black text-coral">Contact Information</h3>
                <p className="text-xl sm:text-2xl font-extrabold text-lime-600">We provide the best education services.</p>
            </div>


            <div className="px-10 lg:px-20 py-5 grid gap-10 lg:grid-cols-2">
                <div className="text-center lg:text-start flex flex-col align-middle mx-10">
                    <div className="">
                        <p className="text-xl font-semibold">Office Adress</p>
                        <a href="https://share.google/Z8kcIEwow7Ss66MuO" className="text-lg font-bold">Shruti Enclave, Baner, Pune, Maharashtra 411045</a>
                    </div>
                    <br />
                    <div className="flex align-middle justify-center flex-col">
                        <span className="text-xl font-semibold">Mobile Number</span>
                        <p className="text-lg font-bold">+91 9876543210</p>
                    </div>
                    <br />
                    <div>
                        <span className="text-xl font-semibold">Email us at</span>
                        <br />
                        <a href="mailto:info@school.com?body=My custom mail body" className="text-lg font-bold">info@school.com</a>
                    </div>
                    <br />
                    <div className="hidden sm:flex justify-center">
                        <a className="bg-coral text-white px-8 py-4 rounded-full hover:bg-sunshine hover:text-coral transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold shadow-lg" href="#freetrial"><span className="">Schedule Demo</span>
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col border-2 rounded-xl isolate bg-white p-5 lg:p-10 xl:mr-10">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div />
                    </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="sm:text-4xl p-5">Let's Talk</h2>
                    </div>
                    <form action="#" method="POST">
                        <div className="">
                            <div className="">
                                <label htmlFor="yourname" className="block text-sm/6 font-semibold text-gray-900">
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        placeholder="Your Name"
                                        id="your-name"
                                        name="your-name"
                                        type="text"
                                        className="block w-full border-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <label htmlFor="mobile" className="block text-sm/6 font-semibold text-gray-900">

                                </label>
                                <div className="mt-2.5">
                                    <input
                                        placeholder="Mobile No"
                                        id="mobile"
                                        name="mobile"
                                        type="text"
                                        className="block w-full border-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">

                                </label>
                                <div className="mt-2.5">
                                    <input
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full border-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">

                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        placeholder="Message"
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full border-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>

                        </div>
                        
                        <div className="mt-10 mb-5 ">
                            <button
                                id="freetrialform"
                                type="submit"
                                className="bg-coral text-white  px-8 p-4 w-full rounded-full hover:bg-sunshine hover:text-coral transition-all duration-300 transform hover:scale-105 space-x-2 text-lg font-semibold shadow-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
