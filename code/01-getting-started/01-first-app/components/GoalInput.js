import {useState} from 'react';
import { StyleSheet , View , TextInput,Button,Modal,Image} from "react-native";



const GoalInput = ({addGoal ,isModalVisible,onCancel}) => {
      const [enteredGoalText,setEnteredGoalText] = useState('');

      const goalInputHandler = (enteredText) => {
             setEnteredGoalText(enteredText);
       };

       const addGoalHandler = () => {
         addGoal(enteredGoalText);
         setEnteredGoalText('');
       };

    return (
        <Modal visible={isModalVisible} animationType='slide'>
          <View style={styles.inputContainer}>
            <Image source={require('../assets/images/goal.png')} style={styles.image}/>
            <TextInput value={enteredGoalText} style={styles.textInput} placeholder="Enter Course Goals" onChangeText={goalInputHandler}/>
            <View style={styles.buttonContainer}> 
                <View style={styles.button}>
                  <Button title="Add Goal" onPress={addGoalHandler} color={'#bc8df9ff'}/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={onCancel} color={'#f31282'}/>
                </View>
            </View>
          </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#311b6b'
    },
    textInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        padding:16,
        width:'90%',
        borderRadius:6,
        backgroundColor:'#ffffff'
    },
    image:{
        width:100,
        height:100,
        marginBottom:20
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:16,
        justifyContent : 'space-between',
    },
    button : {
        width:'40%',
        marginHorizontal:8
    }
});
