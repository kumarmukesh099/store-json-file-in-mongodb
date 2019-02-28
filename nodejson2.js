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
         
     var date = new Date();
console.log(date); // Wed Jan 01 2014 13:28:56 GMT-1000 (Hawaiian Standard Time) 
        
var json = JSON.stringify(date);
var timestamp = json
console.log(json); 
     //console.log(json)
    // parse json
     var jsonParsed = JSON.parse(jsonData); 
     //console.log(jsonParsed);
     setTimeout(function () {
        console.log('boo')
        console.log(jsonParsed[0]);  
dbo.collection("customer").insertOne(jsonParsed[0] , date ,function(err, res) {
   if (err) throw err;
   console.log(" document inserted 2 sec.");
 setTimeout(function (){


   db.close();
}, 10000)

})
}, 2000)

setTimeout(function () { 
    console.log("hiii");
    console.log(jsonParsed[1]);
dbo.collection("customer").insertOne(jsonParsed[1] ,function(err, res) {
    if (err) throw err;
    console.log(" document inserted in 8 sec.");
  
    setTimeout(function (){


        db.close();
     }, 9000)
     
})
 }, 8000)
 setTimeout(function () { 
    console.log("hiii");
    console.log(jsonParsed[2]);
dbo.collection("customer").insertOne(jsonParsed[2] ,function(err, res) {
    if (err) throw err;
    console.log(" document inserted in 12 sec.");
  
    db.close();
})
}, 12000)
     })

//setTimeout(() => {
  //  console.log("end here");  
    //5000});
});


         
      
     
      
