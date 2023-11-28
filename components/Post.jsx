import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = ({title, avatar, description}) => {
    return (
        <View style={styles.postContainer}>
            <Image
                style={styles.image}
                source={{
                uri: avatar
            }}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    postConstainer: {
        flex: 0.5,
        width: 150,
        borderWidth: 1,
        borderColor: 'black'
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    title: {
        textAlign: 'center',
        width: 150
    },
    description: {
        textAlign: 'center',
        width: 180,
        fontSize: 18
    }
})

export default Post;