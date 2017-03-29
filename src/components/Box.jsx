var React = require('react');
var pubsub = require('pubsub-js');

var Box = React.createClass({
	getInitialState: function(){
		return{
			title: ""
		}
	},
	componentWillMount: function(){ //antes de renderear o montar
		this.pubsub_event = pubsub.subscribe("listener", function(topic, items){
			//Al recibir el evento
			this.setState({title: items});
		}.bind(this));
	},
	componentWillUnMount: function(){ //cuando se desmonte
		pubsub.unsubscribe(this.pubsub_event);
	},
	onEventReceived: function(){

	},
	render: function(){
		return(
			<div>
				Hola. No tengo familia
				{this.state.title}
			</div>
		);
	}
});

module.exports = Box;