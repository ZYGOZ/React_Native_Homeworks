import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput, Button } from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [inputText, setInputText] = useState('');
  const [customObjects, setCustomObjects] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <Text>Name: {item.name}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );

  const handleAddObject = () => {
    if (inputText.trim() !== '') {
      setCustomObjects(prevState => [...prevState, { name: inputText, email: 'custom@example.com' }]);
      setInputText('');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={users.concat(customObjects)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        onChangeText={text => setInputText(text)}
        value={inputText}
        placeholder="Enter name"
      />
      <Button title="Add Object" onPress={handleAddObject} />
    </View>
  );
};

export default App;
