import {StyleSheet,View,Text,Pressable} from 'react-native';

const GoalItem = ({text,id,onDeleteItem}) => {
    // const [deletedItem,setDeletedItem] = useState('');

    const onDeleteHandler = () => {
        onDeleteItem(id);
    }
    return (
        <View key={id} style={styles.goalItem}>
          <Pressable onPress={onDeleteHandler} android_ripple={{color:'#210644'}} style={({pressed})=>pressed && styles.pressedItem}>
            <Text style={styles.goalText}>{text}</Text>
          </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#5e0acc',
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  pressedItem:{
    opacity:0.5
  },
  goalText: {
    color: 'white',
    padding: 8,
    fontSize: 16,
    fontFamily: 'open-sans'
  }
});