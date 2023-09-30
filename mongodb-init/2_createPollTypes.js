sleep(3000);

db.poll_types.insertOne({
  _id: ObjectId('6518272abf30adf04a07896a'),
  name: 'Single Choice',
});

db.poll_types.insertOne({
  _id: ObjectId('6518273026b994d2c7be27c4'),
  name: 'Multiple Choice',
});

db.poll_types.insertOne({
  _id: ObjectId('6518273401982874c28c2a48'),
  name: 'Preferential',
});

db.poll_types.insertOne({
  _id: ObjectId('6518273840bc3aeb623b1372'),
  name: 'Open Ended',
});
