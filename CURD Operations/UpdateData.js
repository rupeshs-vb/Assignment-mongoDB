const {MongoClient, Db}=require("mongodb");
const url="mongodb://localhost:27017";

MongoClient.connect(url,(err,client)=>{
    if(err) throw err;
    
    const db=client.db("user_Details");
    const myQuery={userId:'vb005'};
    const updatQuery={$set:{userName:"Rupesh"}}
    db.collection('users').updateMany(myQuery,updatQuery,(err,obj)=>{
        if(err) throw err;
        console.log(obj.modifiedCount+ " record updated");
        client.close()
    })

})

