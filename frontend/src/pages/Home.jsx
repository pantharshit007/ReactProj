import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='w-screen h-screen text-slate-300 flex flex-col justify-center items-center gap-14'>
            <p className="font-bold text-4xl text-orange-600 ">CHAI AUR CODE ☕</p>
            <div className='flex flex-col gap-y-3 font-mono font-medium'>
                <Link to="/otp-form">/otp-form</Link>
                <Link to="/course-list">/course-list</Link>
                <Link to="/batches">/batches</Link>
            </div>
        </div>
    )
}

export default Home