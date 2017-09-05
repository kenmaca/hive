import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Image
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components
} from 'expo';

let mockAvatars = [
  'https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-1/p320x320/1934580_10156271591875063_8763711335147936975_n.jpg?oh=20ba60edc1dc7c2176fc4d1fd5b2d7ab&oe=5A1D9442',
  'https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-9/12931021_10206156821341790_5277949663330415919_n.jpg?oh=44c7730e968d8ad3908d22136001d4cd&oe=5A592844',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/whale/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/_hartjeg/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/sdw/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mizko/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg'
]

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: mockAvatars[Math.floor(Math.random() * (mockAvatars.length + 1))]
    };

    // bindings
    this.getDimensions = this.getDimensions.bind(this);
  }

  getDimensions(size) {
    return {
      width: size,
      height: size,
      borderRadius: size / 2
    };
  }

  getOutline(size, color) {
    size = size * 1.2;
    return {
      ...this.getDimensions(size), backgroundColor: color || Colors.Foreground
    };
  }

  render() {
    return (
      <View style={[
        styles.container,
        this.getOutline(this.props.size || 32, this.props.outlineColor),
        this.props.style]}>
        <Image
          source={{
            uri: this.state.uri}}
          style={[
            this.getDimensions(this.props.size || 32)]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
