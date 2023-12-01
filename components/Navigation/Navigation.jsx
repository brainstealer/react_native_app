import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PostDetails from '../PostDetails/PostDetails';
import PostList from '../PostList/PostList';



const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={PostList}/>
                <Stack.Screen name='Details' component={PostDetails} options={{title: '', description: ''}}/>

            </Stack.Navigator>
            
            
        </NavigationContainer>


    )
    }

export default Navigation