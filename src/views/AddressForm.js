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
import Region from '../components/forms/Region';

export default class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      selectedProvince: '110000',
      selectedCity: '110100',
      selectedArea: '110101',
      visible: false
    }
  }

  change = () => {
    this.setState({
      changed: true
    })
  }

  changeProvince = (province, city, area) => {
    this.setState({
      selectedProvince: province,
      selectedCity: city,
      selectedArea: area,
      changed: true
    })
  }

  changeCity = (city, area) => {
    this.setState({
      selectedCity: city,
      selectedArea: area,
      changed: true
    })
  }

  changeArea = (area) => {
    this.setState({
      selectedArea: area,
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
                  selectedProvince={this.state.selectedProvince}
                  selectedCity={this.state.selectedCity}
                  selectedArea={this.state.selectedArea}
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
          <Region
            ref={'region'}
            selectedProvince={this.state.selectedProvince} //初始化省，不传默认也是北京
            selectedCity={this.state.selectedCity} //初始化市，不传默认也是北京
            selectedArea={this.state.selectedArea} //初始化区，不传默认为东城区
            changeProvince={this.changeProvince.bind(this)}
            changeCity={this.changeCity.bind(this)}
            changeArea={this.changeArea.bind(this)}
            onSubmit={(params) => console.log(params)}
            onCancel={() => console.log('cancel')}
          />
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
    height: Sizes.Height / 3,
    width: Sizes.Width - Sizes.InnerFrame*2,
  },

  image: {
    height: 200,
    backgroundColor: Colors.MenuBackground
  }
});
