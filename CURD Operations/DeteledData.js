const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";

MongoClient.connect(url,(err,client)=>{
    if(err) throw err;

    const db=client.db("user_Details")
    const myQuery={userId:"vb003"}
    db.collection('users').remove(myQuery,(err,obj)=>{
        if(err) throw err;
        console.log(obj.result+" records deleted")
        client.close();
    })
})