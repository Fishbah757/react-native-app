import React from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';
import { ScrollView, View } from 'react-native';
import { List, Text } from 'react-native-elements';

import ListItemView from './ListItemView';

function mapStateToProps(state) {
  return {
    page: state.photoPosts.page,
    isFetching: state.photoPosts.isFetching,
    cards: state.photoPosts.photos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCards: (page) => {
      dispatch(fetchCards(page))
    },
  };
}

class PhotosList extends React.Component {
  
  constructor (props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.listHeight = this.listHeight.bind(this);
  }

  componentWillMount() {
      this.props.getCards(this.props.page);
  }

  onPress (source) {
    this.props.navigation.navigate('Photo', { source: source });
  }

  listHeight (event) {
    this.layoutHeight = event.nativeEvent.layout.height;
  }

  handleScroll (event) {
    if (event.nativeEvent.contentOffset.y > (this.layoutHeight - 600) && !this.props.isFetching) {
      this.props.getCards(this.props.page);
    }
  }
  
  render() {
    const { cards, isFetching } = this.props;
    return (
      isFetching ?
        <ScrollView onScroll={this.handleScroll} >
          <List 
            onLayout={this.listHeight} 
            containerStyle={{ marginTop: 0 }} 
          >
            {
              cards.map((card, index) => {
                return ( 
                  <ListItemView 
                    key={index} 
                    card={card} 
                    onPress={this.onPress}
                  />
                );
              })
            }
          </List>
          <View style={{ flex: 1, justifyContent: 'center' }} >
            <Text style={{ alignSelf: 'center' }} h2>Loading...</Text>
          </View>
        </ScrollView>
        :
        <ScrollView 
          ref={component => this._scrollView = component}
          onScroll={this.handleScroll}
        >
          <List 
            onLayout={this.listHeight} 
            containerStyle={{ marginTop: 0 }}
          >
            {
              cards.map((card, index) => {
                return (
                  <ListItemView
                    key={index}
                    card={card}
                    onPress={this.onPress}
                  />
                );
              })
            }
          </List>
        </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);