import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, View, Text } from 'react-native'

const PostDetails = ({ route }) => {
    const {title, description} = route.params;
    return (
        <SafeAreaView >
            <Text>
                {title}
            </Text>
            <ScrollView>
                <Text>
                    {description}
                </Text>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    }
})

export default PostDetails