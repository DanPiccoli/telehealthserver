const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journalentrySchema = new Schema({
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  //date: { type: Date, required: true },
}, {
  //timestamps: true,
});

const JournalEntry = mongoose.model('JournalEntry', journalentrySchema);

module.exports = JournalEntry;