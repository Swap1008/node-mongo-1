const MongoClient=require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/nodemongodb",(err,client)=>{
    if (err) {
        return console.log('Unable to connect to mongodb server');
        
    }
    console.log("Database Connected Successfully");
   const db=client.db('nodemongodb');
    // db.collection('posts').insertOne({
    //     title:"Second Title",
    //     body:"Second Body"
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unable to insert Data",err);
            
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
        
    // });

    // db.collection('Users').insertOne({
    //     _id:102,
    //     name:"BCD",
    //     age:25,
    //     location:"Mumbai",

    // },(err,result)=>{
    //     if (err) {
    //         return console.log("Unable to Insert Data",err);
            
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
        
    // });
    db.collection('Users').find().toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
        
    });
    client.close();
});

