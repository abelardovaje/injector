module.exports = function(app){

	app.service('sample',function(){
		return {
			get:get
		}

		function get(){
			console.log('get');
		}
	});



}


