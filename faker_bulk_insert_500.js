// insert 500 random genarated users ,with faker, in the table
var mysql = require('mysql');
var faker = require('faker');
 
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us'
});
 
 
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
