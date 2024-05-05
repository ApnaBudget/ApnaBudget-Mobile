import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const TabBarIcon = ( props ) => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="reports"
        options={{
          title: 'Report',
          tabBarIcon: ({ color }) => <TabBarIcon name="file-text-o" color={color} />,
        }}
      />

    <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
      
    </Tabs>
  );
}

export default TabLayout;