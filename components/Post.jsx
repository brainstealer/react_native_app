import React from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

const Post = ({title, avatar, description}) => {
    const popUp = () =>  alert(title)

    return (
        <TouchableHighlight onPress={popUp}>
            <View style={styles.postContainer}>
                <Image
                    style={styles.image}
                    source={{
                    uri: avatar
                }}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 5,
        width: 180,
        height: 450,
        borderWidth: 2,
        borderColor: 'black',
        rowGap: 5,
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    title: {
        textAlign: 'center',
        width: 'auto'
    },
    description: {
        textAlign: 'center',
        width: 'auto',
        fontSize: 18
    }
})

export default Post;