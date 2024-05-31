import React from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList, Image, TextInput, Button } from 'react-native';

// Sample categories with icons
const categories = [
  { id: '1', title: 'Exercise', icon: require('./src/assets/exercise.png') },
  { id: '2', title: 'Study', icon: require('./src/assets/study.png') },
  { id: '3', title: 'Code', icon: require('./src/assets/code.png') },
  { id: '4', title: 'Cook', icon: require('./src/assets/cook.png') },
  { id: '5', title: 'Read', icon: require('./src/assets/read.png') },
  { id: '6', title: 'Meditate', icon: require('./src/assets/meditate.png') },
  { id: '7', title: 'Travel', icon: require('./src/assets/travel.png') },
  { id: '8', title: 'Work', icon: require('./src/assets/work.png') },
];

// Sample tasks
const tasks = [
  { id: '1', title: 'Morning Exercise' },
  { id: '2', title: 'Read a book' },
  { id: '3', title: 'Finish project work' },
  { id: '4', title: 'Cook dinner' },
  { id: '5', title: 'Study React Native' },
  { id: '6', title: 'Attend meeting' },
  { id: '7', title: 'Meditate' },
  { id: '8', title: 'Plan travel itinerary' },
  { id: '9', title: 'Write blog post' },
  { id: '10', title: 'Grocery shopping' },
  { id: '11', title: 'Clean the house' },
  { id: '12', title: 'Call family' },
  { id: '13', title: 'Respond to emails' },
  { id: '14', title: 'Prepare presentation' },
  { id: '15', title: 'Work on side project' },
];

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Task Manager</Text>
    </View>
  );
};

const CategoryList = () => {
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const TaskList = () => {
  return (
    <View style={styles.taskContainer}>
      <TextInput style={styles.input} placeholder="Add a new task" />
      <Button title="Add Task" onPress={() => {}} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <CategoryList />
        <TaskList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200EE',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  categoryContainer: {
    marginVertical: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    width: 50,
    height: 50,
  },
  categoryTitle: {
    marginTop: 8,
    fontSize: 16,
  },
  taskContainer: {
    marginVertical: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  taskItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskTitle: {
    fontSize: 18,
  },
});

export default App;
