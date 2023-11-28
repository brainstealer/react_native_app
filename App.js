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
        <View>
            <ScrollView>
                <View style={styles.postList}>
                    {posts.map((item, index) =>
                        <Post key={index} title={item.title} description={item.description} avatar={item.avatar} />
                    )}
                </View>
            </ScrollView>
        </View>
        




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

        width: '100%',
        height: '90%'
    },
    postList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        width: '100%',
        rowGap: 5,
        columnGap: 5,
        justifyContent: 'center',
    }
});
