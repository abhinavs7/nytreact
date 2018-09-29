var db = require("../../models");

var mongojs = require("mongojs");

module.exports = function (app) {


  // Route for getting all Articles from the db
  app.get("/", function (req, res) {
    // TODO: Finish the route so it grabs all of the articles
    db.Article.find({}).then(function (dbArticle) {
      //res.json(dbArticle);
      var hbsObject = {
        articles: dbArticle
      };
      //console.log(hbsObject);
      res.render("index", hbsObject);
    }).catch(function (err) {
      res.json(err);
    })
  });

  app.post("/api/articles/", function (req, res) {
    console.log("Inside POST");


    db.Article.find({ title: req.body.title }).then(function (dbArticle) {
      console.log(dbArticle.length);
      if(dbArticle.length!==0){
        res.send("Article already exists");

      }else{
        db.Article.create(req.body).then(function (dbArticle) {
          res.json(dbArticle);
        }).catch(function (err) {
          res.json(err);
        });
      }
      //return db.Note.find({ _id: mongojs.ObjectId(dbArticle[0].note) });
    });
  });

  app.delete("/api/articles/:id", function (req, res) {
    console.log("Inside DEL");

    console.log(req.body);
    db.Article.findByIdAndRemove({_id: mongojs.ObjectId(req.params.id) }).then(function (dbArticle) {
      res.json(dbArticle);
    }).catch(function (err) {
      res.json(err);
    });
  });

  
};
