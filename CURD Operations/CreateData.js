const {MongoClient}=require("mongodb");
const url="mongodb://localhost:27017";
const client=new MongoClient(url);
const dbName="user_Details";

const main=async ()=>{
    client.connect();
    console.log("connection successfully to DataBase Server");
    const db=client.db(dbName);
    const colletion=db.collection('users');
    return 'done';
}

main().then(console.log).catch(console.error).finally(()=>client.close());