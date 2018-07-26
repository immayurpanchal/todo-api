const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
    var db = client.db('Todos');
    if(err)
        return console.log('Unable to connect with MongoDB Server');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something the text new',
    //     completed: false
    // }, (err, result)=>{
    //     if(err)
    //         return console.log('Unable to add Todo ', err);
    //     console.log(JSON.stringify(result.ops));
    // });

    db.collection('Users').insertOne({
        name: 'Mayur Panchal',
        age: 22,
        location: 'Idar'
    }, (err, result)=>{
        if(err)
            return console.log('Unable to add the user ', err);

        console.log(result.ops);
    });
    client.close();
});
