import {Pressable, StyleSheet, Text, View} from 'react-native';

type GoalProps = {
  id: string;
  text: string;
  onDeleteGoal: any;
};

const GoalItem = (prop: GoalProps) => {
  return (
    <View style={styles.goalsItems}>
      <Pressable onPress={prop.onDeleteGoal.bind(this, prop.id)} style={(pressData)=> pressData.pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{prop.text} </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalsItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#435fa4',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
