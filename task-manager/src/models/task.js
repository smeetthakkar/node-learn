const { ObjectID } = require('mongodb')
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectID,
        required: true,
        ref: 'Users'
    }
}, {
    timestamps: true
})


const Task = mongoose.model('Tasks', taskSchema)

module.exports = Task

