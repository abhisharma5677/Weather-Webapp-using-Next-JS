"use client";
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather'
import { FormEvent } from 'react';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66819514e9d11c3cd77b4f0270a94f41&units=metric`

  const fetchInfo = (e: FormEvent) => {
    e.preventDefault();
    axios.get(url).then((response) => {
      setWeather(response.data);
    }).catch((error) => {
      console.log(error);
    })

    setCity('');
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
    // console.log(e.target.value);
  }

  return (
    <div className='bg-slate-800'>

      {/* Overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 z-[1] bg-black/40" />

      {/* Image */}
      <Image src="/photo.avif"
        alt="background_img" layout='fill' className='object-cover mb-0' />

      {/* City Entry form */}
      <div className='relative flex justify-between items-center max-w-[380px] md:max-w-[500px] w-full m-auto pt-6 text-white z-10'>
        <form onSubmit={fetchInfo} 
        className='flex justify-between items-center w-full m-auto p-3 border border-gray-300 text-white rounded-[10px]'>
          <input className='bg-transparent border-none focus:outline-none text-white font-bold'
            type='text'
            placeholder='Search Weather...'
            value={city}
            onChange={handleChange}>
          </input>
          <button
            onClick={fetchInfo}
            className='text-white font-bold'>
            <BsSearch size={30} />
          </button>
        </form>
      </div>

      {/* Weather Detail Component */}
      <Weather data={weather} />

    </div>
  )
}
