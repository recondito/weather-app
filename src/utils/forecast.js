const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b335f31150382c5ad721ffda192ca90c&query=' + latitude + ',' + longitude
    request({url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '\nTemperature: ' + body.current.temperature + '°C\nFeels like: ' + body.current.feelslike + '°C\n Humidity: ' + body.current.humidity + '%')
        }
    })
}

module.exports = forecast