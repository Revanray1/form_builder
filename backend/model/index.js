const mongoose = require('mongoose')

const fieldSchema =new mongoose.Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: String, default: '' },
    placeHolder: { type: String, default: '' }
});

const formSchema = new mongoose.Schema({
    formName: { type: String, required: true },
    fields: [fieldSchema] 
});
const Form = mongoose.model('Form',formSchema)
module.exports = Form