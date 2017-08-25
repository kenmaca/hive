import React from 'react';
import {
  StyleSheet, View, Platform, StatusBar, Picker
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

export default class PickerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        '广东省': {
          '广州市': ['海珠区','荔湾区'],
          '深圳市': ['罗湖区', '福田区', '南山区', '宝安区', '龙岗区', '盐田区'],
          '佛山市': ['南海区', '顺德区', '禅城区', '三水区', '高明区']
        },
        '上海市': {
          '市辖区': ['黄浦区', '卢湾区', '徐汇区', '长宁区', '静安区', '浦东新区', '南汇区'],
          '县': ['崇明县']
        },
        '北京市': {
          '市辖区': ['东城区', '西城区', '崇文区', '宣武区', '朝阳区', '丰台区', '石景山区', '海淀区', '房山区',
           '通州区']
        },
        '香港': {

        },
        '台湾': {

        }
      },
      provinceBefore: '广东省',
      province: this.props.province,
      city: this.props.city,
      district: this.props.district,
      changed: this.props.changed
    }
  }

  getCity = () => {
    // console.log(this.state.province + 'province');
    // console.log(this.state.provinceBefore + 'provinceBefore');
    cities = [];
    if (this.state.provice != this.state.provinceBefore) {
      cities = Object.keys(this.state.data[this.state.province])
      // console.log(cities)
      if (cities.length > 0) {
        return cities[0]
      }
    } else {
      // console.log(this.state.city)
      return this.state.city;
    }
  }

  getDistrict = () => {
  }

  renderProvince = () => {
    val = [];
    if (Object.keys(this.state.data).length > 0) {
      val = Object.keys(this.state.data);
      // console.log(val + 'province')
      return (
        val.map(i => {
          return (
            <Picker.Item key={i} label={i} value={i}/>
          )
        })
      )
    }
  }

  renderCity = () => {
    val = [];
    if (Object.keys(this.state.data[this.state.province]).length > 0) {
      val = Object.keys(this.state.data[this.state.province]);
      // console.log(val + 'city');
      return (
        val.map(i => {
          return (
            <Picker.Item key={i} label={i} value={i}/>
          )
        })
      )
    }
  }

  renderDistrict = () => {
    val = [];
    // console.log('district in')
    // console.log(this.state.province);
    // console.log(this.getCity() + 'dontknow')
    if (this.state.data[this.state.province][this.getCity()]) {
      val = this.state.data[this.state.province][this.getCity()];
      // console.log(val + 'district');
      return (
        val.map(i => {
          return (
            <Picker.Item key={i} label={i} value={i}/>
          )
        })
      )
    }
  }

  render() {
    return (
      <View style={Styles.EqualColumns}>
        <Picker
          style={{width: Sizes.Width/ 4}}
          selectedValue={this.props.province}
          onValueChange={(val) => this.setState({
            province: val
          }, () => this.props.changeProvince(this.state.province))}>
          {this.renderProvince()}
        </Picker>
        <Picker
          style={{width: Sizes.Width/ 4}}
          selectedValue={this.state.city}
          onValueChange={(val) => this.setState({
            city: val
          }, () => this.props.changeCity(this.state.city))}>
          {this.renderCity()}
        </Picker>
        <Picker
          style={{width: Sizes.Width/ 4}}
          selectedValue={this.state.district}
          onValueChange={(val) => this.setState({
            district: val
          }, () => this.props.changeDistrict(this.state.district))}>
          {this.renderDistrict()}
        </Picker>
        {/* leave this last empty picker to prevent the indicator line missing */}
        <Picker>
        </Picker>  
        <Picker>
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
