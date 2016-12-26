var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>
				This is a simple React app to show the temperature in Fahrenheit of any city in the world. I made this for a Udemy React course.
			</p>
			<p>
				Here are some links to React, OpenWeatherMap, and the source code for the app.
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react/">React</a> - This was the Javascript framework used.
				</li>
				<li>
					<a href="https://openweathermap.org/">OpenWeatherMap</a> - I used OpenWeatherMap to search for weather data by city name.
				</li>
				<li>
					<a href="https://github.com/grubnubble/ReactWeather">City Temperature App source code</a> - Source code on GitHub
				</li>
			</ul>
		</div>
	);
};

module.exports = About;