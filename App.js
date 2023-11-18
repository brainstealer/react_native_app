import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [userName, setUserName] = useState('');
    const [userSecondName, setUserSecondName] = useState('');
    const [userList, setUserList] = useState([]);
    const addUser = () => {
        if (userName && userSecondName) {
            const newUser = {
                id: Date.now(),
                userName: userName,
                userSecondName: userSecondName,
            
            }
            setUserList([...userList, newUser]);
        }
        setUserName('');
        setUserSecondName('');
    }

    const clearInput = () => {
        setUserName('');
        setUserSecondName('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setUserName(newText)}
                    placeholder='First name'
                    defaultValue={userName}
                    />
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setUserSecondName(newText)}
                    placeholder='Second name'
                    defaultValue={userSecondName}
                    />
                
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Clear'
                    onPress={clearInput}
                    />
                <Button 
                    title='Add user'
                    onPress={addUser}
                    />
            </View>
            <View style={styles.userList}>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={userList}
                        renderItem={({ item }) => 
                            <Text>{item.userName} {item.userSecondName}</Text>
                        }
                    />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 5,
    },
    inputContainer: {
        flexDirection: 'column',
        width: '90%',
        rowGap: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,


    },
    buttonContainer: {
        flexDirection: 'row',
        columnGap: 5,
    },
    userList: {
        height: '70%'
    }
});
