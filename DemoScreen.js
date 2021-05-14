import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {DraggableView} from './src/DraggableView';

const DemoScreen = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          setShow(!show);
        }}>
        <Text style={styles.buttonText}>
          touch here to {show ? 'close' : 'open'} draggable view
        </Text>
      </TouchableOpacity>
      <DraggableView show={show}>
        {/* You can add any conponent here */}
        <View style={styles.blockContainer}>
          <Text>Drag me!</Text>
        </View>
      </DraggableView>
    </View>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    top: 200,
  },
  buttonText: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 4,
  },
  blockContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
});
