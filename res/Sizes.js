import {
  Dimensions
} from 'react-native';

let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

export const Sizes = {

  // screen
  Width: Width,
  Height: Height,

  // text
  H1: 24,
  H2: 21,
  H3: 18,
  Text: 12,
  SmallText: 8,

  // weights
  Bold: '600',
  Normal: '300',
  Light: '100',

  // padding
  OuterFrame: 25,
  InnerFrame: 15,

  // div
  Divider: 15,

  // decor
  RoundedBorders: 5,

  // buttons
  SquareButton: 50
};

export default Sizes;
