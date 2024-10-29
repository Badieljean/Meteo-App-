import axios from "axios"
import { compactedData } from "../constants"

const WeatherApiKey = import.meta.env.VITE_API_KEY
const WeatherApiLink = ({city, apikey, day})=> `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=${day}&aqi=yes`

export async function fetchWeatherApi (apiName){
    //const apiResponse = await axios.get(apiName)
    let data = compactedData(apiResponse.data)
    //Uncomment to Verify
    //console.log(data);
    return data
    
}


//Must use it when i'll wanted to call the API maybe when i'll code components
/*fetchWeatherApi (
    WeatherApiLink(
        {
            city :'London',
            apikey : WeatherApiKey,
            day : 1,

        }
    )
)
*/
