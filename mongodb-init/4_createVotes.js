sleep(3000);

db.votes.insertOne({
  '_id': ObjectId('65182d0d4b2655adffcfde6e'),
  'pollId': ObjectId('651827ecbb96132360b292b2'),
  'optionId': ObjectId('651827f1ef1cb41581b700e3'),
  'createdBy': 'initial',
  'createdAt': '2023-09-30T14:13:33.000Z',
  'modified': '2023-09-30T14:13:33.000Z',
});

db.votes.insertOne({
  '_id': ObjectId('65182e3c39d5ebe1f92741b2'),
  'pollId': ObjectId('65182a229e28802db5cf9bb9'),
  'optionId': ObjectId('65182a2e4526a901a89ae924'),
  'createdBy': 'initial',
  'createdAt': '2023-09-30T14:18:36.000Z',
  'modified': '2023-09-30T14:18:36.000Z',
});
