/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import GoalItem from './Components/GoalItme';
import GoalInput from './Components/GoalInput';
export default function App() {
  const [courseGoals, setGoals] = useState<{text: string; id: string}[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function modalVisibleHandler() {
    setModalVisible(true);
  }
  function endAddGoalHandler() {
    setModalVisible(false);
  }
  function addGoalHandler(enteredGoalText: any) {
    setGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }
  function deleteGoal(id: string) {
    setGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }
  
  return (
    <>
     
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#1fa233"
          onPress={modalVisibleHandler}
        />

        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoal}

                />
              );
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 16,
    backgroundColor: '#1a085a',
  },
  btn: {
    color: '#ffff',
  },
  goalsContainer: {
    flex: 4,
  },
});
