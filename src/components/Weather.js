import React from 'react'
import { useSelector } from 'react-redux'



const Weather = () => {
  const {weather} = useSelector(state => state.weather)
  const result = Object.values(weather)
  console.log(result)


  return (
    <div className='infoWeath'>
      
      <div>
          {result.map((item, index) => (
        <p>{item}</p>
    ))}
      </div>
        
    </div>
      
  )
}


export default Weather