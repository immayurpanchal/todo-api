const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    var db = client.db('Todos');
    if (err)
        return console.log('Unable to connect with MongoDB Server');
    console.log('Connected to MongoDB server');

    db.collection('Todos').find({ completed: true }).toArray().then((docs) => {
        console.log('List of Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch the Todo : ', err);
    });
    client.close();
});
