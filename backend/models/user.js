import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	"firstName" : {type: String, required: true},
	"lastName" : {type: String, required: true},
	"employeeId" : {type: Integer, required: false},
	"email" : {type: Integer, required: true},
	"companyId" : {type: Integer, required: false},
	"companyName" : {type: String, required: false},
	"positionTitle" : {type: String, required: false},
	"startDate" : {type: Date, required: false},
	"isManager" : {type: Boolean, required: false},
	"password" : {type: String, required: true}
}, {
	timestamps: true,
});

const User = mongoose.model('User', noteSchema);
export default User 
