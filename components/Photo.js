import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

class Photo extends React.Component {
  render() {
    const { source } = this.props.navigation.state.params;
    return (
      <View style={ styles.viewStyle }>
        <ImageBackground
          source={{ uri: source }}
          style={{ width: '100%', height: 350 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Photo;