// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View ,FlatList,Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import {StatusBar} from 'expo-status-bar';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([]);
  const [isModalVisible,setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    if(enteredGoalText.trim() !== ''){
      setCourseGoals((prevGoals)=>[...prevGoals,enteredGoalText]);
    }
    endModalVisibleHandler();
  };

  const onDeleteHandler = (id) => {
    setCourseGoals((prevGoals)=>prevGoals.filter((goal,index)=>index!==id))
  }

  const isModalVisibleHandler = () => {
    setIsModalVisible(true);
  }

  const endModalVisibleHandler = () => {
    setIsModalVisible(false);
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#b890edff'
          onPress={isModalVisibleHandler}
        />
        <GoalInput
          addGoal={addGoalHandler}
          isModalVisible={isModalVisible}
          onCancel={endModalVisibleHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item}
                id={itemData.index}
                onDeleteItem={onDeleteHandler}
              />
            )}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
     appContainer:{
      flex:1,
      paddingTop:50,
      paddingHorizontal:16,
      backgroundColor:'#1e085e'
     },
     goalsContainer:{
       flex:4
     },
});
