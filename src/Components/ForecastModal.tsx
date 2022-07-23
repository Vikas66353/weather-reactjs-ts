import { FaRegWindowClose } from "react-icons/fa";
import {Forecastday} from "./modal";

type Props={
  forecastWeatherData:Forecastday[],
  closeModal:any,
  id:number,
}

const ForecastModal=({closeModal,id,forecastWeatherData}:Props)=>{
    return (
        <div className="forecastModalContainer">
            <div className="forecastModal">
            <nav>
                <h2>{forecastWeatherData[id].date}</h2>
                <button className="close" onClick={()=>closeModal()}><FaRegWindowClose className="close-icon"/></button>
            </nav>
            <div className="forecastModalContent">
            <div>
                <span>Max Temp.</span>
                <span>{forecastWeatherData[id].day.maxtemp_c}
                    <sup>o</sup></span>
              </div>
              <div>
                <span>Minimum Temp.</span>
                <span>
                {forecastWeatherData[id].day.mintemp_c}
                    <sup>o</sup>
                  <span>&#176;</span>{" "}
                </span>
              </div>
              <div>
                <span>Wind</span>
                <span>{forecastWeatherData[id].day.maxwind_kph}</span>
              </div>
              <div>
                <span>Humidity</span>
                <span>{forecastWeatherData[id].day.avghumidity}<sup>o</sup></span>
              </div>
              <div>
                <span>Weather</span>
                <span>{forecastWeatherData[id].day.condition.text}</span>
                
              </div>
              <div>
                <span>Sunrise Time</span>
                <span>{forecastWeatherData[id].astro.sunrise}</span>
              </div>
              <div>
                <span>Sunset Time</span>
                <span>{forecastWeatherData[id].astro.sunset}</span>
              </div>
            </div>
            </div>

        </div>
    )
}

export default ForecastModal;