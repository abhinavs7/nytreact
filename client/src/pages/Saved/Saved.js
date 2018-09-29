import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";


class Saved extends Component {
  state = {
    articles: [],
    title: "",
    date: "",
    url: ""
  };
  componentDidMount(){
    this.loadArticles();
  }
  deleteArticle= id => {
    API.deleteArticles(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };
  loadArticles = () => {
    API.getArticles()
      .then(res =>{console.log(res);
        this.setState({ articles: res.data })
      })
      .catch(err => console.log(err));
  };

  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
        <Row fluid>
          <Col size="md-12">
          <h1 className="homepage">Saved Results</h1> 
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <a href= {article.url} target="_blank">
                      <strong>
                        <span>{article.title}</span> 
                      </strong>
                    </a>
                    <span className="savePage">--{article.date.substring(0,10)}</span>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3 className="alert alert-danger">No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Link className = "backNav" to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
