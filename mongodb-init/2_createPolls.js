sleep(3000);

db.polls.insertOne({ title: 'Sample Poll 10000', options: ['Option A', 'Option B'] });
db.polls.insertOne({ title: 'Sample Poll 2', options: ['Option C', 'Option D'] });
