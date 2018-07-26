const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    var db = client.db('Todos');
    if (err)
        return console.log('Unable to connect with MongoDB Server');
    console.log('Connected to MongoDB server');

    //DeleteMany
    // db.collection('Todos').deleteMany({ text: 'Something to text'}).then((result) => {
    //     console.log(result);
    // });

    //DeleteOne
    // db.collection('Todos').deleteOne({ text: 'Something to text'}).then((result) => {
    //     console.log(result);
    // });

    //FindOndAndDelete
    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID('5b598fe655dbdd312c0d6d65')}
    ).then((result) => {
        console.log(result);
    });

    client.close();
});
