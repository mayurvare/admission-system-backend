// # databse connection
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:12345678910@cluster0.md2h7.mongodb.net/');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const requiredd = { type: String, required: true };
const requiredUnique = { type: String, required: true, unique: true };
// Define schemas
const userSchema = new mongoose.Schema({
    username: requiredUnique,
    password: requiredd
});

const ExaminationSchema = new mongoose.Schema({
    board: requiredd,
    cert_no: requiredd,
    seat_no: requiredd,
    marks: requiredd,
    out_of: requiredd,
    passingYear: requiredd,
    school_name: requiredd,
    isQualified: requiredd
});

const ParentSchema = new mongoose.Schema({
    firstname: requiredd,
    middlename: requiredd,
    lastname: requiredd
});

const admissionSchema = new mongoose.Schema({
    firstname: requiredd,
    middlename: requiredd,
    lastname: requiredd,
    email: requiredUnique,
    contact: requiredd,
    gender: requiredd,
    address: requiredd,
    dob: requiredd,
    place_of_birth: requiredd,
    religion: requiredd,
    aadhar: requiredUnique,
    father: ParentSchema,
    mother: ParentSchema,
    examination_details: {
        ssc: ExaminationSchema,
        hsc: ExaminationSchema
    }
});



const User = mongoose.model('User', userSchema);
const Admission = mongoose.model('Admission', admissionSchema);

module.exports = {
    User, Admission
}