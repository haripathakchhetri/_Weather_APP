import axios from 'axios'
import { useEffect, useState } from 'react'




function App() {

  const [location, setLocation] = useState('')

  const [data, setData] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=4a18c063e346f76b8038e1cf0bb9bbe5`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data);
      })
      setLocation('')
    }
  }




  return (
    <div className='app'>
      <div className="search text-center p-[1rem]">
        <input className='py-[0.7rem] px-[1.5rem] font-semibold  rounded-3xl bg-gray-500 text-white border-white'
          value={location}
          onKeyPress={searchLocation}
          onChange={event => setLocation(event.target.value)}
          type="text"
          placeholder='Enter Location' />
      </div>


      <div className='container w-[700px] h-[75%] m-auto px-[1rem] py-[1rem] relative top-[10%] flex flex-col justify-between '>
        <div className='top w-full my-[1rem] mx-auto flex justify-between p-[1rem]'>
          <div className="location ">
            <p className='text-4xl font-bold'>{data.name}</p>
            {data.main ? <p className='text-7xl font-bold'>{data.main.temp.toFixed(1)}°F</p> : null}

          </div>


          <div className="description ">
            {data.weather ? <p className='text-6xl font-bold'>{data.weather[0].main}</p> : null}

          </div>


        </div>


        {data.name != undefined &&
          <div className="bottom text-center flex justify-between my-[1rem] mx-[1rem] p-[1rem] rounded-xl bg-[rgba(255,255,255,0.2)]">
            <div className="feels-like">
              {data.main ? <h1 className='font-bold text-3xl'>{data.main.feels_like.toFixed(1)}°F</h1> : null}

              <p className='text-2xl'>Feels Like</p>
            </div>

            <div className="humidity">
              {data.main ? <h1 className='font-bold text-3xl'>{data.main.humidity}%</h1> : null}

              <p className='text-2xl'>Humidity</p>
            </div>

            <div className="speed">
              {data.wind ? <h1 className='font-bold text-3xl'>{data.wind.speed.toFixed(1)}MPH</h1> : null}

              <p className='text-2xl'>Wind Speed</p>
            </div>
          </div>

        }






      </div>
    </div>
  )
}

export default App
