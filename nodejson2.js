var fs = require('fs');
var express = require('express');
var app = express();

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
     /*function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var arr = getRandomInt(50);
    console.log(arr);
     */
   /* app.use(function(req, res, next) {

      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    
      res.setHeader(
    
        "Access-Control-Allow-Methods",
    
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    
      );
    
      res.setHeader(
    
        "Access-Control-Allow-Headers",
    
        "X-Requested-With,content-type"
    
      );
    
      res.setHeader("Access-Control-Allow-Credentials", true);
    
      next();
    
    });*/

app.get("/mongodata", (req , res) => {
  console.log('hittttttttttttttttttttttt');
  /*const collection = dbo.collection('customer');

  // Find some documents
  //collection.find({}).toArray(function(err, docs) {
    //collection.findOne({_id: doc_id}, 
    //assert.equal(err, null);
    collection.find().sort({"Timestamp":-1}).limit(1),function(err , docs){
      
      if (err){
        res.status(400).send(err) ;
        console.log('err---', err) ;
      }
      else{
    //db.customer.find().sort({"Timestamp":-1}).limit(1).forEach(printjson);
        console.log("Found the following records");
        console.log("hello" , docs)
    //callback(docs);
        res.send(docs)
    
      }

    //console.log(err);

  };*/
  const collection = dbo.collection('customer');

collection.find().sort({"Timestamp":-1}).limit(1).toArray(function(err , docs){
  //console.log('hety')    
  if (err){
    res.status(400).send(err) ;
    console.log('err---', err) ;
  }
  else{
//db.customer.find().sort({"Timestamp":-1}).limit(1).forEach(printjson);
    console.log("Found the following records");
    console.log("hello" , docs)
//callback(docs);
    res.send(docs)

  }
})
//res.send('Hi')
})
     
//app.route("/hi")
//.get((req,res)=>{
  //res.send(docs);
//})

    var count = 0 , i = 25;
    var vary = function intervalFunc() {
      count++;   

      var date = new Date();
        console.log(date);
        
        var json = JSON.stringify(date);
        var timestamp = json;  
   
     // array to return random function
     var MDM_stat_sat1_Power = [];
     for (var i=0, t=1; i<t; i++) {
      MDM_stat_sat1_Power.push(Math.round(Math.random() + i))
     }
     //for Network_sat1_status
     var MDM_stat_sat1_status = [];
     for (var i=0, t=1; i<t; i++) {
      MDM_stat_sat1_status.push(Math.round(Math.random() + i))
     }
//MDM_stat_sat1_Rx
var MDM_stat_sat1_Rx = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_sat1_Rx.push(Math.round(Math.random() + i))
}
//MDM_stat_sat1_Tx
var MDM_stat_sat1_Tx = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_sat1_Tx.push(Math.round(Math.random() + i))
}
//MDM_stat_sat1_Temperature
var MDM_stat_sat1_Temperature = [];
for (var i=0, t=70; i<t; i++) {
  MDM_stat_sat1_Temperature.push(Math.round(Math.random() + i))
}
//MDM_stat_sat1_Cpu
var MDM_stat_sat1_Cpu = [];
for (var i=0, t=100; i<t; i++) {
  MDM_stat_sat1_Cpu.push(Math.round(Math.random() + i))
}
//
var MDM_stat_sat2_Power = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_sat2_Power.push(Math.round(Math.random() + i))
}
//for MDM_stat_sat2_status
var MDM_stat_sat2_status = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_sat2_status.push(Math.round(Math.random() + i))
}
//MDM_stat_sat2_Rx
var MDM_stat_sat2_Rx = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_sat2_Rx.push(Math.round(Math.random() + i))
}
//MDM_stat_sat2_Tx
var MDM_stat_sat2_Tx = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_sat2_Tx.push(Math.round(Math.random() + i))
}
//MDM_stat__sat2_Temperature
var MDM_stat_sat2_Temperature = [];
for (var i=0, t=70; i<t; i++) {
  MDM_stat_sat2_Temperature.push(Math.round(Math.random() * t))
}
//MDM_stat_sat2_Cpu
var MDM_stat_sat2_Cpu = [];
for (var i=0, t=100; i<t; i++) {
  MDM_stat_sat2_Cpu.push(Math.round(Math.random() * t))
}
//for 3rd
var MDM_stat_LTE_Power = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_LTE_Power.push(Math.round(Math.random() + i))
}
//for LTE__status
var MDM_stat_LTE_status = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_LTE_status.push(Math.round(Math.random() + i))
}
//LTE_Rx
var MDM_stat_LTE_Rx = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_LTE_Rx.push(Math.round(Math.random() + i))
}
//LTE_Tx
var MDM_stat_LTE_Tx = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_LTE_Tx.push(Math.round(Math.random() + i))
}
//LTE_Temperature
var MDM_stat_LTE_Temperature = [];
for (var i=0, t=70; i<t; i++) {
  MDM_stat_LTE_Temperature.push(Math.round(Math.random() * t))
}
//LTE__Cpu
var MDM_stat_LTE_Cpu = [];
for (var i=0, t=100; i<t; i++) {
  MDM_stat_LTE_Cpu.push(Math.round(Math.random() * t))
}
//for 4th wifi
var MDM_stat_WIFI_Power = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_WIFI_Power.push(Math.round(Math.random() + i))
}
//for WIFI__status
var MDM_stat_WIFI_status = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_WIFI_status.push(Math.round(Math.random() + i))
}
//WIFI_Rx
var MDM_stat_WIFI_Rx = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_WIFI_Rx.push(Math.round(Math.random() + i))
}
//WIFI_Tx
var MDM_stat_WIFI_Tx = [];
for (var i=0, t=1; i<t; i++) {
  MDM_stat_WIFI_Tx.push(Math.round(Math.random() + i))
}
//WIFI_Temperature
var MDM_stat_WIFI_Temperature = [];
for (var i=0, t=70; i<t; i++) {
  MDM_stat_WIFI_Temperature.push(Math.round(Math.random() * i))
}
//WIFI__Cpu
var MDM_stat_WIFI_Cpu = [];
for (var i=0, t=100; i<t; i++) {
  MDM_stat_WIFI_Cpu.push(Math.round(Math.random() * i))
}



     var Download_rate_LTE = [];
     for (var i=0, t=50; i<t; i++) {
      Download_rate_LTE.push(Math.round(Math.random() * t))
     }

     var Download_rate_WIFI = [];
     for (var i=0, t=50; i<t; i++) {
      Download_rate_WIFI.push(Math.round(Math.random() * t))
     }

    var Download_rate_Satellite = [];
    for (var i=0, t=50; i<t; i++) {
     Download_rate_Satellite.push(Math.round(Math.random() * t))
    }
     
   /* var wifiarr = getRandomInt(50);
    console.log(wifiarr);
    */
     //upload lte
     var uploadltearr = [];
     for (var i=0, t=50; i<t; i++) {
      uploadltearr.push(Math.round(Math.random() * t))
     }
  //  "Upload_rate_WIFI"
    var uploadwifiarr = [];
     for (var i=0, t=50; i<t; i++) {
      uploadwifiarr.push(Math.round(Math.random() * t))
     }
//Upload_rate_Satellite
var Upload_rate_Satellite = [];
     for (var i=0, t=50; i<t; i++) {
      Upload_rate_Satellite.push(Math.round(Math.random() * t))
     }
//Downlink_LTE
    var downlinkltearr = Math.floor(Math.random() * (100 - 70) ) + 70;
    
     
   var downlinkwifiarr = Math.floor(Math.random() * (100 - 70) ) + 70;
   //
   var Downlink_Satellite = Math.floor(Math.random() * (100 - 70) ) + 70;

//Uplink_Quality_LTE
     var uplinkltearr = Math.floor(Math.random() * (100 - 70) ) + 70;

     var uplinkwifiarr = Math.floor(Math.random() * (100 - 70) ) + 70;
//
     var Uplink_Quality_Satellite = Math.floor(Math.random() * (100 - 70) ) + 70;
    // console.log(arr);   
     var jsonData = data;
//console.log(json); 
     //console.log(json)
    // parse json
     var jsonParsed = JSON.parse(jsonData); 
     //console.log(jsonParsed);
  //   setTimeout(function () {
        console.log('book')
      
            
        //timestamp
        console.log(jsonParsed[0].Timestamp = timestamp ); 

        //network_sat
        console.log(jsonParsed[0].MDM_stat_sat1_Power = MDM_stat_sat1_Power[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat1_status = MDM_stat_sat1_status[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat1_Rx = MDM_stat_sat1_Rx[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat1_Tx = MDM_stat_sat1_Tx[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat1_Temperature = MDM_stat_sat1_Temperature[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat1_Cpu = MDM_stat_sat1_Cpu[0] ); 

          //network_sat
        console.log(jsonParsed[0].MDM_stat_sat2_Power = MDM_stat_sat2_Power[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat2_status = MDM_stat_sat2_status[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat2_Rx = MDM_stat_sat2_Rx[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat2_Tx = MDM_stat_sat2_Tx[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat2_Temperature = MDM_stat_sat2_Temperature[0] ); 
        console.log(jsonParsed[0].MDM_stat_sat2_Cpu = MDM_stat_sat2_Cpu[0] ); 

          //network_sat
        console.log(jsonParsed[0].MDM_stat_LTE_Power = MDM_stat_LTE_Power[0] ); 
        console.log(jsonParsed[0].MDM_stat_LTE_status = MDM_stat_LTE_status[0] ); 
        console.log(jsonParsed[0].MDM_stat_LTE_Rx = MDM_stat_LTE_Rx[0] ); 
        console.log(jsonParsed[0].MDM_stat_LTE_Tx = MDM_stat_LTE_Tx[0] ); 
        console.log(jsonParsed[0].MDM_stat_LTE_Temperature = MDM_stat_LTE_Temperature[0] ); 
        console.log(jsonParsed[0].MDM_stat_LTE_Cpu = MDM_stat_LTE_Cpu[0] ); 

         //network_sat
         console.log(jsonParsed[0].MDM_stat_WIFI_Power = MDM_stat_WIFI_Power[0] ); 
         console.log(jsonParsed[0].MDM_stat_WIFI_status = MDM_stat_WIFI_status[0] ); 
         console.log(jsonParsed[0].MDM_stat_WIFI_Rx = MDM_stat_WIFI_Rx[0] ); 
         console.log(jsonParsed[0].MDM_stat_WIFI_Tx = MDM_stat_WIFI_Tx[0] ); 
         console.log(jsonParsed[0].MDM_stat_WIFI_Temperature = MDM_stat_WIFI_Temperature[0] ); 
         console.log(jsonParsed[0].MDM_stat_WIFI_Cpu = MDM_stat_WIFI_Cpu[0] ); 
 
 
        //to print in inside the array
        console.log(jsonParsed[0].Download_rate_LTE = Download_rate_LTE[13] );  
        console.log(jsonParsed[0].Download_rate_WIFI = Download_rate_LTE[5] );  
        console.log(jsonParsed[0].Download_rate_Satellite = Download_rate_Satellite[3] );  


        console.log(jsonParsed[0]);

       //company : '{{foo().toUpperCase()}}',
        //console.log(JSON.stringify(company));
   
        console.log(jsonParsed[0].Upload_rate_LTE =  uploadltearr[33] );  
        console.log(jsonParsed[0].Upload_rate_WIFI = uploadwifiarr[23]  );  
        console.log(jsonParsed[0].Upload_rate_Satellite = Upload_rate_Satellite[5] );    
        
        //downlink lte, downlink wifi and timestamp
        console.log(jsonParsed[0].Downlink_Quality_LTE = downlinkltearr );  
        console.log(jsonParsed[0].Downlink_Quality_WIFI = downlinkwifiarr);  
        console.log(jsonParsed[0].Downlink_Quality_Satellite = Downlink_Satellite);  


        //uplink lte , wifi and timestamp
        console.log(jsonParsed[0].Uplink_Quality_LTE = uplinkltearr );  
        console.log(jsonParsed[0].Uplink_Quality_WIFI = uplinkwifiarr ); 
        console.log(jsonParsed[0].Uplink_Quality_Satellite = Uplink_Quality_Satellite );
        var date = new Date();
        console.log(date); 
         
      //second json    
dbo.collection("customer").insertOne(jsonParsed[0], function(err, res) {
   if (err) throw err;
   console.log(" document inserted 2 sec.");

// setTimeout(function (){
   //db.close();
//}, 10000)

})
//}, 2000)
//if (count == 5) {
  //    clearInterval(this);
  //  }
}

  setInterval(vary, 6000);
/*
setTimeout(function () { 
    console.log(jsonParsed[1]);
    var date = new Date();
    console.log(date); 
dbo.collection("customer").insertOne(jsonParsed[1] ,function(err, res) {
    if (err) throw err;
    console.log(" document inserted in 8 sec.");
  
    setTimeout(function (){


        db.close();
     }, 9000)
     
})
 }, 8000)*/
     })

//setTimeout(() => {
  //  console.log("end here");  
    //5000});
});
app.listen(5005);


         
      
