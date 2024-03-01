const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Employee', employeeSchema) // by default create model to lowercase and plural, it will look for 'employees' collection in mongodb