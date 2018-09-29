import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Home.css";
import moment from "moment"

class Home extends Component {
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: "",
    showResults: false,
    saveSuccess:""
  };

  searchArticles = (topic, startDate, endDate) => {
    console.log(topic);
    console.log(startDate);
    console.log(endDate);
    let formattedStartDate = moment(startDate).format("YYYYMMDD");
    let formattedEndDate = moment(endDate).format("YYYYMMDD");

    API.searchArticles(topic, formattedStartDate, formattedEndDate)
      .then(res => {
        console.log(res.data.response.docs);
        this.setState({ articles: res.data.response.docs, topic: "", startDate: "", endDate: "", showResults: true })
      })
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startDate && this.state.endDate) {
      this.searchArticles(this.state.topic, this.state.startDate, this.state.endDate);

    }

  };

  saveArticle = (title, date, url) => {
   
    var articleData = {
      title: title,
      date: date,
      url: url
    }
    API.saveArticle(articleData)
      .then(res => alert("Article Saved Successfully"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row fluid >
          <Col size="md-12">
            <Jumbotron />
            <form>
              <h1 className="homepage">Search</h1>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="Start Date (required)"
              />
              <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="End Date (required)"
              />
              <FormBtn
                disabled={!(this.state.topic && this.state.startDate && this.state.endDate)}
                onClick={this.handleFormSubmit}
              >
                Submit Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row fluid id="resultspanel">
          <Col size="md-12">
            {this.state.articles.length ? (
              <div><h1 className="homepage">Article Results</h1>
                <List>
                  {this.state.articles.map(article => (
                    <ListItem key={article._id}>
                      <a href={article.web_url} target="_blank">
                        <strong>
                          {article.headline.main}
                        </strong>
                      </a>
                      <SaveBtn onClick={() => this.saveArticle(article.headline.main, article.pub_date, article.web_url)} 
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : [(this.state.showResults ? <div className="alert alert-danger" role="alert"><h3>No Results to Display</h3></div> : null)]

            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
