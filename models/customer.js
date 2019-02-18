const Joi = require('joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
  
  name: {
    type: String,
    //unique: true,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  role: {
    type: String,
    required: true,
    enum : ['supplier', 'vendor', 'customer'],
    trim : true
  },
  phone: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
    }
  
}));

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    role: Joi.string().required()
  };

return Joi.validate(customer, schema);
};

exports.Customer = Customer; 
exports.validate = validateCustomer;