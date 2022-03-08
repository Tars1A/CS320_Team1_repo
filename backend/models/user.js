//import mongoose from 'mongoose';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	"firstName" : {type: String, required: false},
	"lastName" : {type: String, required: false},
	"employeeId" : {type: Number, required: false},
	"email" : {type: String, required: false},
	"companyId" : {type: Number, required: false},
	"companyName" : {type: String, required: false},
	"positionTitle" : {type: String, required: false},
	"startDate" : {type: Date, required: false},
	"isManager" : {type: Boolean, required: false},
	"password" : {type: String, required: false}
}, {
	timestamps: true,
});

const User = mongoose.model('User', userSchema);
//export default User ;
module.exports = User;
// blahh
