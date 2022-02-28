import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PFRV = new Schema({
	"reviewerId" : {type: Number, required: false},
	"revieweeId" : {type: Number, required: false},
	"companyId" : {type: Number, required: false},
	"companyName" : {type: String, required: false},
	"startDate" : {type: Date, required: false},
	"endDate" : {type: Date, required: false},
	"dueDate" : {type: Date, required: false},
}, {
	timestamps: true,
});

const User = mongoose.model('User', noteSchema);
export default User 
