import {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

const GoalInput = (props: any) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  function goalInputHandler(enteredText: any) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.imageBox} source={require('../assets/logo.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          autoFocus={true}
          placeholderTextColor="#fff"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color={'#f31282'} title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button  color={'#b180f0'} title="Add Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#663af2',
    
    
  },
  imageBox: {
    width: 100,
    height: 100,
    margin: 20
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    color:'#fff',
    borderRadius: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    color:'#fff',
    width: '100%',
    padding: 8,
  },
});
export default GoalInput;
