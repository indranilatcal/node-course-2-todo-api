const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bdc0900cbc91246e0df379d';
//var id = '6bdc0900cbc91246e0df379d11';

if(!ObjectID.isValid(id)){
    return console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));

User.findById('5abcb9f72336553bc014c49a').then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => console.log(e));