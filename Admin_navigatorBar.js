import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';
import admin_home from '../Screens/Admin/Admin_home'
import admin_setting from '../Screens/Admin/Admin_setting.js'
import admin_statics from '../Screens/Admin/Player_statistics.js'
//import admin from '../Screens/Admins_users';

const Tab = createMaterialBottomTabNavigator();
const{height,width,right,left}=Dimensions.get('window')
export default function MyTabs() {
  return (
   
    <Tab.Navigator
      initialRouteName="admin_home"
      activeColor="#4C5785"
      barStyle={{ backgroundColor: '#EBF2F8', borderRadius:15,width:width, height:height*0.11, alignItems:'center',buttom:25}}
    >

 <Tab.Screen
        name="admin_statics"
        component={admin_statics}
        options={{
          tabBarLabel: 'لوحة التحكم  ',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tune-vertical" color={color} size={26} />
          ),
        }}
      />  
<Tab.Screen
        name="admin_home"
        component={admin_home}
        options={{
          tabBarLabel: 'الرئيسية',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      /> 
      <Tab.Screen
        name="setting"
        component={admin_setting}
        options={{
          tabBarLabel: 'الإعدادات ',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}