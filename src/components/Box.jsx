var React = require('react');
var pubsub = require('pubsub-js');

var Box = React.createClass({

	componentWillMount: function(){ //antes de renderear o montar
		this.pubsub_event = pubsub.subscribe("listener", function(topic, items){
			//Al recibir el evento
			console.log(topic, items);
		});
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
			</div>
		);
	}
});

module.exports = Box;