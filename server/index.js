const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
// Server path
const url = 'mongodb://172.22.0.2:27017/UserDB'; 
 
const UserModel = require("./models/User");


app.use(express.json());
app.use(cors());

mongoose.connect(url, {useNewUrlParser: true},(err,client)=>{
    if(!err) {
        console.log("successful connection with the server");  
    }
    else
        console.log(err);
});

app.post('/insert',async(req,res) => {
    const Name = req.body.name;
    const Email = req.body.email;
    const Sex = req.body.sex;
    const Age = req.body.age;
    
    const user= new UserModel({Name:Name, Email: Email, Sex: Sex, Age: Age});

    try {
        await user.save();
        res.send("Data Inserted Into the Food Table");
    } catch (err) {
        console.log(err);
    }
});

app.get('/read',async(req,res) => {
    UserModel.find({},(err,result) =>{
        if(err){
            res.send(err);
        }
        //console.log(result);
        res.send(result);
    })
});

app.put('/update',async(req,res) => {
    const newUserName = req.body.newUserName;
    const id = req.body.id;
    console.log(newUserName + id);

    try {
        await UserModel.findById(id, (err, updateUserName) => {
            updateUserName.Name = newUserName;
            updateUserName.save();
            res.send("update the database");
        });
        
    } catch (err) {
        console.log(err);
    }
});

app.get('/updateGet/:id',async(req,res) => {
    const id = req.params.id;
    UserModel.find({$where: {_id: id}},(err,result) =>{
        if(err){
            res.send(err);
        }
        //console.log(result);
        res.send(result);
    })
});

app.delete("/delete/:id", async(req, res) => {
    const id = req.params.id;
    //console.log(id);
    await UserModel.findByIdAndRemove(id).exec();
    res.send("deleted");
})

app.listen(3001,() => {
    console.log("Server running on the port 3001....");
});