import React, {useEffect, useState} from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Post from './components/Post';

export default function App() {
    const [posts, setPosts] = useState([]);

    let url = 'https://655baee0ab37729791a97996.mockapi.io/api/posts';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={styles.container}>
                    <FlatList
                            style={styles.postList}
                            keyExtractor={(item) => item.id}
                            data={posts}
                            renderItem={({ item }) => 
                                <Post
                                    style={styles.post}
                                    avatar={item.avatar}
                                    title={item.title}
                                    decription={item.description}
                                />
                            }
                        />
            </ScrollView>
        </SafeAreaView>
        




    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 50,
        flex: 1,
        backgroundColor: '#fff',
        rowGap: 5,
        width: '100%',
        height: '90%'
    },
    postList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        width: '100%',
    }
});
