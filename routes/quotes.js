var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('quotes.db');

const express = require("express");
const router = express.Router();

var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
];

router.get('/quotes', ((req, res) => {
    db.all('SELECT * FROM Quotes', ((err, rows) => {
        console.log("rows.length", rows.length);
        if(err){
            console.log("ERROR: " + err.message);
            }
        else{
            for(var i = 0; i < rows.length; i++){
                console.log("i = " + i + "quote = " + rows[i].quote);
                res.send(rows[i].quote);
            }
        }
    }));
}));

router.get('/quotes/:id', ((req, res) => {
    db.get('SELECT * FROM Quotes WHERE year = ?',[parseInt(req.params.id)], ((err, row) => {
        if(err){
            console.log("ERROR: " + err.message);
        }
        else{
            console.log(row.quote);
            res.send(row.quote);
        }   
    }));
}));

// router.post('/quotes', ((req, res) => {
//         console.log("Insert a new quote: Not this one..." + req.body.quote);
//         db.run("INSERT INTO Quotes VALUES ('Life is Short3', 'Unknown', 1902)", ((err) => {
//             // db.run('INSERT INTO Quotes VALUES (?, ?, ?)', [req.body.quote, req.body.author, req.body.year], ((err) => {
//                 if(err){
//                 console.log(err.message);
//             }
//             else{
//                 res.send('Inserted quote with id: ' + this.lastID);
//             }
//         }));
//     }));
    
router.post('/quotes', ((req, res) => {
    console.log("Insert a new quote: " + req.body.quote);
    db.run('INSERT INTO quotes VALUES (?, ?, ?)', [req.body.quote, req.body.author, req.body.year], function(err){
        if(err){
            console.log(err.message);
        }
        else{
            res.send('Inserted quote with id: ' + this.lastID);
        }
    });
}));
  module.exports = router;