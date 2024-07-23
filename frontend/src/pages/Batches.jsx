import React from 'react'
import chaicode_logo from '../assets/chaicode_logo.png'

const data = [
    {
        "image": "sql_basics_to_advanced_mastery.jpg",
        "courseName": "SQL Basics To Advanced Mastery",
        "startDate": "13 Jul 2024",
        "endDate": "12 Aug 2024",
        "price": 0,
        "validity": "180 days",
        "status": "Published"
    },
    {
        "image": "30_days_of_javascript_challenge.jpg",
        "courseName": "30 Days Of JavaScript Challenge",
        "startDate": "02 Aug 2024",
        "endDate": "15 Sep 2024",
        "price": 9000,
        "validity": "33 days",
        "status": "Unpublished"
    },
    {
        "image": "interview_preparation_with_javascript.jpg",
        "courseName": "Interview Preparation With JavaScript",
        "startDate": "20 Jul 2024",
        "endDate": "28 Jul 2024",
        "price": 10000,
        "validity": "365 days",
        "status": "Published"
    },
    {
        "image": "python_fundamentals.jpg",
        "courseName": "Python Fundamentals",
        "startDate": "01 Aug 2024",
        "endDate": "30 Aug 2024",
        "price": 0,
        "validity": "30 days",
        "status": "Published"
    },
    {
        "image": "web_development_bootcamp.jpg",
        "courseName": "Web Development Bootcamp",
        "startDate": "10 Sep 2024",
        "endDate": "10 Oct 2024",
        "price": 0,
        "validity": "60 days",
        "status": "Published"
    },
    {
        "image": "data_science_intro.jpg",
        "courseName": "Introduction to Data Science",
        "startDate": "05 Oct 2024",
        "endDate": "05 Nov 2024",
        "price": 0,
        "validity": "60 days",
        "status": "Unpublished"
    },
    {
        "image": "machine_learning_basics.jpg",
        "courseName": "Machine Learning Basics",
        "startDate": "15 Nov 2024",
        "endDate": "15 Dec 2024",
        "price": 0,
        "validity": "90 days",
        "status": "Published"
    },
    {
        "image": "react_native_essentials.jpg",
        "courseName": "React Native Essentials",
        "startDate": "20 Dec 2024",
        "endDate": "20 Jan 2025",
        "price": 0,
        "validity": "30 days",
        "status": "Published"
    },
    {
        "image": "cloud_computing_fundamentals.jpg",
        "courseName": "Cloud Computing Fundamentals",
        "startDate": "01 Jan 2025",
        "endDate": "31 Jan 2025",
        "price": 0,
        "validity": "60 days",
        "status": "Unpublished"
    },
    {
        "image": "cyber_security_basics.jpg",
        "courseName": "Cyber Security Basics",
        "startDate": "10 Feb 2025",
        "endDate": "10 Mar 2025",
        "price": 0,
        "validity": "60 days",
        "status": "Published"
    }
];

function Batches() {


    return (
        <div className="h-screen relative bg-[#E2BBE9] overflow-">

            <div className="flex flex-col font-bold gap-y-12 items-center">
                <p className='text-[60px] text-[#444B79] mt-4 mx-auto shadowBatch'>
                    Chai aur Code
                </p>

                <div className='w-11/12 max-w-max mx-auto'>
                    <div className=' w-[1200px] xl:ml-10 bg-white rounded-2xl px-10 pt-8 pb-16'>

                        <div className='mb-7'>
                            <p className='w-[303px] h-[48px] font-bold text-[40px] leading-[48.41px] text-[#313131]'>
                                Batches
                            </p>
                            <p className=' h-[24px] font-normal text-[20px] text-[#4B4747]'>
                                Create learner's batch and share information at the same time.
                            </p>
                        </div>

                        {/* search bar */}
                        <div className='flex gap-x-2'>
                            <input
                                type="text"
                                placeholder='Search by Title (alt+k or cmd+k)'
                                className='w-[330px] h-[40px] border-[1px] border-[#BEBEBE] text-[18px] font-normal pl-2 rounded-md'
                            />

                            <button
                                onClick={() => { }}
                                className='bg-[#6C6BAF] w-[100px] h-[40px] px-3 py-2 rounded-md'
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            {/* LOGO */}
            <div className='fixed right-0 bottom-0 mr-6 mb-5 -translate-x-2 -translate-y-2'>
                <img
                    src={chaicode_logo}
                    alt="logo"
                    onClick={() => window.location.href = "https://chaicode.com/"}
                    className='rounded-2xl w-[120px] h-[130px] cursor-pointer' />
            </div>
        </div>
    )
}

export default Batches