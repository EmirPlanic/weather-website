const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=9f341793eda2f0b55de27c61814f768c&query='+ latitude + ',' + longitude + '&units=f'

    request({url,json:true},(error,{body})=>{
                if(error){
                callback('Unable to connect to weather service',undefined)
                }else if (body.error){
                callback('Unable to find location',undefined)
                }else {
                    callback(undefined,body.current.weather_descriptions[0] + '. Its currently '  + body.current.temperature + ' is current temperature but it feels like ' + body.current.feelslike)
                }
            })
}

module.exports = forecast