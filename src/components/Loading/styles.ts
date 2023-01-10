import { StyleSheet } from 'react-native';
import { Layout } from 'constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    zIndex: 1,
    height: Layout.window.height,
    width: Layout.window.width,
  },
  text:{
    alignSelf: 'center',
    fontSize: 13
  },
  content: {
    marginBottom: 0
  }
});

export default styles;