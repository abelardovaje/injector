module.exports = function(app){

	app.controller(function(sample){
		console.log('controller');
		sample.get();
	});

}