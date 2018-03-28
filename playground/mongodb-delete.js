const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Users').deleteMany({ name: 'Anindita' })
        .then(res => {
            console.log(JSON.stringify(res, undefined, 2));
        });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5aba3e15fe654c596c667788') })
        .then(res => {
            console.log(JSON.stringify(res, undefined, 2));
        });

    client.close();
});