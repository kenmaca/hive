import React from 'react';
import {
  View, StyleSheet, Text, Image, ScrollView, RefreshControl
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';

// components
import UppercasedText from './UppercasedText';
import * as Animatable from 'react-native-animatable';
import {
  Icon
} from 'react-native-elements';

// default fade height if not specified by prop on scroll
const FADE_HEIGHT = 50;
const POP_HEIGHT = Sizes.Height / 4;

export default class ContentCoverSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0
    };

    // bindings
    this.onScroll = this.onScroll.bind(this);
    this.renderBackground = this.renderBackground.bind(this);
  }

  onScroll(event) {
    const y = event.nativeEvent.contentOffset.y;
    (y > -(this.props.popHeight || POP_HEIGHT))
      ? this.setState({y: y}): (
        this.props.backAction != false
        ? (this.props.backAction || Actions.pop)(): null
      );
  }

  renderBackground() {
    return this.props.background || (
      <View style={[
        styles.cover, this.props.backgroundColor && {
          backgroundColor: this.props.backgroundColor
        }]} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.statusBar, {
            opacity: this.state.y / (this.props.fadeHeight || FADE_HEIGHT)
          }]}>
          <View style={styles.statusBarContent}>
            <View style={styles.statusBarTitle}>
              <UppercasedText style={[Styles.Text, Styles.Title, Styles.Alternate]}>
                {this.props.title || ''}
              </UppercasedText>
            </View>
          </View>
        </View>
        <View style={[
          styles.background,
          {
            opacity: (
              (this.props.fadeHeight || FADE_HEIGHT) - this.state.y
            ) / (this.props.fadeHeight || FADE_HEIGHT)
          }]}>
          {this.renderBackground()}
        </View>
        <Animatable.View
          ref='slider'
          animation='bounceInUp'
          style={styles.content}>
          {this.props.children}
        </Animatable.View>
        {this.props.backAction != false && (
          <Animatable.View
            animation='bounceIn'
            style={styles.back}>
            <Icon
              name='arrow-back'
              color={Colors.AlternateText}
              onPress={this.props.backAction || Actions.pop}
              underlayColor={Colors.Transparent} />
          </Animatable.View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  },

  statusBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: Colors.MenuBackground,
    zIndex: 2
  },

  statusBarContent: {
    flexDirection: 'row',
    marginTop: Sizes.InnerFrame,
    padding: Sizes.InnerFrame,
    alignItems: 'center',
    justifyContent: 'center'
  },

  statusBarTitle: {
    alignItems: 'center'
  },

  background: {
    flex: 1
  },

  cover: {
    height: 200,
    backgroundColor: Colors.MenuBackground
  },

  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  back: {
    position: 'absolute',
    top: Sizes.InnerFrame * 2,
    left: Sizes.InnerFrame,
    zIndex: 3
  }
});
