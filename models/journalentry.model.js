const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
	prompt: {type: String, required: true},
	response: {type: String, required: true},
},{
	timestamps: true,
});

const Entry = mongoose.model('Entry',entrySchema)

module.exports Entry;