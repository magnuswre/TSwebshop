const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:   {type: String, required: true},
    passwordHash:  {type: String, required: true}
    
})


userSchema.virtual('displayName').get(function(){
    return this.firstName + ' ' + this.lastName;
})

const User = mongoose.model('User', userSchema)

module.exports = User;