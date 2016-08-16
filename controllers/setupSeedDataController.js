
var Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/setup',function (req,res) {
        
            var seedTodo = [
                {
                    username: 'test',
                    todo:'Buy milk',
                    isDone:false,
                    hasAttachment:false
                },
                {
                    username: 'test',
                    todo:'Feed dog',
                    isDone:false,
                    hasAttachment:false
                },
                {
                    username: 'test',
                    todo:'Yookos prayer',
                    isDone:false,
                    hasAttachment:false
                }
            ];
            Todos.create(seedTodo,function(err,results) {
                //GIVE WILLIEM DATA FOR OS
            res.send(results);
        });
        
    });
}