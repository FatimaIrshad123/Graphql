import mongoose, { Schema } from 'mongoose'
mongoose.connect('your mongodb url/Todo-server')
const todoSchema = new mongoose.Schema(
    {title:String, description : String}
)

export const Todo = mongoose.model('todos',todoSchema)
