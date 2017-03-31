/**
 * Created by denielhorvatic on 31.03.17.
 */
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(process.env.PORT || 3000, function(){
    console.log('Server running on 80...');
});
