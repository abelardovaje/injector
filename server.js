var app = require('./injector');
//server
require('./service.js')(app);
require('./controller.js')(app);
