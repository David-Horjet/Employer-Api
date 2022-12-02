const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

const Employees = mongoose.model('Employees', employeeSchema);

module.exports = {
    Employees
};