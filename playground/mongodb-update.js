const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Users').findOneAndUpdate({ _id: new ObjectID('5abcaa1ece95b4af4c0a2114')},
    {
        $set: {
            name: 'Sumi'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal: false
    }).then(res => {
        console.log(JSON.stringify(res, undefined, 2));
    });

    client.close();
});