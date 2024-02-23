import mongoose, { Schema } from 'mongoose'
mongoose.connect('mongodb+srv://Fatima:Fatima@cluster0.7bunznc.mongodb.net/Todo-server')
const todoSchema = new mongoose.Schema(
    {title:String, description : String}
)

export const Todo = mongoose.model('todos',todoSchema)
