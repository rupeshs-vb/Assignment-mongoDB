const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";

MongoClient.connect(url,(err, client) => { 
    const db = client.db("user_Details");
    if (err) throw err; 
    db.collection("users").find().toArray((err, obj) => { 
        if (err) throw err; 
        console.log(obj); 
        client.close(); 
    }); 
});