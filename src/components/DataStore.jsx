var Reflux = require('reflux');
var Actions = require('./Actions.jsx');
var HTTP = require('./httpService.js');

var DataStore = Reflux.createStore({
	listenables: [Actions],
	getExchange: function(){
		HTTP.get('http://query.yahooapis.com/v1/public/yql?format=json&q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20In%20(%22USDMXN%22,%20%22USDCHF%22)&env=store://datatables.org/alltableswithkeys')
			.then(function(response){
			this.trigger('onResult', response.query.results.rate[0]);
		}.bind(this));
	}
});

module.exports = DataStore;