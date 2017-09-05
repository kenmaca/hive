import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar
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

// components
import Avatar from './Avatar';

export default class AvatarGroup extends React.Component {
  constructor(props) {
    super(props);

    // bindings
    this.getContainerOffset = this.getContainerOffset.bind(this);
    this.getAvatarOffset = this.getAvatarOffset.bind(this);
  }

  getContainerOffset(size) {
    return {
      marginLeft: size / 4
    };
  }

  getAvatarOffset(size) {
    return {
      marginLeft: -size / 3
    };
  }

  render() {
    return (
      <View style={[
        styles.container, this.getContainerOffset(this.props.size || 32)]}>
        {this.props.uids.map(user => (
          <Avatar
            key={user}
            uid={user}
            size={this.props.size}
            style={this.getAvatarOffset(this.props.size || 32)}
            outlineColor={this.props.backgroundColor || Colors.Background} />))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});
