sleep(3000);

db.polls.insertOne({
  '_id': ObjectId('651827ecbb96132360b292b2'),
  'title': "What's your favorite team?",
  'type': {
    _id: ObjectId('6518272abf30adf04a07896a'),
    name: 'Single Choice',
  },
  'options': [
    {
      '_id': ObjectId('651827f1ef1cb41581b700e3'),
      'text': 'Manchester United',
      'voteCount': 1,
    },
    {
      '_id': ObjectId('651827f5818e214f4a4c9483'),
      'text': 'Chelsea',
      'voteCount': 0,
    },
    {
      '_id': ObjectId('651827fb9a91f7e7354f7002'),
      'text': 'Arsenal',
      'voteCount': 0,
    },
    {
      '_id': ObjectId('651827ff72000b7a069ae367'),
      'text': 'Liverpool',
      'voteCount': 0,
    },
  ],
  'createdBy': 'initial',
  'createdAt': '2023-09-30T13:51:40.000Z',
  'modified': '2023-09-30T13:51:40.000Z',
  'uuid': '85bcbcf9-6238-4488-8711-95d4e3fd8b2b',
  'locked': false,
});

db.polls.insertOne({
  '_id': ObjectId('65182a229e28802db5cf9bb9'),
  'title': 'What subjects do you like?',
  'type': {
    _id: ObjectId('6518273026b994d2c7be27c4'),
    name: 'Multiple Choice',
  },
  'options': [
    {
      '_id': ObjectId('65182a2b3529c2e368cda7cb'),
      'text': 'English',
      'voteCount': 0,
    },
    {
      '_id': ObjectId('65182a2e4526a901a89ae924'),
      'text': 'Maths',
      'voteCount': 1,
    },
    {
      '_id': ObjectId('65182a337486abab18e6660a'),
      'text': 'Physics',
      'voteCount': 0,
    },
    {
      '_id': ObjectId('65182a385bdddf7092694e09'),
      'text': 'Biology',
      'voteCount': 0,
    },
    {
      '_id': ObjectId('65182ae626c8a9558d7a6772'),
      'text': 'Chemistry',
      'voteCount': 0,
    },
    {
      '_id': ObjectId('65182aec03fce7458f73c11a'),
      'text': 'Economics',
      'voteCount': 0,
    },
    {
      '_id': ObjectId('65182af0931e0185411806c5'),
      'text': 'Business Studies',
      'voteCount': 0,
    },
  ],
  'createdBy': 'initial',
  'createdAt': '2023-09-30T14:01:06.000Z',
  'modified': '2023-09-30T14:01:06.000Z',
  'uuid': '89588ee5-8a00-4f6c-b139-32d17ceb7f58',
  'locked': false,
});
