const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema for Todo
const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The Todo text field is required']
    }
})

//create model for Todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;