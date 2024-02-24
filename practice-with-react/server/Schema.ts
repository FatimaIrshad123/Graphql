import mongoose from 'mongoose'

mongoose.connect('your mongodb url/graphqluser')

const userschema = new mongoose.Schema({name: String,email : String , password : String})

export const Userdb = mongoose.model('user',userschema)
