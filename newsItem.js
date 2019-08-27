import React from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button, Title } from 'native-base';



export default News = (props) => {
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: props.data.urlToImage }} />
      </Left>
      <Body>
        <Text>{props.data.title}</Text>
        <Text note numberOfLines={1}>{props.data.publishedAt.substring(0, 10)}</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => alert('Sorry but you don\'t need fake Details :(')}>
          <Text>Detay</Text>
        </Button>
      </Right>
    </ListItem>
  )
}