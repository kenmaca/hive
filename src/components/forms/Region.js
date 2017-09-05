import React, {
  Component
} from 'react';
import {
  View, Text, Picker, StyleSheet, TouchableOpacity, Platform
} from 'react-native';
import {
  Sizes, Colors, Styles
} from '../../Const';

// components
import regionApi from './regionApi';

export default class Region extends Component{

  static defaultProps = {
    //默认不显示
    visible: false,
    //默认显示北京(省)
    selectedProvince: '110000',
    //默认显示北京(市)
    selectedCity: '110100',
    //默认显示(区)
    selectedArea: '110101',
    //确定
    onSubmit: {},
    //取消
    onCancel: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      //省
      province: [],
      //市
      city: [],
      //地区
      area: [],
      //选中的省
      selectedProvince: this.props.selectedProvince,
      //选中的市
      selectedCity: this.props.selectedCity,
      //选中的地区
      selectedArea: this.props.selectedArea,
    };
  }

  componentDidMount() {
    regionApi
      .fetchRegionData()
      .then((data) => {
        //cache it.
        this._data = data;

        //过滤省
        var province = this._filter('086');
        this._selectedProvinceName = this._data[this.state.selectedProvince][0];

        //过滤省对于的市
        var city = this._filter(this.state.selectedProvince);

        //市的名字
        this._selectedCityName = '';
        if (this.state.selectedCity) {
          this._selectedCityName = this._data[this.state.selectedCity][0];
        }

        //过滤第一个市对应的区
        var area = [];
        if (this.state.selectedCity) {
          area = this._filter(this.state.selectedCity);

          this._selectAreaName = '';
          if (this.state.selectedArea) {
            this._selectAreaName = this._data[this.state.selectedArea][0];
          }
        }

        this.setState({
          province: province,
          city: city,
          area: area
        });
      });
  }

  renderPickers() {
    return (
      <View style={Styles.EqualColumns}>
        {/*省市区级联*/}
        {/*省*/}
        <Picker
          style={styles.regionItem}
          onValueChange={this._handleProvinceChange}
          selectedValue={this.state.selectedProvince}>
          {this.state.province.map((v, k) => {
            return (
              <Picker.Item value={v[0]} label={v[1]} key={k}/>
            );
          })}
        </Picker>

        {/*市*/}
        <Picker
          style={styles.regionItem}
          onValueChange={this._handleCityChange}
          selectedValue={this.state.selectedCity}>
          {this.state.city.map((v, k) => {
            return (<Picker.Item value={v[0]} label={v[1]} key={k}/>);
          })}
        </Picker>

        {/*区*/}
        <Picker
          style={styles.regionItem}
          onValueChange={this._handleAreaChange}
          selectedValue={this.state.selectedArea}>
          {this.state.area.map((v, k) => {
            return (<Picker.Item value={v[0]} label={v[1]} key={k}/>);
          })}
        </Picker>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPickers()}
      </View>
    );
  }

  /**
   * 处理省的改变
   */
  _handleProvinceChange = (province)=>{
    //设置选中的省的名称
    this._selectedProvinceName = this._data[province][0];

    //过滤出改变后，省对应的市
    var city = this._filter(province);
    //省下面没有市，包括台湾，香港，澳门
    if (city.length === 0) {
      this._selectAreaName = '';
      this._selectedCityName = '';

      this.setState({
        selectedProvince: province,
        selectedCity: '',
        selectedArea: '',
        city: [],
        area: []
      }, () => this.props.changeProvince(this.state.selectedProvince));
    } else {
      this._selectedCityName = city[0][1];
      //过滤区域
      var area = this._filter(city[0][0]);
      //区域名称
      this._selectAreaName = area[0][1];

      this.setState({
        selectedProvince: province,
        selectedCity: city[0][0],
        selectedArea: area[0][0],
        city: city,
        area: area,
      }, () => this.props.changeProvince(this.state.selectedProvince, this.state.selectedCity, this.state.selectedArea));
    }
  }

  /**
   * 处理市改变
   */
  _handleCityChange = (city)=>{
    this._selectedCityName = this._data[city][0];

    //过滤出市变化后，区
    var area = this._filter(city);
    if (area.length === 0) {
      this._selectAreaName = '';
      this.setState({
        selectedCity: city,
        selectedArea: '',
        area: []
      }, () => this.props.changeCity(this.state.selectedCity));
    } else {
      this._selectAreaName = area[0][1];

      this.setState({
        selectedCity: city,
        selectedArea: area[0][0],
        area: area
      }, () => this.props.changeCity(this.state.selectedCity, this.state.selectedArea));
    }
  }

  /**
   * 处理区域改变
   */
  _handleAreaChange = (area)=>{
    this._selectAreaName = this._data[area][0];

    this.setState({
      selectedArea: area
    }, () => this.props.changeArea(this.state.selectedArea))
  }

  /**
   * 处理取消
   */
  _handleCancel = ()=>{
    this.props.onCancel()
  }

  /**
   * 处理确定
   */
  _handleSubmit = ()=>{
    this.props.onSubmit({
      province: this.state.selectedProvince,
      city: this.state.selectedCity,
      area: this.state.selectedArea,
      provinceName: this._selectedProvinceName,
      cityName: this._selectedCityName,
      areaName: this._selectAreaName
    })
  }

  /**
   * 根据pid查询子节点
   */
  _filter = (pid)=>{
    var result = [];

    for (var code in this._data) {
      if (this._data.hasOwnProperty(code)
          && this._data[code][1] === pid) {
        result.push([code, this._data[code][0]]);
      }
    }

    return result;
  }

}

const styles = StyleSheet.create({
  container: {
  },

  regionItem: {
    width: Sizes.Width / 3.5
  }
});
