var Todos = require('../models/todoModel');
var bodyParser = require ('body-parser');

var jsonParser = bodyParser.json();

module.exports= function (app) {
    
    //get todo records correspondign to a username
    app.get('/api/todos/:uname', function (req,res) {
        Todos.find ({username : req.params.uname}, function (err,todos) {
            if (err) throw err;
            res.send(todos);
        });
    });

    // get a single todo record
    app.get('/api/todo/:id', function (req,res) {
        Todos.findById({_id:req.params.id},function(err,todo)
        {
            if(err) throw err;
            res.send(todo);
        });
    });

    //update or insert new todo
    app.post('/api/todo',jsonParser,function(req,res)
    {
        if (req.body.id)
        {
            Todos.findByIdAndUpdate(req.body.id, {username:req.body.username, todo:req.body.todo, isDone:req.body.isDone,hasAttachements: req.body.hasAttachements},
            function(err)
            {
                res.send('Todo update was successfull');
            })
        }
        else
        {
            var newTodo = Todos({username:req.body.username, todo:req.body.todo, isDone:req.body.isDone,hasAttachements: req.body.hasAttachements});
            newTodo.save(function(err)
            {
                res.send('Todo Insert was successfull');
            });
        }
    });

    //delete a todo
    app.delete('/api/todo',jsonParser,function(req,res){

        Todos.findByIdAndRemove(req.body.id,function(err)
        {
            if(err) throw err;
            
            res.send('Todo delete was successfull');
        });
    });
}