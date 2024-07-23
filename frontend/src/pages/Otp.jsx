import React, { useState } from 'react'
import OTPInput from 'react-otp-input'

import chaicode_logo from '../assets/chaicode_logo.png'

function Otp() {

    const [otp, setOtp] = useState('')
    const [match, setMatch] = useState(null)

    function handleOnSubmit(e) {
        e.preventDefault()
        const pass = '1234'
        if (otp.length === 4 && otp === pass) {
            setMatch(true)
        } else setMatch(false)
    }

    function resendOtp() {
        window.alert('Otp sent! Check Inbox')
    }

    return (
        <div className="h-screen relative bg-[#3F72AF] overflow-x-hidden">

            <div className="flex flex-col font-bold gap-y-12 items-center mb-7">

                <p className='text-[60px] text-white mt-6 mx-auto shadowPara'>
                    Chai aur Code
                </p>

                <div className=" bg-white min-h-max w-[500px] rounded-xl py-2 px-7 flex flex-col justify-center items-center ">
                    <div className='flex flex-col w-full justify-center items-center gap-6 py-3'>

                        <div className=' w-[380px] flex flex-col justify-center items-center text-center gap-1'>
                            <p className='text-2xl leading-[52.08px] flex justify-center'>
                                Mobile Phone Verification
                            </p>

                            <p className='text-[16px] font-normal text-[#BFBFBF] '>
                                Enter the 4-digit verification code that was sent to your phone number
                            </p>
                        </div>

                        <form onSubmit={handleOnSubmit} >
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                shouldAutoFocus={true}
                                renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                                renderInput={(props) =>
                                    <input
                                        {...props}
                                        placeholder="-"
                                        name='otp'
                                        autoComplete='one-time-code'
                                        style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", }}
                                        className={`w-[48px] lg:w-[60px] lg:h-[73px] border-0 bg-richblack-800 rounded-[0.8rem] text-richblack-5 aspect-square text-center text-lg  bg-[#DBE2EF] outline-none
                                            ${match ? 'border-0 outline-2 outline-[#23CF9B]'
                                                : match === false && 'border-0 outline-2 outline-[#EB2D5B]'
                                            }`}
                                    />}
                            />
                            <button type="submit"
                                className={`w-full bg-[#112D4E] p-[8px] rounded-[8px] mt-6 font-normal text-lg text-white ${match ? 'bg-[#23CF9B]' : match === false && 'bg-[#EB2D5B]'}`}>
                                {match ? 'Verified' : match === false ? 'Verification failed' : 'Verify Account'}
                            </button>
                        </form>

                    </div>

                    <div className="flex items-center text-[16px] gap-x-1 pb-8">
                        <span className='text-[#BFBFBF] leading-[32.55px] font-normal'>Didn't receive code? </span>
                        <button
                            className="flex items-center text-[#112D4E] leading-[32.55px] font-normal"
                            onClick={() => resendOtp()}
                        >
                            {' Resend'}
                        </button>
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

export default Otp