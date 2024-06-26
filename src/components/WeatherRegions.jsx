import React from 'react'
import icons from '../utils/icons'

const WeatherRegions = () => {

    const regionsWeather = [
        {
            name: "France",
            temp: "22°C",
            image: "../../images/photos/Francja.svg"
        },
        {
            name: "France",
            temp: "22°C",
            image: "../../images/photos/Francja.svg"
        },
        {
            name: "France",
            temp: "22°C",
            image: "../../images/photos/Francja.svg"
        },
        {
            name: "France",
            temp: "22°C",
            image: "../../images/photos/Francja.svg"
        },
        {
            name: "France",
            temp: "22°C",
            image: "../../images/photos/Francja.svg"
        },
        {
            name: "France",
            temp: "22°C",
            image: "../../images/photos/Francja.svg"
        },
        {
            name: "France",
            temp: "22°C",
            image: "../../images/photos/Francja.svg"
        },
    ]

    const blogImages = [
        {
            image: "../../images/photos/Jakie-pamiatki-z-Mauritius.-Co-przywiezc-z-wakacji-na-Mauritius-shutterstock.com-Dusan-Petkovic.jpg",
            text: "What souvenirs from Mauritius? What to bring from your holiday to Mauritius?"
        },
        {
            image: "../../images/photos/Czy-na-Mauritius-sa-rekiny.-Zdjecie-autorstwa-Ben-Phillips-z-Pexels.webp",
            text: "Mauritius – sharks. Are there sharks in Mauritius?"
        },
        {
            image: "../../images/photos/Ile-trwa-lot-na-Mauritius.-Photo-by-Daren-Inshape-on-Unsplash.webp",
            text: "How long is the flight to Mauritius? See how much it costs to fly to Mauritius"
        },
        {
            image: "../../images/photos/Sylwester-na-Mauritius-iStock.com-maximkabb.webp",
            text: "New Year's Eve in Mauritius"
        },
    ]

  return (
    <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col p-[20px] rounded-[8px] border-[1px] border-lightBlue-2 gap-[20px]">
            <p className='text-[18px] font-[600] text-darkBlue-2 '>Weather in the regions of Mauritius</p>
            <div className="border-[1px] border-lightBlue-2"></div>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-around items-center w-[100%] ">
                    <p className='text-darkBlue-2'>South Coast</p>
                    <span className='px-[8px] py-[5px] bg-[#C4DDFF] rounded-[3px]'>Now:22°C</span>
                </div>
                <div className="flex flex-row justify-around items-center w-[100%]  ">
                    <p className='text-darkBlue-2'>North Coast</p>
                    <span className='px-[8px] py-[5px] bg-[#C4DDFF] rounded-[3px]'>Now:22°C</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col p-[20px] border-[1px] border-lightBlue-2 rounded-[8px] gap-[30px]">
            <p className='text-[22px] font-[600] text-darkBlue-2 '>Weather in other countries</p>
            <div className="border-[1px] border-lightBlue-2"></div>
            <div className="flex flex-col gap-[15px]">
                {regionsWeather.map((region, index) => (
                    <div className="flex flex-row justify-between items-center px-[15px] py-[4px] border-[1px] border-lightBlue-2 rounded-[10px] shadow-md">
                        <div className="flex flex-row justify-center items-center gap-[20px]">
                            <img src={region.image} alt="" 
                            className='w-[40px] h-[40px] rounded-[50%]'
                            />
                            <span className='font-[600] text-[16px] text-darkBlue-2'>{region.name}</span>
                        </div>
                        <span className='flex flex-row justify-center items-center h-[25px] w-[80px] px-[8px] py-[5px] bg-[#C4DDFF] text-[14px] font-[600] rounded-[3px]'>Now:{region.temp}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-center items-center">
                <button 
                className='flex flex-row justify-center items-center gap-[5px] text-[18px] text-white bg-darkBlue-2 px-[30px] py-[10px] rounded-[25px] '
                >
                    <span>See all counties</span>
                    <img src="../../images/icons/triangle-right.svg" alt="" 
                    className='h-[25px] w-[25px] filter invert text-lightBlue '
                    />
                </button>
            </div>
        </div>
        <div className="flex flex-col gap-[30px]">
            <p className='text-[22px] text-darkBlue-2 font-[600]'>Useful information about Mauritius</p>
            <div className="flex flex-row gap-[20px] overflow-auto" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                {blogImages.map((blog) => (
                    <div className="flex flex-col gap-[20px] w-[200px] shrink-0">
                        <img src={blog.image} alt=""
                        className='w-[200px] h-[120px] rounded-[8px]'
                        />
                        <p className='text-darkBlue-2 font-[600]'>{blog.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WeatherRegions