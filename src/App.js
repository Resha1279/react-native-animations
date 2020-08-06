import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Easing,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class App extends Component {
  state = {
    animationOpacity: new Animated.Value(1),
    animationTranslate: new Animated.Value(0),
    animationScale: new Animated.Value(1),
    animationFlip: new Animated.Value(1),
    animationWidth: new Animated.Value(100),
    animationHeight: new Animated.Value(100),
    animationColor: new Animated.Value(0),
    animationRotate: new Animated.Value(0),
    animationScroll: new Animated.Value(0),
  };

  startAnimtionOpacity = () => {
    Animated.timing(this.state.animationOpacity, {
      toValue: 0,
      duration: 350,
    }).start(() => {
      Animated.timing(this.state.animationOpacity, {
        toValue: 1,
        duration: 350,
      }).start();
    });
  };

  startAnimtionTranslate = () => {
    Animated.timing(this.state.animationTranslate, {
      toValue: 300,
      duration: 350,
    }).start(() => {
      Animated.timing(this.state.animationTranslate, {
        toValue: 0,
        duration: 350,
        easing: Easing.elastic(3),
      }).start();
    });
  };

  startAnimtionScale = () => {
    Animated.timing(this.state.animationScale, {
      toValue: 5,
      duration: 350,
    }).start(() => {
      Animated.timing(this.state.animationScale, {
        toValue: 1,
        duration: 350,
        easing: Easing.bounce,
      }).start();
    });
  };
  startAnimtionFlip = () => {
    Animated.timing(this.state.animationFlip, {
      toValue: -1,
      duration: 350,
    }).start(() => {
      Animated.timing(this.state.animationFlip, {
        toValue: 1,
        duration: 350,
      }).start();
    });
  };
  startAnimtionWH = () => {
    Animated.timing(this.state.animationWidth, {
      toValue: WIDTH,
      duration: 3500,
    }).start(() => {
      Animated.timing(this.state.animationWidth, {
        toValue: 100,
        duration: 3500,
      }).start();
    });
    Animated.timing(this.state.animationHeight, {
      toValue: HEIGHT,
      duration: 3500,
    }).start(() => {
      Animated.timing(this.state.animationHeight, {
        toValue: 100,
        duration: 3500,
      }).start();
    });
  };
  startAnimtionColor = () => {
    Animated.timing(this.state.animationColor, {
      toValue: 1,
      duration: 350,
    }).start(() => {
      Animated.timing(this.state.animationColor, {
        toValue: 0,
        duration: 350,
      }).start();
    });
  };
  startAnimtionRotate = () => {
    Animated.timing(this.state.animationRotate, {
      toValue: 360,
      duration: 350,
    }).start(() => {
      Animated.timing(this.state.animationRotate, {
        toValue: 0,
        duration: 350,
      }).start();
    });
  };

  render() {
    const scrollInterpolate = this.state.animationScroll.interpolate({
      inputRange: [0, 300],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
    });
    const animatedStylesScroll = {
      backgroundColor: scrollInterpolate,
    };
    const animatedStylesOpacity = {
      opacity: this.state.animationOpacity,
    };
    const animatedStylesTranslate = {
      transform: [
        {
          translateY: this.state.animationTranslate,
        },
      ],
    };
    const animatedStylesScale = {
      transform: [
        {
          scale: this.state.animationScale,
        },
      ],
    };
    const animatedStylesFlip = {
      transform: [
        {
          scaleX: this.state.animationFlip,
        },
      ],
    };
    const animatedStylesWH = {
      width: this.state.animationWidth,
      height: this.state.animationHeight,
    };
    const colorInterpolation = this.state.animationColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
    });
    const animatedStylesColor = {
      backgroundColor: colorInterpolation,
    };
    const rotateInterpolation = this.state.animationRotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const animatedStylesRotate = {
      transform: [
        {
          rotate: rotateInterpolation,
        },
      ],
    };
    return (
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={styles.container}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animationScroll,
                },
              },
            },
          ])}>
          <Animated.View style={[{width: WIDTH, justifyContent:'center',alignItems:'center'},animatedStylesScroll]}>
            <TouchableWithoutFeedback onPress={this.startAnimtionOpacity}>
              <Animated.View style={[styles.box, animatedStylesOpacity]}>
                <Text style={styles.text}>OPACITY</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.startAnimtionTranslate}>
              <Animated.View style={[styles.box, animatedStylesTranslate]}>
                <Text style={styles.text}>TRANSLATE</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.startAnimtionScale}>
              <Animated.View style={[styles.box, animatedStylesScale]}>
                <Text style={styles.text}>SCALE</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.startAnimtionFlip}>
              <Animated.View style={[styles.box, animatedStylesFlip]}>
                <Text style={styles.text}>FLIP</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.startAnimtionWH}>
              <Animated.View style={[styles.box, animatedStylesWH]}>
                <Text style={styles.text}>WIDTH AND HEIGHT</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.startAnimtionColor}>
              <Animated.View style={[styles.box, animatedStylesColor]}>
                <Text style={styles.text}>COLOR</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.startAnimtionRotate}>
              <Animated.View style={[styles.box, animatedStylesRotate]}>
                <Text style={styles.text}>ROTATE</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
