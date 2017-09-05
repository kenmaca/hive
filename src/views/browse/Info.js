import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Image, ScrollView, Text
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
import ContentCoverSlider from '../../components/common/ContentCoverSlider';
import AvatarGroup from '../../components/common/AvatarGroup';
import UppercasedText from '../../components/common/UppercasedText';
import GradientButton from '../../components/common/GradientButton';
import Tag from '../../components/common/Tag';
import * as Animatable from 'react-native-animatable';

export default class CompanyInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          title='Facebook, Inc.'
          background={(
            <View style={styles.cover}>
              <Image
                source={{uri: 'http://www.multiversedb.com/static/processed_images/pied-piper-the-initial-team.mjxgqbdpf7dad2bec1jv.o.jpg'}}
                style={styles.cover} />
              <LinearGradient
                colors={[Colors.DarkTransparent, Colors.MenuBackground]}
                style={StyleSheet.absoluteFill} />
            </View>
          )}>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={event => this.refs.container.onScroll(event)}>
            <View style={[styles.header, styles.content]}>
              <View style={[Styles.Card, styles.summary]}>
                <Animatable.View
                  delay={300}
                  animation='bounceIn'>
                  <Image
                    source={{uri: 'https://image.freepik.com/free-vector/facebook-logo--vector--psd_286-2147488451.jpg'}}
                    style={styles.logo} />
                </Animatable.View>
                <UppercasedText style={[Styles.Text, Styles.Emphasized, styles.title]}>
                  Facebook, Inc.
                </UppercasedText>
                <Text style={[Styles.Text, styles.subtitle]}>
                  The world's social platform
                </Text>
              </View>
              <View style={styles.stats}>
                <GradientButton
                  label='以下 Following'
                  style={styles.followButton} />
                <AvatarGroup
                  uids={[1, 2, 3, 4, 5, 6]}
                  limit={6}
                  size={32}
                  backgroundColor={Colors.Background} />
                <Text style={[
                  Styles.Text, Styles.SmallText, styles.followers]}>
                  其他 33,482 人正在追踪 Facebook, Inc.
                </Text>
              </View>
            </View>
            <View style={[styles.content, styles.bio]}>
              <UppercasedText style={[
                Styles.Text, Styles.SmallText, Styles.Emphasized, styles.sectionHeader]}>
                What they do
              </UppercasedText>
              <Text style={[Styles.Text, styles.sectionText]}>
                Facebook（原本稱作thefacebook）是一家位於美國加州圣马特奥县门洛帕克市的線上社交网络服务網站。其名稱的靈感來自美國高中提供給學生包含照片和聯絡資料的通訊錄（或稱花名冊）暱稱「face book」[6][7]。
              </Text>
              <Text style={[Styles.Text, styles.sectionText]}>
                除了文字訊息之外，使用者可傳送圖片、影片、貼圖和聲音媒體訊息（現在也可以傳送其他檔案類型如.doc,.docx,.xls,.xlsx等，但是.exe可能會被禁止傳送）給其他使用者，以及透過整合的地圖功能分享使用者的所在位置。Facebook是在2004年2月4日由馬克·扎克伯格與他的哈佛大學室友們所創立[8]。Facebook的會員最初只限於哈佛學生加入，但後來逐漸擴展到其他在波士頓區域的同學也能使用，包括一些常春藤名校、MIT、紐約大學、史丹福大學等。接著逐漸支援讓其他大學和高中學生加入，並在最後開放給任何13歲或以上的人使用。現在Facebook允許任何聲明自己年滿13歲的使用者註冊[9]。
              </Text>
            </View>
            <View style={[styles.content, styles.tags]}>
              <Tag outline color={Colors.Text} label='Social' />
              <Tag outline color={Colors.Text} label='App' />
              <Tag outline color={Colors.Text} label='Fortune 500' />
              <Tag outline color={Colors.Text} label='Tech' />
              <Tag outline label='Fastest growing of 2016' />
              <Tag fontColor={Colors.AlternateText} label='Top 10' />
              <Tag fontColor={Colors.AlternateText} label='Best of 2017' />
            </View>
          </ScrollView>
        </ContentCoverSlider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Sizes.Height,
    backgroundColor: Colors.Background
  },

  logo: {
    width: Sizes.InnerFrame * 3,
    height: Sizes.InnerFrame * 3
  },

  cover: {
    height: Sizes.Height / 3
  },

  header: {
    marginTop: Sizes.Height / 3 - Sizes.OuterFrame * 2,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  content: {
    padding: Sizes.InnerFrame
  },

  summary: {
    flex: 2
  },

  stats: {
    flex: 3,
    alignItems: 'center',
    margin: Sizes.OuterFrame,
    marginRight: 0
  },

  followButton: {
    marginBottom: Sizes.InnerFrame,
    alignSelf: 'center'
  },

  title: {
    marginTop: Sizes.InnerFrame * 2
  },

  subtitle: {
    marginTop: Sizes.InnerFrame / 2
  },

  sectionHeader: {
    marginBottom: Sizes.InnerFrame / 2
  },

  sectionText: {
    marginBottom: Sizes.InnerFrame
  },

  bio: {
    backgroundColor: Colors.Foreground,
    padding: Sizes.OuterFrame + Sizes.InnerFrame,
    paddingBottom: 0
  },

  tags: {
    padding: Sizes.OuterFrame + Sizes.InnerFrame,
    paddingTop: Sizes.InnerFrame,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: Colors.Foreground
  }
});
