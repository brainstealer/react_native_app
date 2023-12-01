import React, {useState, useEffect} from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, ScrollView} from 'react-native'
import Post from '../Post/Post';

const PostList = ({navigation}) => {
    const [posts, setPosts] = useState([]);

    let url = 'https://655baee0ab37729791a97996.mockapi.io/api/posts';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    const popUp = (title, description) =>  {
        navigation.navigate('Details', {
            title,
            description,
        })
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.postList}>
                    {posts.map((item, index) =>
                        <TouchableOpacity onPress={() => popUp(item.title, item.description)}>
                            <Post key={item.id} title={item.title} description={item.description} avatar={item.avatar} />
                        </TouchableOpacity>

                    )}
                </View>
            </ScrollView>
            {/* <FlatList
                    style={styles.postList}
                    data={posts}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                        <TouchableOpacity onPress={() => popUp(item.title, item.description)}>
                            <Post
                                avatar={item.avatar}
                                title={item.title}
                                description={item.description}
                        
                            />
                        </TouchableOpacity>}}
                /> */}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingRight: 10,
        paddingLeft: 10,
        flex: 1,
        backgroundColor: '#fff',


    },
    postList: {

        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        width: '100%',
        rowGap: 5,
        columnGap: 5,
        justifyContent: 'center',
        height: '100%'
    }
})

export default PostList