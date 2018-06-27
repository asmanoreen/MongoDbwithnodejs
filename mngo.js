var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, d) {
  if (err) throw err;
   var dbo = d.db("mydbmy");
//Collectioncreateopen() createCollection in database
      //dbo.createCollection("customers", function(err, res) {
      //  if (err) throw err;}
//Collectioncreateclose()
     //insertopen() Data insert in collection or documents
     //   var myobj = [
     //   { _id: 154, name: 'Facebook' , like:55 },
     //   { _id: 155, name: 'Twitter'  , like:80 },
     //   { _id: 156, name: 'Instagram', like:60},
     //   { _id: 157, name: 'Snapchat' , like:40}
     // ];
     // dbo.collection("socialmedia").insertMany(myobj, function(err, res) {
     //   if (err) throw err;
     //   console.log(res);
 //insertclose()
 //var query = { address: /^S/ }; //print all data start with S
 //var query={name:'Facebook',_id:154}; //and condition
 // var query = { like: {$lt:50} };
  //var query = { _id: 0, name: 1, like: 1 };
  //var mysort = { like: 1 };//sort data ascending and descending order
 // dbo.collection("socialmedia").find().sort(mysort).toArray(function(err, result) {
 //dbo.collection("socialmedia").find().toArray(function(err, result) {
 //Delete documents
 // var myquery = { address: 'Liyya' };
 // dbo.collection("customers").deleteOne(myquery, function(err, obj) {
 // Update documents
//  var myquery = {name: "saim" };
// var newvalues = { $unset: {address: "Lahore" } };
// dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
dbo.collection("customers").find().toArray(function(err, result) {
     if (err) throw err;
      console.log(result);
     d.close();
   });
});
