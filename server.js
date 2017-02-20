var app = require('./injector');
//server
require('./service.js')(app);

app.controller(function(sample){
	console.log('controller');
	sample.get();
});