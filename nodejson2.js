var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     var dbo = db.db("mydb");
     console.log("start here");
//var myobj = { name: "Company Inc", address: "Highway 37" };
     fs.readFile('newjson.json', function(err, data) {
        //res.writeHead(200, {'Content-Type': 'text/html'});
    //dbo.createCollection("customer", function(err, res) {
       // console.log(data)
     //var json = JSON.parse(data);
     var jsonData = data;
     //console.log(json)
    // parse json
     var jsonParsed = JSON.parse(jsonData); 
     console.log(jsonParsed);
 

dbo.collection("customer").insertMany(jsonParsed ,function(err, res) {
   if (err) throw err;
   console.log(" document inserted");
   db.close();
})
});
setTimeout(() => {
    console.log("end here");  
}, 5000);

        
});


         
      
