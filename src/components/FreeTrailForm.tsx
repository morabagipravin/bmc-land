import React, { useState, ChangeEvent, FormEvent } from 'react'
import RatingQuestion from './RatingQuestion';

interface FormData {
    schoolName: string;
    nameAndDesignation: string;
    phoneNumber: string;
    individuality: string;
    holistic: string;
    difficultyRate: string;
    NEPandNCFRate: string;
    emphasisRate: string;
    impactOfTeacherAtr: string;
    interestRate: string;
}

const FreeTrailForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        schoolName: "",
        nameAndDesignation: "",
        phoneNumber: "",
        individuality: "",
        holistic: "",
        difficultyRate: "",
        NEPandNCFRate: "",
        emphasisRate: "",
        impactOfTeacherAtr: "",
        interestRate: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
    };
    return (
        <div className='text-gray-600'>
            {/* Form Section */}
            <div className="min-h-screen bg-white flex items-center justify-center p-6 font-semibold">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border shadow-lg rounded-xl p-8 w-full max-w-6xl space-y-6">
                    <h2 className="sm:text-4xl text-center">
                        School Survey Form
                    </h2>

                    <div className='flex flex-wrap justify-evenly gap-5'>
                        {/* School Name */}
                        <div className='flex flex-col gap-6'>
                            <div className=''>
                                <label className="block mb-1">
                                    Preschool/School Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="schoolName"
                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="Enter your school name"
                                />
                            </div>

                            {/* Name & Designation */}
                            <div className='col-start-1 row-start-2'>
                                <label className="block mb-1">
                                    Your Name & Designation <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nameAndDesignation"
                                    value={formData.nameAndDesignation}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="Enter your name & designation"
                                />
                            </div>

                            {/* Phone */}
                            <div className='col-start-1 row-start-3'>
                                <label className="block mb-1">
                                    Your Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        {/* Rating Questions */}
                        <div className='flex flex-col gap-6'>
                            <div className='col-start-2 row-start-1'>
                                <RatingQuestion
                                    label="How well does your school emphasize on the individuality of each student?"
                                    name="individuality"
                                    value={formData.individuality}
                                    onChange={handleChange}
                                    leftLabel="Less Emphasis"
                                    rightLabel="High Emphasis"
                                />
                            </div>


                            <div className='col-start-2 row-start-2'>
                                <RatingQuestion
                                    label="How dedicated is your school in assuring the holistic development of each child?"
                                    name="holistic"
                                    value={formData.holistic}
                                    onChange={handleChange}
                                    leftLabel="Less Dedicated"
                                    rightLabel="Highly Dedicated"
                                />
                            </div>

                            <div className=''>
                                <RatingQuestion
                                    label="How difficult is it to assess which areas each child needs to be encouraged in?"
                                    name="difficultyRate"
                                    value={formData.difficultyRate}
                                    onChange={handleChange}
                                    leftLabel="Not Difficult"
                                    rightLabel="Very Difficult"
                                />
                            </div>

                            <div className='col-start-2'>
                                <RatingQuestion
                                    label="How prepared is your school to meet the requirements of NEP and NCF?"
                                    name="NEPandNCFRate"
                                    value={formData.NEPandNCFRate}
                                    onChange={handleChange}
                                    leftLabel="Less Prepared"
                                    rightLabel="Very Well Prepared"
                                />
                            </div>

                            <div className='col-start-2 row-start-5'>
                                <RatingQuestion
                                    label="How much emphasis do you place on the reputation that students carry after graduation?"
                                    name="emphasisRate"
                                    value={formData.emphasisRate}
                                    onChange={handleChange}
                                    leftLabel="Less Emphasis"
                                    rightLabel="High Emphasis"
                                />
                            </div>

                            <div className='col-start-2 row-start-6'>
                                <RatingQuestion
                                    label="What is the impact regarding teacher attrition within your school?"
                                    name="impactOfTeacherAtr"
                                    value={formData.impactOfTeacherAtr}
                                    onChange={handleChange}
                                    leftLabel="Low Impact"
                                    rightLabel="High Impact"
                                />
                            </div>

                            <div className='col-start-2 row-start-7'>
                                <RatingQuestion
                                    label="How interested is your school in exploring opportunities to enhance offerings?"
                                    name="interestRate"
                                    value={formData.interestRate}
                                    onChange={handleChange}
                                    leftLabel="Less Interested"
                                    rightLabel="Highly Interested"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className='flex justify-end'>
                        <button
                            type="submit"
                            className="bg-coral text-white px-6 py-2 rounded-full hover:bg-white hover:text-coral transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FreeTrailForm;
