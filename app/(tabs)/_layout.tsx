import {Tabs} from 'expo-router';
import {Text} from 'react-native';

import {Colors} from '@root/constants';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.dark,
                },
                headerTintColor: Colors.primary,
                headerTitleAlign: 'center',
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarStyle: {
                    backgroundColor: Colors.dark,
                    paddingBottom: 10,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({focused, color}) => <Text style={{color, fontWeight: focused ? 900 : 100}}>H</Text>,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({focused, color}) => <Text style={{color, fontWeight: focused ? 900 : 100}}>A</Text>,
                }}
            />
        </Tabs>
    );
}
