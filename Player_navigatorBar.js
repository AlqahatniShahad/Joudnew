import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';
import Player_dashboard from '../Screens/Player/Player_dashboard.js';
import Player_content from '../Screens/Player/Player_content.js';
import Player_startgame from '../Screens/Player/Player_startgame.js';
import Player_setting from '../Screens/Player/Player_setting.js';



const Tab = createMaterialBottomTabNavigator();

const{height,width,right,left}=Dimensions.get('window')
export default function MyTabs() {
  return (

   
    <Tab.Navigator
      initialRouteName="Player_dashboard"
      activeColor="#4C5785"
      barStyle={{ backgroundColor: '#EBF2F8', borderRadius:15,width:width, height:height*0.11, alignItems:'center',buttom:25}}
    >

      

<Tab.Screen
        name="Player_content"
        component={Player_content}
        options={{
          tabBarLabel: 'المحتوى',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons  name="comment-text-outline" color={color} size={26} />
          ),
        }}
      /> 

     
     
     <Tab.Screen
        name="Player_dashboard"
        component={Player_dashboard}
        options={{
          tabBarLabel: 'لوحة التحكم  ',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tune-vertical" color={color} size={26} />
          ),
        }}
      />  
       <Tab.Screen
        name="Player_startgame"
        component={Player_startgame}
        options={{
          tabBarLabel: 'بدا اللعبة',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad-square-outline" color={color} size={26} />
          ),
        }}
      />  
 <Tab.Screen
        name="Player_setting"
        component={Player_setting}
        options={{
          tabBarLabel: 'الإعدادات ',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons  name="account-outline" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>

   
  );
}

      
/*
<Tab.Screen
        name="Player_content"
        component={Player_content}
        options={{
          tabBarLabel: 'المحتوى',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons  name="comment-text-outline" color={color} size={26} />
          ),
        }}
      /> */
