import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PFRV = new Schema({
	"requesterId" : {type: Number, required: false},
	"requesteeId" : {type: Number, required: false},
    "type" : {type: String, required: false},
    "startDate" : {type: Date, required: false},
    "endDate" : {type: Date, required: false},
	"dueDate" : {type: Date, required: false},
    "notes" : {type: String, required: false}
}, {
	timestamps: true,
});

const User = mongoose.model('User', noteSchema);
export default User 