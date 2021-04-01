const Entry = require('../../db/models/Entry');
// const User = require('../../db/models/User');

exports.getAll = (req, res) => {
  Entry.find()
  .then(entries => res.json(entries))
  .catch(err =>
    res.status(400).json({err: err}))
};

exports.add = (req, res) => {
  const name = req.body.name;
  const title = req.body.title;
  const body = req.body.body;
  const mood = req.body.mood;
  console.log('req outside', req.body)

  const newEntry = new Entry({
    name,
    title,
    body,
    mood
  });
  newEntry.save()
  .then((doc)  => {
    const entry = {
      id: doc["_id"],
      name: doc.name,
      title: doc.title,
      body: doc.body,
      mood: doc.mood,
      date: doc.createdAt
    }
    res.json(entry)})
  .catch(err => res.status(400).json('Error: ' + err));
}



// exports.add = (req, res) => {
//   // const firstName = req.body.firstName;
//   // const lastName = req.body.lastName;
//   // const email = req.body.email;
//   // const entries = req.body.entries;
//   console.log('req outside', req.body)

//   Entry.create(req.body)
//   .then(() => console.log('req inside', req.body) && res.json('Entry added!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// }


// exports.add = (req, res) => {
//   console.log('req outside', req.body)
  // const id = req.body.id;
  // const title = req.body.title;
  // const body = req.body.body;

//   const newUser = new User({
//     id,
//     firstName,
//     lastName,
//     email,
//     entries
//   });

//   newUser.entries.push({entries: req.body.entries})
//   const subdoc = newUser.entries[0]

//   newUser.save()
//   .then(() => console.log('req inside', newUser) && res.json('Entry added!'))
//   // .then(res.json('Entry added!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// };