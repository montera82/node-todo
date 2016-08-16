var mongoose= require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    username: String,
    todo: String,
    isDone : Boolean,
    hasAttachment: Boolean
});

var Todo = mongoose.model('Todo',TodoSchema);

module.exports= Todo;