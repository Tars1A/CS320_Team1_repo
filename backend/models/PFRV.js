import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PFRV = new Schema({
	"senderEmail" : {type: String, required: true},
	"receiverEmail" : {type: Integer, required: false},
	"companyId" : {type: Integer, required: false},
	"companyName" : {type: String, required: false},
	"startDate" : {type: Date, required: false},
	"endDate" : {type: Date, required: false},
	"dueDate" : {type: Date, required: false},
}, {
	timestamps: true,
});

const User = mongoose.model('User', noteSchema);
export default User 
