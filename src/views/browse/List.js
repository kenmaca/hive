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
  Constants, Components
} from 'expo';

// components
import * as Animatable from 'react-native-animatable';
import Header from '../../components/common/Header';
import StartupBlock from '../../components/browse/StartupBlock';

export default class BrowseList extends React.Component {
  render() {

    // set statusbar
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);

    return (
      <View style={styles.container}>
        <Animatable.View
          animation='fadeInDown'
          delay={300}
          style={styles.header}>
          <Header
            color={Colors.AlternateText} />
        </Animatable.View>
        <View style={styles.content}>
          <Text style={[Styles.Text, Styles.Title, Styles.Oversized, Styles.Emphasized, Styles.Alternate, styles.title]}>
            瀏覽創業公司 Browse.
          </Text>
          <Text style={[Styles.Text, Styles.Title, Styles.Subdued, styles.subtitle]}>
            跟著一家創業公司，增加從他們那裡獲得swag卡的費率.
          </Text>
          <View style={styles.startups}>
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
            <StartupBlock
              name='Facebook'
              cover='http://marketingland.com/wp-content/ml-loads/2015/07/facebook-logo-2015-blue-1920.png'
              color={Colors.Facebook} />
          </View>
        </View>
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
    width: Sizes.Width * 2,
    marginTop: Sizes.OuterFrame * 2,
    marginLeft: Sizes.OuterFrame,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }
});
