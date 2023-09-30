sleep(3000);

db.votes.insertOne({ userId: 'user123', option: 'Option A' });
db.votes.insertOne({ userId: 'user456', option: 'Option C' });
