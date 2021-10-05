const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";

MongoClient.connect(url,(err,client)=>{
    if(err) throw err;
    const myUser=[
        {
            userId:"vb001",
            userName:"joshua"
        },
        {
            userId:"vb002",
            userName:"enoch"
        },
        {
            userId:"vb003",
            userName:"shan"
        },
        {
            userId:"vb004",
            userName:"venkat"
        },
        {
            userId:"vb005",
            userName:"shan"
        },
        {
            userId:"vb006",
            userName:"desa"
        }
    ];
    
    const db=client.db('user_Details');
    db.collection('users').insertMany(myUser,(err,res)=>{
        if(err) throw err;
        console.log("Number of users inserted:"+res.insertedCount);
        client.close();
    })

})