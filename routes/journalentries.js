const router = require('express').Router();
let Entry = require('../models/journalentry.model');

router.route('/').get((req, res) => {
  Entry.find()
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const prompt = req.body.prompt;
  const response = req.body.response;
  const date = Date.parse(req.body.date);

  const newJournalEntry = new JournalEntry({
    prompt,
	response,
    date,
  });

  newJournalEntry.save()
  .then(() => res.json('Entry added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Entry.findById(req.params.id)
    .then(entries => res.json(entries))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Entry.findByIdAndDelete(req.params.id)
    .then(() => res.json('Entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Entry.findById(req.params.id)
    .then(entries => {
      entries.prompt = req.body.prompt;
      entries.response = req.body.response;
      entries.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Entry updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

