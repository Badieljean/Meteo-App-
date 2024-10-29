/**
 * For initialyse the App
 * @class
 */
export class Root {
    /**
     * @constructor
     * @param {HTMLDivElement} rootTag - Comment
     */
    constructor(rootTag) {
        this.root = rootTag
    }
    /**
     * 
     * @param {HTMLDivElement} appTag - Comment
     */
    render(appTag){
        this.root.append(appTag)
    }
}

export function compactedData(_data){
    
    let configData = {
        location: {
            cityName: _data.location.name,
            region: _data.location.region,
            country: _data.location.country,
        }, 
        current: {
            lastTimeUpdate: _data.current.last_updated,
            temp: _data.current.temp_c,
            feelslike_temp: _data.current.feelslike_c,
            is_day: _data.current.is_day,
            description: _data.current.condition.text,
            icon: _data.current.condition.icon,
            wind_kph: _data.current.wind_kph,
            wind_deg: _data.current.wind_degree,
            humidity_percent:_data.current.humidity,
            cloud_percent: _data.current.cloud,
            air_quality_EPA: _data.current.air_quality["us-epa-index"],
        },
        day: {
            date: _data.forecast.forecastday[0].date,
            max_temp:_data.forecast.forecastday[0].day.maxtemp_c,
            min_temp:_data.forecast.forecastday[0].day.mintemp_c,
            will_it_rain: _data.forecast.forecastday[0].day.daily_will_it_rain,
            chance_to_rain: _data.forecast.forecastday[0].day.daily_chance_of_rain,
            decription: _data.forecast.forecastday[0].day.condition,
            air_quality_EPA: _data.forecast.forecastday[0].day.air_quality,
        },
        hours: [],

    }

    _data.forecast.forecastday[0].hour.forEach(hourData=>{
        
        const {time,temp_c,feelslike_c,
            is_day,condition,wind_kph,
            wind_degree, humidity,cloud,
            will_it_rain,chance_of_rain,air_quality
        } = hourData 

        configData.hours.push( {
            time: time,
            temp: temp_c,
            feelslike_temp: feelslike_c,
            is_day: is_day,
            description: condition,
            wind_kph: wind_kph,
            wind_deg: wind_degree,
            humidity_percent:humidity,
            cloud_percent: cloud,
            will_it_rain: will_it_rain,
            chance_of_rain: chance_of_rain,
            air_quality_EPA: air_quality,  
        })
        
    })
    return configData
}