var MongoClient = require('mongodb').MongoClient;
	
MongoClient.connect('mongodb://localhost:27017/example', function(err, db) {
	if (err) {
    console.log(err);
    process.exit(1);
  }
	console.log("Successfully connected to server");
  
  db.collection('sample').insert({ x: 1}, function(err, result) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  	
    db.collection('sample').find({}).toArray(function(err, docs) {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });																 

      db.close();						
    });
    console.log("Called find()");
  });
})