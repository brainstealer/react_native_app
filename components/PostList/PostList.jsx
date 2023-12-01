import React, {useState, useEffect} from 'react'
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, ScrollView} from 'react-native'
import Post from '../Post/Post';

const PostList = ({navigation}) => {
    const [posts, setPosts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

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

    const handleRefresh = () => {
        setRefreshing(true);
        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
            .finally(() => setRefreshing(false))
        
    }

    return (
        <SafeAreaView>
            {/* <ScrollView >
                <View style={styles.postList}>
                    {posts.map((item, index) =>
                        <TouchableOpacity onPress={() => popUp(item.title, item.description)}>
                            <Post key={item.id} title={item.title} description={item.description} avatar={item.avatar} />
                        </TouchableOpacity>

                    )}
                </View>
            </ScrollView> */}

                <FlatList

                        contentContainerStyle={styles.container}
                        data={posts}
                        keyExtractor={(item) => { return item.id }}
                        renderItem={({item}) => 
                            <TouchableOpacity onPress={() => popUp(item.title, item.description)}>
                                <Post
                                    navigation={navigation}
                                    avatar={item.avatar}
                                    title={item.title}
                                    description={item.description}
                            
                                />
                            </TouchableOpacity>
                           }
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        numColumns={2}

                    />

            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: '#fff',

        justifyContent: 'center',
        flexDirection: 'column',

        
    },

})

export default PostList