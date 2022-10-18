import React, { useState ,useEffect } from 'react';
import { StyleSheet, Text, Alert,View,Image,TouchableOpacity } from 'react-native';
import { collection, query, onSnapshot ,limit, orderBy,getDoc,doc} from "firebase/firestore";
import {authentication,db} from '../../config_firebase/firebase';


export default function Admin_Home({navigation}){

  const [Name,setName]=useState('')
  const user = authentication.currentUser;

  const docref=doc(db,'Admin', user.uid)
  getDoc(docref).then((doc)=>{
  setName(doc.get('name'))
   })
 
  return (
    <View style={styles.container}>

      <View style={styles.Admin_NameC}>

      <Text style={styles.Admin_Name}>  مرحباً  {Name}</Text>
      <Image source={require('../../../assets/circle.png')}
        style={{
          width:62.85,
          height:58.32,
          position:'absolute',
          left: 178.8,
          right: 9.71,
          top: 5.36,
          bottom: 84.95, 
        }}/>

      <Image source={require('../../../assets/Joudicon.png')}
         style={{
           width:60.78,
           height:57.42,
           position: 'absolute',
           left: 181.8,
           right: 9.71,
           top: 5.36,
           bottom: 84.95, 
         }}
      />
      </View>

      <View style={styles.nav}>
      <View style={styles.User}>
      <TouchableOpacity onPress={()=>{navigation.navigate("users")}}>
        <Text style={styles.textstyle1}>المستخدمين</Text> 
        </TouchableOpacity>
      </View>
       
      <View style={styles.Question}>
      <TouchableOpacity onPress={()=>{navigation.navigate("questions")}}>
        <Text style={styles.textstyle2}>الأسئلة</Text> 
        </TouchableOpacity>
      </View>

      <View style={styles.Videos}>
      <TouchableOpacity onPress={()=>{navigation.navigate("video")}}>
        <Text style={styles.textstyle3}>الفديوهات</Text> 
        </TouchableOpacity>
      </View>
      </View>
      {/* {/* <View style={styles.Game_statics}>
      <TouchableOpacity onPress={()=>{navigation.navigate("players_statistics")}}>
        <Text style={styles.textstyle4}>إحصائيات اللعب</Text>  
        </TouchableOpacity> 
      </View> */}
   


</View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    alignContent:'center',alignItems:'center'
  },
  
    Admin_NameC:{
      backgroundColor: '#DAE5EB',
      borderRadius:33,
      width:270,
      height:70,
      position: 'absolute',
      left: '37.33%',
      right: '7.47%',
      top: '13.5%',
      bottom:'83.25%',
},
  
    Admin_Name:{
      color: '#4C5785',
      height:25,
      fontWeight:'700',
      fontSize:20,
      alignContent:'center',
      position: 'absolute',
      left: '5%',
      right: '39.47%',
      top: '25.62%',
  textAlign:'center', 
  },
  nav:{
top:'10%',
alignSelf: "center",
      position: "absolute",
      alignContent: "center",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
  },   
  User:{
      backgroundColor:'#6F96B3',
      position: 'absolute',
      width: 224,
      height: 58,
      borderRadius:33,
     
      top: 260.35,
    },
  
   Question:{
      backgroundColor:'#6F96B3',
      width: 224,
     height: 58,
      borderRadius:100,
      position: 'absolute',
      top: 360.35,},
  
   Videos:{
      backgroundColor:'#6F96B3',
      width: 224,
      height: 58,
      borderRadius:100,
      position: 'absolute',
      top: 460.35,},
    
   Game_statics:{
      backgroundColor:'#6F96B3',
      width: 224,
      height: 58,
      borderRadius:100,
      position: 'absolute',
      left: 100,
      top: 560.35,},
  
   textstyle1:{
      width:224,
      height:26,
      fontSize:20,
      color:'#fff',
      textAlign:'center',
      top:'40.57%'},
  
   textstyle2:{
      width:224,
      height:26,
      fontSize:20,
      color:'#fff',
      textAlign:'center',
      top:'40.57%'},
  
   textstyle3:{
      width:224,
      height:26,
      fontSize:20,
      color:'#fff',
      textAlign:'center',
      top:'40.57%'},
  
   textstyle4:{
      width:224,
      height:26,
      fontSize:20,
      color:'#fff',
      textAlign:'center',
      top:'40.57%'}
  
    });
