const express = require('express');
const router = express.Router();
const request = require('request');

//SHOW INDEX PAGE
router.get('/', function(req, res){
    res.render('../views/index.ejs');
});

//CREATE SEARCH
router.post('/', function(req, res){
    let keywords = req.body.keywords;
    //http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3
    let requestUrl = 'http://www.recipepuppy.com/api/?q=' + keywords + '&p=3';
    request({uri: requestUrl, json: true}, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
        console.log(body.results[1]);
    });
    res.redirect('/');
});

module.exports = router;