import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id != id));
  };

  const addItem = text => {
    if (!text) {
      // Alert.alert('Error', 'Please enter an item', {text: 'OK'});
    } else {
      setItems(prevItems => [{id: 1, text: text}, ...prevItems]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
