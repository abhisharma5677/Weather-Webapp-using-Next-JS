import React from 'react'
import { WiDegrees, WiHumidity } from 'react-icons/wi'
import { FiWind } from 'react-icons/fi'
import { TbTemperatureCelsius } from 'react-icons/tb'
import { MdCompress } from 'react-icons/md'
import { CiTempHigh } from 'react-icons/ci'

const Weather = ({ data }) => {
  let tempreture = "";
  let cityName = "";
  let weatherCondition = "";
  let feelsLike = "";
  let humidity = "";
  let airPressure = "";
  let windSpeed = "";



  if (data.main) {
    tempreture = data.main.temp;
    cityName = data.name;
    weatherCondition = data.weather[0].main;
    feelsLike = data.main.feels_like;
    humidity = data.main.humidity;
    airPressure = data.main.pressure;
    windSpeed = data.wind.speed;
  }

  if (cityName === "") {
    return (
      <div className='flex justify-center'>
        <div className='relative text-[80px] border border-none w-10/12 text-center text-white mt-[150px] md:mt-[250px]'>
          Get weather details...
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='flex justify-center md:mt-20 mt-[30px] '>
        <div className='relative z-20'>

          {/* weather condition and tempreture in degree celcious */}
          <div className='md:flex md:justify-center md:items-center'>
            <div className='flex justify-center'>
              <h1 className='border w-4/5 text-center box-border border-none md:text-[120px] text-[50px] font-bold text-white '>{weatherCondition}</h1>
            </div>
            <div className='flex justify-center'>
              <h1 className='border w-10/12 text-center box-border border-none md:text-[120px] text-[90px] text-white font-bold flex relative md:left-[100px]'>
                {tempreture}
                <TbTemperatureCelsius size={115} className="text-white relative top-[10px] md:relative md:top-[12px] md:h-[150px] md:w-auto" />
              </h1>
            </div>
          </div>

          {/* border code */}
          <div className='flex justify-center'>
            <div className='border border-none bg-black/50 w-11/12 md:w-full mb-[20px] md:mt-[200px] mt-[50px] rounded-[10px]'>

              {/* city name code */}
              <div className='text-center md:flex md:justify-center'>
                <h1 className='md:text-[80px] text-[40px] font-bold text-white pl-[7px] pr-[7px] pt-[20px] md:pl-[20px] md:pr-[20px]'>
                  Weather in {cityName}
                </h1>
              </div>

              {/* gird and flex below city name code */}
              <div className='grid grid-cols-2 gap-y-[40px] gap-x-[30px] mt-[30px] pl-[30px] pb-[30px] md:flex md:justify-evenly md:mt-[80px] md:pb-[30px]'>
                <p className='border border-none rounded-[5px] w-[120px] h-[120px]  text-white font-semibold text-center text-[20px]'>
                  <CiTempHigh size={50} className='relative left-[25px]' />
                  <p className='flex justify-center'>{feelsLike}<TbTemperatureCelsius size={25} /></p>
                  <p>Feels Like</p>
                </p>

                <p className='border border-none rounded-[5px] w-[120px] h-[120px]  text-white font-semibold text-center text-[20px]'>
                  <WiHumidity size={60} className='relative left-[25px]' />
                  <p>{humidity}%</p>
                  <p>Humidity</p>
                </p>


                <p className='border border-none rounded-[5px] w-[120px] h-[120px]  text-white font-semibold text-center text-[20px]'>
                  <MdCompress size={60} className='relative left-[25px]' />
                  <p>{airPressure}hPa</p>
                  <p>Air pressure</p>
                </p>

                <p className='border border-none rounded-[5px] w-[120px] h-[120px]  text-white font-semibold text-center text-[20px]'>
                  <FiWind size={60} className='relative left-[25px]' />
                  <p>{windSpeed}MPH</p>
                  <p>Wind Speed</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather 