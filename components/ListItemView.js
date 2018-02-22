import React from 'react';
import { View, Image } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

export default class ListItemView extends React.Component {
  
  constructor (props) {
    super(props);

    this.press = this.press.bind(this);
  }

  press () {
    this.props.onPress(this.props.card.image_url[0]);
  }
  
  render(){
    const { image_url, name, user } = this.props.card;
    return (
      <ListItem
        roundAvatar
        title={name}
        subtitle={user.username}
        onPress={this.press}
        avatar={user.avatars.large.https}
        rightIcon={
          <Image 
            source={{ uri: image_url[0] }}
            style={{ height: 50, width: 50 }}
          />
        }
      />
    );
  }
}