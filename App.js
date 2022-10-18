import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';
import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import splash from './src/Screens/common/Splash';
import start from './src/Screens/common/start.js';
import login from './src/Screens/common/Login.js';
import signup from './src/Screens/common/Signup.js';
import admin_home from './src/Screens/Admin/Admin_home.js';
import admin_setting from './src/Screens/Admin/Admin_setting.js';
import questions from './src/Screens/Admin/Question.js';
import players_statistics from './src/Screens/Admin/Player_statistics';
import users from './src/Screens/Admin/Users.js';
import admin_navigator from './src/component/Admin_navigatorBar';
import forget_password from './src/Screens/common/forget_password.js';
import admin from './src/Screens/Admin/Admins_users.js';
import EditiPlayerProfile from './src/Screens/Admin/EditiPlayerProfile'
import player from './src/Screens/Admin/Players_users.js';
import add_admin from './src/Screens/Admin/Add_admin.js';
import add_player from './src/Screens/Admin/Add_player.js';
import update_admin from './src/Screens/Admin/updateAdmin_setting.js';
import Navigator_player from './src/component/Player_navigatorBar';
import video from './src/Screens/Admin/Admin_video';
import EditVideo from './src/Screens/Admin/EditiVideo';
import AddVideo from './src/Screens/Admin/AddVideo';
import game from './src/Screens/Game/Multiplayer/game.js';
import board from './src/Screens/Game/Board.js';
import vote from './src/Screens/Game/Multiplayer/vote.js';
import Single_player from './src/Screens/Game/Singleplayer/SinglePlayerMode.js';
import SinglePlayerLossTape from './src/Screens/Game/Singleplayer/SingleplayerLossTape.js';
import SinglePlayerLossPessimist from './src/Screens/Game/Singleplayer/SingleplayerLossPessimist';
import SinglePlayerWin from './src/Screens/Game/Singleplayer/SinglePlayerWin.js';
import Select from './src/Screens/Game/Multiplayer/Select';
import WaitingRoom from './src/Screens/Game/Multiplayer/WatingRoom';
import IdEnteration from './src/Screens/Game/Multiplayer/ID_Entration';
import chat from './src/Screens/Game/Multiplayer/Chat';
import Game__ from './src/Screens/Game/Multiplayer/Game__';
import Instruction from './src/Screens/Player/Instruction';
import MultiplayerWin from './src/Screens/Game/Multiplayer/MultiplayerWin';
import MultiplayerLossTape from './src/Screens/Game/Multiplayer/MultiplayerLossTape';
import MultiplayerLossPessimis from './src/Screens/Game/Multiplayer/MultiplayerLossPessimist';
import EditiAdminProfile from './src/Screens/Admin/EditiAdminProfile';
import TypeOfQuestion from './src/Screens/Admin/TypeQuestion';
import AddTFq from './src/Screens/Admin/AddTFQuestion';
import AddMcq from './src/Screens/Admin/AddMcq';
import sound from './src/Screens/Player/soundplayer'
import EditiMcq from './src/Screens/Admin/EditiMcq'
import EditiTfq from './src/Screens/Admin/EditiTFquestion'
import Instruction2 from './src/Screens/Game/Multiplayer/muinstrution'

const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="start" component={start} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={login} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={signup} options={{ headerShown: false }} />
        <Stack.Screen name="admin_Home" component={admin_home} options={{ headerShown: false }} />
        <Stack.Screen name="questions" component={questions} options={{ headerShown: false }} />
        <Stack.Screen name="players_statistics" component={players_statistics} options={{ headerShown: false }} />
        <Stack.Screen name="Instruction2" component={Instruction2} options={{ headerShown: false }} />
        <Stack.Screen name="users" component={users} options={{ headerShown: false }} />
        <Stack.Screen name="admin_navigator" component={admin_navigator} options={{ headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name="admin_setting" component={admin_setting} options={{ headerShown: false }} />
        <Stack.Screen name="forget_password" component={forget_password} options={{ headerShown: false }} />
        <Stack.Screen name="admin" component={admin} options={{ headerShown: false }} />
        <Stack.Screen name="player" component={player} options={{ headerShown: false }} />
        <Stack.Screen name="add_admin" component={add_admin} options={{ headerShown: false }} />
        <Stack.Screen name="add_player" component={add_player} options={{ headerShown: false }} />
        <Stack.Screen name="update_admin" component={update_admin} options={{ headerShown: false }} />
        <Stack.Screen name="player_navigator" component={Navigator_player} options={{ headerShown: false ,gestureEnabled: false}} />
        <Stack.Screen name="game" component={game} options={{ headerShown: false }} />
        <Stack.Screen name="board" component={board} options={{ headerShown: false }} />
        <Stack.Screen name="vote" component={vote} options={{ headerShown: false }} />
        <Stack.Screen name="SinglePlayerMode" component={Single_player} options={{ headerShown: false }} />
        <Stack.Screen name="SinglePlayerLossTape" component={SinglePlayerLossTape} options={{ headerShown: false ,gestureEnabled: false}} />
        <Stack.Screen name="SinglePlayerLossPessimist" component={SinglePlayerLossPessimist} options={{ headerShown: false ,gestureEnabled: false}} />
        <Stack.Screen name="SinglePlayreWin" component={SinglePlayerWin} options={{ headerShown: false, gestureEnabled: false,gestureEnabled: false }} />
        <Stack.Screen name="Select" component={Select} options={{ headerShown: false }} />
        <Stack.Screen name="WaitingRoom" component={WaitingRoom} options={{ headerShown: false }} />
        <Stack.Screen name="IdEnteration" component={IdEnteration} options={{ headerShown: false }} />
        <Stack.Screen name="Game__" component={Game__} options={{ headerShown: false}} />
        <Stack.Screen name="Instruction" component={Instruction} options={{ headerShown: false }} />
        <Stack.Screen name="MultiplayerWin" component={MultiplayerWin} options={{ headerShown: false ,gestureEnabled: false}} />
        <Stack.Screen name="MultiplayerLossTape" component={MultiplayerLossTape} options={{ headerShown: false,gestureEnabled: false }} />
        <Stack.Screen name="MultiplayerLossPessimis" component={MultiplayerLossPessimis} options={{ headerShown: false,gestureEnabled: false }} />
        <Stack.Screen name="EditiPlayerProfile" component={EditiPlayerProfile} options={{ headerShown: false }} />
        <Stack.Screen name="EditiAdminProfile" component={EditiAdminProfile} options={{ headerShown: false }} />
        <Stack.Screen name="video" component={video} options={{ headerShown: false }} />
        <Stack.Screen name="EditVideo" component={EditVideo} options={{ headerShown: false }} />
        <Stack.Screen name="AddVideo" component={AddVideo} options={{ headerShown: false }} />
        <Stack.Screen name="TypeOfQuestion" component={TypeOfQuestion} options={{ headerShown: false }} />
        <Stack.Screen name="AddTFq" component={AddTFq} options={{ headerShown: false }} />
        <Stack.Screen name="AddMcq" component={AddMcq} options={{ headerShown: false }} />
        <Stack.Screen name="sound" component={sound} options={{ headerShown: false }} />
        <Stack.Screen name="EditiMcq" component={EditiMcq} options={{ headerShown: false }} />
        <Stack.Screen name="EditiTfq" component={EditiTfq} options={{ headerShown: false }} />
         
        <Stack.Screen name="chat" component={chat} options={({ navigation }) => ({
          headerShown: true, title: 'الدردشة', headerStyle: {
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }, presentation: 'transparentModal', transitionConfig: () => ({
            containerStyle: {
              backgroundColor: 'transparent'
            }
          }), headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Icon name="chevron-left" style={{
                  color: "white",
                  fontSize: 30,
                }}></Icon>
                <Text style={{
                  color: "white",
                  fontSize: 16,
                }}>الرجوع</Text></View>
            </TouchableOpacity>
          ),
        })} />

      </Stack.Navigator>
    </NavigationContainer>
  );

};
export default MyStack;
/*<Stack.Screen name="login" component={login}  options={{headerShown:false}}/>

        <Stack.Screen name="signup" component={signup} options={{headerShown:false}}/>
        <Stack.Screen name="admin_Home" component={admin_home} options={{headerShown:false}}/>
        <Stack.Screen name="videos" component={video} options={{headerShown:false}}/>
        <Stack.Screen name="questions" component={questions} options={{headerShown:false}}/>
        <Stack.Screen name="players_statistics" component={players_statistics} options={{headerShown:false}}/>
        <Stack.Screen name="users" component={users} options={{headerShown:false}}/>
        <Stack.Screen name="admin_navigator" component={admin_navigator} options={{headerShown:false}}/>
        <Stack.Screen name="admin_setting" component={admin_setting} options={{headerShown:false}}/>
        <Stack.Screen name="forget_password" component={forget_password} options={{headerShown:false}}/>
        <Stack.Screen name="admin" component={admin} options={{headerShown:false}}/>
        <Stack.Screen name="player" component={player} options={{headerShown:false}}/>
        <Stack.Screen name="add_admin" component={add_admin} options={{headerShown:false}}/>
        <Stack.Screen name="add_player" component={add_player} options={{headerShown:false}}/>
        <Stack.Screen name="update_admin" component={update_admin} options={{headerShown:false}}/>
        <Stack.Screen name="player_navigator" component={Navigator_player} options={{headerShown:false}}/>*/
          //   <Stack.Screen name="splash" component={splash} options={{headerShown:false}}/>