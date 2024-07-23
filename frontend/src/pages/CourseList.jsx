import React from 'react'

import chaicode_logo from '../assets/chaicode_logo.png'
import interview_preparation_js_2 from '../assets/interview_preparation_js_2.png'
import aptitude_averages from '../assets/aptitude_averages.png'
import aptitude_interest from '../assets/aptitude_interest.png'
import aptitude_partnership from '../assets/aptitude_partnership.png'
import aptitude_time_work from '../assets/aptitude_time_work.png'
import Draggable from '../components/Draggable';

const data = [
    {
        "image": interview_preparation_js_2,
        "courseName": "Interview Preparation with JavaScript 2.0",
        "price": 9000,
        "courseType": "Course"
    },
    {
        "image": aptitude_averages,
        "courseName": "Aptitude - Averages, Mixtures & Allegation",
        "price": 0,
        "courseType": "Mock Test"
    },
    {
        "image": aptitude_interest,
        "courseName": "Aptitude - Simple & Compound Interest",
        "price": 0,
        "courseType": "Mock Test"
    },
    {
        "image": aptitude_partnership,
        "courseName": "Aptitude - Partnership",
        "price": 0,
        "courseType": "Mock Test"
    },
    {
        "image": aptitude_time_work,
        "courseName": "Aptitude - Time & Work",
        "price": 0,
        "courseType": "Mock Test"
    }
]

function CourseList() {
    return (
        <div className="h-screen relative bg-[#D2E3C8] overflow-x-hidden">

            <div className="flex flex-col font-bold gap-y-10 mb-9">
                <p className='text-[60px] text-[#4F6F52] mt-6 mx-auto shadowCourse'>
                    Chai aur Code
                </p>

                <div className='w-11/12 max-w-max mx-auto'>
                    <div className=' w-[1200px] xl:ml-10 bg-white rounded-2xl px-10 pt-8 pb-16'>
                        <div className='mb-7'>
                            <p className='w-[303px] h-[48px] font-bold text-[40px] leading-[48.41px] text-[#313131]'>
                                Manage Bundle
                            </p>
                            <p className='w-[457px] h-[24px] font-normal text-[20px] leading-[24.2px] text-[#4B4747]'>
                                Change orders of the products based on priority
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-4'>
                            <Draggable card={data} />
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

export default CourseList