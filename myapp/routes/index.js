var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const fs = require('fs')
var w2v = require( 'word2vec' );

router.get('/keyword/:id/',function(req,res,next){
  var keyword = req.params.id;
  axios.post('http://completion.amazon.com/search/complete?search-alias=aps&client=amazon-search-ui&mkt=1&q='+keyword, {
    responseType: "json",
    data: {
      "search-alias": "aps",
      "client": "amazon-search-ui",
      "mkt": 1,
      "q": keyword
    },
  })
  .then(function (response) {
    fs.writeFile("jsonFiles/"+keyword+".json", JSON.stringify(response.data[1]), 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      res.send(response.data[1])
      console.log(keyword+" JSON file has been saved.");
  });
  })
  .catch(function (error) {
    console.log(error);
  })
})

router.get('/convertW2vector',function(req,res,next){

  w2v.word2vec('files/words.txt', "files/vecWords.txt", { size: 10000 }, () => {
    console.log("DONE");  
    res.send("Words are converted into vector")
  });
})

router.get('/searchWords/:keyword/:count/',function(req,res,next){
  var keyword = req.params.keyword;
  var count = req.params.count;

  w2v.loadModel( 'files/vecWords.txt', function( error, model ) {
      var similarWords = model.mostSimilar(keyword, count)
      res.send(similarWords)
  });
})


module.exports = router;
