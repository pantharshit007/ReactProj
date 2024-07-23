import React, { useState } from 'react'
import { GoGrabber } from "react-icons/go";
import { SlOptionsVertical } from "react-icons/sl";
import { List, arrayMove } from "react-movable";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

function Draggable({ card }) {

    const [items, setItems] = useState([...card])
    const [openIndex, setOpenIndex] = useState(null);

    const handleMoveTop = (index) => {
        if (index > 0) {
            setItems(arrayMove(items, index, 0));
        }
        setOpenIndex(null);
    };

    const handleMoveBottom = (index) => {
        if (index < items.length - 1) {
            setItems(arrayMove(items, index, items.length - 1));
        }
        setOpenIndex(null);
    };

    const handleRemove = (index) => {
        setItems(items.filter((_, i) => i !== index));
        setOpenIndex(null);
    };


    return (
        <>
            <List
                values={items}
                onChange={({ oldIndex, newIndex }) =>
                    setItems(arrayMove(items, oldIndex, newIndex))
                }
                renderList={({ children, props, isDragged }) => (
                    <ul
                        {...props}
                        style={{
                            width: '1050px',
                        }}
                    >
                        {children}
                    </ul>
                )}
                renderItem={({ value, props, isDragged, isSelected, index }) => (
                    <li
                        {...props}
                        key={props.key}
                        style={{
                            ...props.style,
                            margin: '0 0 8px 0',
                            zIndex: `${openIndex === index ? '10' : '0'}`
                        }}
                    >
                        {/* card */}
                        <div
                            className={`w-[1050px] h-[90px] flex justify-between items-center px-1 py-2 rounded-lg drop-shadow-lg shadow-[#7E7E7E] ${isDragged || isSelected ? 'bg-slate-100' : 'bg-white'}`}
                        >

                            <GoGrabber
                                size={50}
                                className='mr-2 cursor-grab active:cursor-grabbing'
                            />

                            {/* image */}
                            <img
                                src={value.image}
                                alt="logo"
                                className='w-[133px] h-[75px] rounded-md mr-auto'
                                onMouseDown={(e) => e.stopPropagation()}
                                onTouchStart={(e) => e.stopPropagation()}
                            />

                            {/* course Name */}
                            <p
                                className='flex-1 pl-7 font-medium text-[20px] leading-6'
                                onMouseDown={(e) => e.stopPropagation()}
                                onTouchStart={(e) => e.stopPropagation()}
                            >
                                {value.courseName}

                            </p>

                            {/* Info */}
                            <div
                                className="flex justify-between mr-4 w-[220px] relative"
                                onMouseDown={(e) => e.stopPropagation()}
                                onTouchStart={(e) => e.stopPropagation()}
                            >
                                <span className=' font-normal text-lg leading-5 min-w-[95px]'>
                                    {value.price === 0 ? 'Free' : `Rs. ${value.price}/-`}
                                </span>
                                <p className=' min-w-[75px] h-[26px] text-sm font-normal rounded-md border-[1px] border-[#7E7E7E] bg-[#b9ef9a98] text-center mx-auto px-1'>
                                    {value.courseType}
                                </p>

                                {/* options */}
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className='ml-auto '
                                    onMouseDown={(e) => e.preventDefault()}
                                >
                                    <SlOptionsVertical />
                                </button>

                                {/* dialog box */}
                                {openIndex === index && (
                                    <div className='absolute top-full translate-x-full ml-4 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-[50]'>
                                        <button
                                            onClick={() => handleMoveTop(index)}
                                            className='flex items-center w-full font-normal px-4 py-2 text-left'
                                        >
                                            <IoIosArrowRoundUp size={22} /> Move to Top
                                        </button>
                                        <button
                                            onClick={() => handleMoveBottom(index)}
                                            className='flex items-center w-full font-normal px-4 py-2 text-left'
                                        >
                                            <IoIosArrowRoundDown size={22} /> Move to Bottom
                                        </button>
                                        <button
                                            onClick={() => handleRemove(index)}
                                            className='flex items-center w-full font-normal px-4 py-2 text-left text-red-600'
                                        >
                                            <RiDeleteBinLine size={22} className='pr-1' />Remove
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    </li>
                )}
            />
        </>
    )
}

export default Draggable