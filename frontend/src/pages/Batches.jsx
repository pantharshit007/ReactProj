import React, { useEffect, useState } from 'react'
import chaicode_logo from '../assets/chaicode_logo.png'
import useDebouncer from '../hooks/useDebouncer';
import UserTable from '../components/UserTable';

const data = [
    {
        "_id": "1",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "SQL Basics To Advanced Mastery",
        "startDate": "13 Jul 2024",
        "endDate": "12 Aug 2024",
        "price": 0,
        "validity": "180 days",
        "status": "Published"
    },
    {
        "_id": "2",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "30 Days Of JavaScript Challenge",
        "startDate": "02 Aug 2024",
        "endDate": "15 Sep 2024",
        "price": 9000,
        "validity": "33 days",
        "status": "Unpublished"
    },
    {
        "_id": "3",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "Interview Preparation With JavaScript",
        "startDate": "20 Jul 2024",
        "endDate": "28 Jul 2024",
        "price": 10000,
        "validity": "365 days",
        "status": "Published"
    },
    {
        "_id": "4",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "Python Fundamentals",
        "startDate": "01 Aug 2024",
        "endDate": "30 Aug 2024",
        "price": 0,
        "validity": "30 days",
        "status": "Published"
    },
    {
        "_id": "5",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "Web Development Bootcamp",
        "startDate": "10 Sep 2024",
        "endDate": "10 Oct 2024",
        "price": 0,
        "validity": "60 days",
        "status": "Published"
    },
    {
        "_id": "6",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "Introduction to Data Science",
        "startDate": "05 Oct 2024",
        "endDate": "05 Nov 2024",
        "price": 0,
        "validity": "60 days",
        "status": "Unpublished"
    },
    {
        "_id": "7",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "Machine Learning Basics",
        "startDate": "15 Nov 2024",
        "endDate": "15 Dec 2024",
        "price": 0,
        "validity": "90 days",
        "status": "Published"
    },
    {
        "_id": "8",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "React Native Essentials",
        "startDate": "20 Dec 2024",
        "endDate": "20 Jan 2025",
        "price": 0,
        "validity": "30 days",
        "status": "Published"
    },
    {
        "_id": "9",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "Cloud Computing Fundamentals",
        "startDate": "01 Jan 2025",
        "endDate": "31 Jan 2025",
        "price": 0,
        "validity": "60 days",
        "status": "Unpublished"
    },
    {
        "_id": "10",
        "image": "https://media.istockphoto.com/id/1264154814/photo/glass-of-homemade-bread-kvass-with-black-rye-bread-on-a-wooden-table-beer-with-sackcloth-copy.jpg?s=612x612&w=0&k=20&c=gGBw2nRtF8qt2Laf6VKRjCK4l4r7FGqnBpfxQsjnYkg=",
        "courseName": "Cyber Security Basics",
        "startDate": "10 Feb 2025",
        "endDate": "10 Mar 2025",
        "price": 0,
        "validity": "60 days",
        "status": "Published"
    }
];

const columns = [
    {
        name: 'Course Image',
        selector: row => <img src={row.image} alt={row.courseName} style={{ width: '90px', height: '55px', borderRadius: '5px' }} />,
    },
    {
        name: 'Course Name',
        selector: row => row.courseName,
        sortable: true,
        wrap: true,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true,
    },
    {
        name: 'End Date',
        selector: row => row.endDate,
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.price === 0 ? 'Free' : `$${row.price}`,
        sortable: true,
    },
    {
        name: 'Validity',
        selector: row => row.validity,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
        cell: row => (
            <span className={`status ${row.status.toLowerCase()}`}>
                {row.status}
            </span>
        ),
    },
];


function Batches() {
    const [filtered, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const searchInputRef = React.useRef(null);

    const debouncedValue = useDebouncer(searchTerm, 500);

    // search functionality
    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
        const searchedData = data.filter(course => {
            return course.courseName.toLowerCase().includes(debouncedValue.toLowerCase());
        });
        setFilteredData(searchedData);
    }, [debouncedValue]);

    // Focus on search input when Ctrl/Cmd + K is pressed
    useEffect(() => {
        function handleKeyDown(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInputRef.current.focus();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);


    return (
        <div className="h-screen relative bg-[#E2BBE9] overflow-x-hidden">

            <div className="flex flex-col font-bold gap-y-8 items-center mb-12">
                <p className='text-[60px] text-[#444B79] mt-4 mx-auto shadowBatch'>
                    Chai aur Code
                </p>

                <div className='w-11/12 max-w-max mx-auto'>
                    <div className=' w-[1200px] xl:ml-10 bg-white rounded-2xl px-10 pt-8 pb-4 drop-shadow-xl'>

                        <div className='mb-7'>
                            <p className='w-[303px] h-[48px] font-bold text-[40px] leading-[48.41px] text-[#313131]'>
                                Batches
                            </p>
                            <p className=' h-[24px] font-normal text-[20px] text-[#4B4747]'>
                                Create learner's batch and share information at the same time.
                            </p>
                        </div>

                        {/* search bar */}
                        <div className='flex gap-x-2 mb-6'>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder='Search by Title (alt+k or cmd+k)'
                                onChange={handleSearch}
                                className='w-[330px] h-[40px] border-[1px] border-[#BEBEBE] text-[18px] font-normal pl-2 rounded-md'
                            />

                            <button
                                onClick={() => { }}
                                className='bg-[#6C6BAF] w-[100px] h-[40px] px-3 py-2 rounded-md text-white text-lg'
                            >
                                Search
                            </button>
                        </div>

                        {/* TABLE */}
                        <UserTable columns={columns} data={filtered} />

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