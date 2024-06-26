import React from 'react'
import icons from '../utils/icons'

const SearchBar = () => {
  return (
    <form action="" className='flex flex-col gap-[20px] sticky top-[100px]'>
        <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col gap-1">
                <label htmlFor="" className='text-white'>Direction</label>
                <div className="relative w-full">
                <input
                    type="text"
                    className="w-[350px] pr-3 pl-10 py-2 border border-darkBlue focus:outline-none rounded"
                    placeholder="Country, region"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <div className="flex items-center justify-center w-8 h-8">
                    <span className='text-black'>{icons.location}</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[1px]">
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className='text-white'>Depature from</label>
                    <div className="w-full">
                    <input type="date" name="" id=""
                        className="w-full pl-3 py-2 border border-darkBlue focus:outline-none rounded"
                    />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="" className='text-white'>Back to</label>
                    <div className="w-full">
                    <input type="date" name="" id=""
                        className="w-full pl-3 py-2 border border-darkBlue focus:outline-none rounded"
                    />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="" className='text-white'>Departure from</label>
                <div className="relative w-full">
                <input
                    type="text"
                    className="w-full pl-10 pr-3 py-2 border border-darkBlue focus:outline-none rounded"
                    placeholder="Downolne"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <div className="flex items-center justify-center w-8 h-8">
                    <img src="../../images/icons/plane.svg" alt=""
                        className='h-5 w-5'
                    />
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="" className='text-white'>Participants</label>
                <div className="relative w-full">
                <input
                    type="text"
                    className="w-full pr-3 pl-10 py-2 border border-darkBlue focus:outline-none rounded"
                    placeholder="2 people"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <div className="flex items-center justify-center w-8 h-8">
                    <img src="../../images/icons/person-male.svg" alt=""
                        className='h-5 w-5'
                    />
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-row items-center mt-6">
                <button
                className='bg-[#E8C872] text-sm font-semibold px-[55px] py-[10px] rounded'
                >SEARCH</button>
            </div>
        </div>
        <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-[10px]">
                <input type="checkbox" name="" id="" 
                className='h-[20px] w-[20px]'
                />
                <label htmlFor="" className='text-[13px] text-white'>All Inclusive</label>
            </div>
            <div className="flex flex-row items-center gap-[10px]">
                <input type="checkbox" name="" id="" 
                className='h-[20px] w-[20px]'
                />
                <label htmlFor="" className='text-[13px] text-white'>Last Minute</label>
            </div>
        </div>
    </form>

  )
}

export default SearchBar