import React, { Component } from 'react';
import axios from "axios";
import { Container, Header, Content, List, Title } from 'native-base';
import ListNews from "./newsItem";




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { News: [] }
  }


  componentDidMount() {
    const  API_URL = 'https://newsapi.org/v2/top-headlines?country=tr&apiKey=6be31e18a1d4497391879d177ff5970d';
    axios.get(API_URL).then(response => response.data)
    .then((res) => {
      this.setState({ News: res.articles })
      console.log(this.state.News)
     })
  }

  items() {
    return this.state.News.map((datas,index) =>
      < ListNews  key={index} data={datas} />
    )
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Haberler</Title>
        </Header>
        <Content scrollEnabled={true}>
          <List>
          { this.items()  }
          </List>
        </Content>
      </Container>
    );
  }
}
