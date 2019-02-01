var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('quotes.db');

const express = require("express");
const router = express.Router();

router.get('/quotes', ((req, res) => {
    db.all('SELECT * FROM Quotes', ((err, rows) => {
        if(err){
            console.log("ERROR: " + err.message);
            }
        else{
            res.send(rows)
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