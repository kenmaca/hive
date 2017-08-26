import React, {
  Component
} from 'react';
import {
  View, StyleSheet, ScrollView, Text, TextInput, Image, TouchableOpacity
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../Const';
import {
  LinearGradient
} from 'expo';

//components
import ContentCoverSlider from '../components/common/ContentCoverSlider';
import {
  Button
} from 'react-native-elements';
import FormInputField from '../components/forms/FormInputField';
import FormPicker from '../components/forms/FormPicker';
import PickerList from '../components/forms/PickerList';
import {
  Actions
} from 'react-native-router-flux';
import Modal from 'react-native-modalbox';

export default class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      province: '广东省',
      city: '广州市',
      district: '海珠区'
    }
  }

  change = () => {
    this.setState({
      changed: true
    })
  }

  changeProvince = (val) => {
    this.setState({
      province: val,
      changed: true
    })
  }

  changeCity = (val) => {
    this.setState({
      city: val,
      changed: true
    })
  }

  changeDistrict = (val) => {
    this.setState({
      district: val,
      changed: true
    })
  }

  renderImage = () => {
    return (
      <Image
        source={{
          uri: 'https://c2.staticflickr.com/8/7585/26457494503_7f050b669f_o.png'
        }}
        style={[Styles.Card, styles.image]}>
      </Image>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ContentCoverSlider
          ref='container'
          background={this.renderImage()}
          title='Address'>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={event => this.refs.container.onScroll(event)}>
            <View style={[
                styles.card, styles.header
              ]}>
              <Text style={[
                  Styles.Text, Styles.Emphasized, Styles.Title, Styles.Alternate
                ]}>
                填寫地址 Enter your Address
              </Text>
            </View>
            <View style={[Styles.Card, styles.card]}>
              <FormInputField
                ref={'street'}
                placeholder='街道/門牌 Street and Apt Number'/>
              <TouchableOpacity
                onPress={() => this.refs.picker.open()}>
                <FormPicker
                  province={this.state.province}
                  city={this.state.city}
                  district={this.state.district}
                  changed={this.state.changed}
                  iconRight='arrow-drop-down'/>
              </TouchableOpacity>
              <FormInputField
                ref={'postal'}
                placeholder='郵編 Postal Code'
                keyboardType='number-pad'
                maxLength={6}/>
            </View>
            <Button
              icon={{
                name: 'arrow-forward',
                size: Sizes.Text
              }}
              iconRight
              title='保存 Save'
              backgroundColor={Colors.PositiveButton}
              textStyle={[Styles.Text, Styles.Emphasized, Styles.Alternate]}
              buttonStyle={[styles.field, styles.fieldSpacing]} />
          </ScrollView>
        </ContentCoverSlider>
        <Modal
          ref='picker'
          position='bottom'
          backdropOpacity={0.7}
          style={[Styles.Card, styles.modal]}>
          <View style={[Styles.EqualColumns]}>
            <PickerList
              change={this.change.bind(this)}
              changed={this.state.changed}
              changeProvince={this.changeProvince.bind(this)}
              province={this.state.province}
              changeCity={this.changeCity.bind(this)}
              city={this.state.city}
              changeDistrict={this.changeDistrict.bind(this)}
              district={this.state.district}/>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },

  card: {
    margin: Sizes.InnerFrame,
    marginTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
  },

  header: {
    marginTop: 125
  },

  error: {
    marginTop: Sizes.InnerFrame,
    marginBottom: 5,
    color: Colors.NegativeButton
  },

  field: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  },

  fieldSpacing: {
    marginTop: 0
  },

  terms: {
    margin: Sizes.InnerFrame,
    color: Colors.SubduedText
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Sizes.Height / 4,
    width: Sizes.Width - Sizes.InnerFrame*2,
  },

  image: {
    height: 200
  }
});
