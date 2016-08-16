var config = require('./config');

module.exports = 
{
    getDBConnectionString : function () {
        return 'mongodb://'+config.uid+':'+config.pwd+'@ds027165.mlab.com:27165/addressbook';
    }
}