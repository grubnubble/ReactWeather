var React = require('react');

//the old way:
// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>About Component</h3>
// 		)
// 	}
// });

//stateless refactoring. can do this on presentational components 
//    that don't utilize states. recommended in this case
var About = (props) => {
	return (
		<div>
			<h3>About</h3>
			<p>The temperature of any given city is directly proportional to the number of happy cats in that city</p>
		</div>
	);
};

module.exports = About;