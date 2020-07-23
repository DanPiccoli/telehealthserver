const router = require('express').Router();

let Entry = require('../models/journalentry.model');

router.route('/').get((req,res) => {
	Entry.find()
    .then(entries => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const prompt = req.body.prompt;
  const response = req.body.response;

 const newEntry = new Entry({
	 prompt,
	 response,
 });
 
 newEntry.save()
 .then(() => res.json('Entry added!'))
 .catch(err => res.status(400).json('Error: ' + err));
});