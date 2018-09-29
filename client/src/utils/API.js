import axios from "axios";

export default {
  // Gets all artiles for search criteria
  searchArticles: function (topic, startYear, endYear) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7839683277ad4bcfbec7be6f9e388f1f&q=" + topic + "&begin_date=" + startYear + "&end_date=" + endYear
    )
  },
  // Gets the saved articles 
  getArticles: function () {
    return axios.get("/api/articles");
  },
  // Deletes the book with the given id
  deleteArticles: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function (articleData) {
    console.log(articleData);
    return axios.post("/api/articles", articleData);
  }
};
