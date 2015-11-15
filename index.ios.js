'use strict';

var React = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
} = React;

var LocalizedStrings = require('react-native-localization');
var strings = new LocalizedStrings({
  en: require('./translation/en.json'),
  de: require('./translation/de.json')
});

var MainView = React.createClass({
  render: function() {
    return (
      <View style={styles.main}>
        <Text style={styles.headline}>{strings.headline}</Text>
        <Text>{strings.subtext}</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  headline: {
    fontSize: 20
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

AppRegistry.registerComponent('ReactNativeLocalizationTransifex', () => MainView);
