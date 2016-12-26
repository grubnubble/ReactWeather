var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bedbfb5105a064360373d1aa4930bd03&units=imperial';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			//edge case checking
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function () {
			//error case
			throw new Error('Unable to fetch weather for that location.');
		});
	}
};