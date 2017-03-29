var React = require('react');
var pubsub = require('pubsub-js');

var navItem = React.createClass({
	onClick: function(event){
		this.props.onClick(event);
		pubsub.publish('listener', true);
	},
	render: function(){
		return(
			<li
				className={this.props.isFristOne ? "active" : ""}
				onClick={this.onClick}
				>
					<a>
						{this.props.name}
					</a>
			</li>
		)
	}
});

module.exports = navItem;