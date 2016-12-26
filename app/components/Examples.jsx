var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a couple of example locations to try out.</p>
			<ol>
				<li>
					<Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
				</li>
				<li>
					<Link to='/?location=Berlin'>Berlin, Germany</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;