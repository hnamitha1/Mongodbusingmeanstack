var MongoClient = require('mongodb').MongoClient;
	
MongoClient.connect('mongodb://localhost:27017/example', function(err, db) {
	if (err) {
    console.log(err);
    process.exit(1);
  }
	console.log("Successfully connected to server");
  
  var doc = {
    title: 'Jaws',
    year: 1975,
    director: 'Steven Spielberg',
    rating: 'PG',
    ratings: {
      critics: 80,
      audience: 97
    },
    screenplay: ['Peter Benchley', 'Carl Gotlieb']
  };
  
  db.collection('movies').insert(doc, function(err, result) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    
   var query = { year: 1975 }  
   db.collection('movies').find().toArray(function(err, docs) {
      if (err) {
        console.log(err);
        process.exit(1);
      }
     
      console.log('Found docs');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });																 
      process.exit(0);
    });
  });
})