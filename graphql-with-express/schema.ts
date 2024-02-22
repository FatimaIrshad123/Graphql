import mongoose from 'mongoose'

mongoose.connect('your mongodb url/graphql')

const schema1 = new mongoose.Schema ({id:String, name : String, address: String})

export const User = mongoose.model('user',schema1)

// module.exports = {User}