const mongoose = require('mongoose')
const { Schema } = mongoose;


const productSchema = new Schema({
    name:        {type: String, required: true},
    description: {type: String, required: true},
    price:       {type: Number, required: true},
    imageURL:    {type: String, required: true},
    isEco:       {type: String},
    AllergyInfo: {type: String},
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;