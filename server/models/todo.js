const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required: true,
        default: false
    }
});

const Todo = mongoose.model('Rodo', TodoSchema);

module.exports = Todo;