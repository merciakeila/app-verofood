import { StyleSheet } from 'react-native';
import {Layout, Global, Colors} from 'constants/index';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Layout.window.width,
    height: Layout.window.height
  }
});

export default styles;