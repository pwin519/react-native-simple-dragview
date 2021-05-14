import React, {useRef} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';

export const DraggableView = props => {
  const {show = true, children} = props;

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <>
      {show && (
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [{translateX: pan.x}, {translateY: pan.y}],
            },
          ]}
          {...panResponder.panHandlers}>
          {children}
        </Animated.View>
      )}
    </>
  );
};

// export DraggableView;

const styles = StyleSheet.create({
  animatedView: {
    position: 'absolute',
    alignSelf: 'center',
    top: 100,
  },
});
