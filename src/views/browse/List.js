import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Text, ScrollView
} from 'react-native';
import {
  Colors, Sizes, Styles
} from '../../Const';
import {
  Actions
} from 'react-native-router-flux';
import {
  Constants, Components, LinearGradient
} from 'expo';

// components
import * as Animatable from 'react-native-animatable';
import Header from '../../components/common/Header';
import StartupBlock from '../../components/browse/StartupBlock';
import Button from '../../components/common/Button';

export default class BrowseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVisible: false
    };
  }

  render() {

    // set statusbar
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <ScrollView
            horizonal
            contentContainerStyle={styles.horizontalContent}>
            <Animatable.View
              animation='fadeInDown'
              delay={300}
              style={styles.header}>
              <Header
                color={Colors.AlternateText} />
            </Animatable.View>
            <Text style={[Styles.Text, Styles.Title, Styles.Oversized, Styles.Emphasized, Styles.Alternate, styles.title]}>
              瀏覽創業公司 Browse.
            </Text>
            <Text style={[Styles.Text, Styles.Title, Styles.Subdued, styles.subtitle]}>
              跟著一家創業公司，增加從他們那裡獲得swag卡的費率.
            </Text>
            <View style={styles.startups}>
              <StartupBlock
                name='Facebook'
                scale={0.8}
                cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
                color={Colors.Facebook} />
              <StartupBlock
                name='Facebook'
                scale={0.7}
                cover='https://www.sketchappsources.com/resources/source-image/apple-logo.png'
                color={Colors.Facebook} />
              <StartupBlock
                name='Facebook'
                scale={1}
                cover='https://avatars0.githubusercontent.com/u/18461506?v=4&s=200'
                color={Colors.Facebook} />
              <StartupBlock
                name='Facebook'
                scale={0.6}
                cover='https://tctechcrunch2011.files.wordpress.com/2014/10/slack-large.png'
                color={Colors.Facebook} />
              <StartupBlock
                name='Facebook'
                scale={1.5}
                cover='https://qooah.com/wp-content/uploads/2017/01/6349796840206098975_n.png'
                color={Colors.Facebook} />
              <StartupBlock
                name='Facebook'
                scale={0.9}
                cover='http://cdn02.androidauthority.net/wp-content/uploads/2015/05/Alibaba-logo.jpg'
                color={Colors.Facebook} />
              <StartupBlock
                name='Facebook'
                scale={0.8}
                cover='https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif'
                color={Colors.Facebook} />
              <StartupBlock
                name='Facebook'
                scale={0.7}
                cover='https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png'
                color={Colors.Facebook} />
              <StartupBlock
                name='Facebook'
                scale={0.9}
                cover='https://s3-us-west-2.amazonaws.com/assets.coderag.prd/wp-content/uploads/2016/04/coderag_08_nucleuslogo.jpg'
                color={Colors.Facebook} />
            </View>
          </ScrollView>
        </ScrollView>
        <LinearGradient
          colors={[Colors.DarkTransparent, Colors.MenuBackground]}
          style={styles.utils}>
          <View style={styles.search}>
            <Button
              right={Sizes.InnerFrame}
              icon='arrow-back'
              onPress={Actions.pop}
              color={Colors.AlternateText} />
            <Button
              right={Sizes.InnerFrame}
              icon='search'
              onPress={() => this.setState({
                searchVisible: !this.state.searchVisible},
                () => this.refs.search.transitionTo({
                  width: this.state.searchVisible ? Sizes.Width * 0.6: 0}))}
              color={Colors.AlternateText} />
            <Animatable.View
              ref='search'
              style={styles.searchBar} />
            <Button
              right={Sizes.InnerFrame}
              icon='sort-by-alpha'
              color={Colors.AlternateText} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.MenuBackground
  },

  content: {
    flex: 1
  },

  horizontalContent: {
    width: Sizes.Width * 2.5
  },

  title: {
    margin: Sizes.OuterFrame,
    marginTop: Sizes.OuterFrame * 3,
    width: Sizes.Width * 2 / 3
  },

  subtitle: {
    margin: Sizes.OuterFrame,
    marginTop: 0,
    width: Sizes.Width * 2 / 3
  },

  startups: {
    marginVertical: Sizes.OuterFrame * 2,
    margin: Sizes.OuterFrame,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },

  utils: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: Sizes.InnerFrame / 2,
    paddingHorizontal: Sizes.InnerFrame,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  searchBar: {
    height: Sizes.OuterFrame * 1.5,
    width: 0,
    backgroundColor: Colors.Foreground
  }
});
