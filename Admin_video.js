import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ScrollView, Dimensions,Text, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import { Video } from 'expo-av';
import React, { Component, useState, useLayoutEffect, useEffect } from 'react';
import {  collection,  setDoc, onSnapshot, query, querySnapshot, arrayUnion, getDocs, addDoc, where} from "firebase/firestore";
import { db } from '../../config_firebase/firebase';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const{height,width,right,left}=Dimensions.get('window')

export default function ListVideo({ navigation }) {
  const [VideoList, setVideoList] = useState([]);
  const [status, setStatus] = React.useState({});
  const [filtered, setFiltered] = useState([])
  const [searching, setSearching] = useState(false)
  const video = React.useRef(null);

  const onSearch=(text)=>{
    if (text) {
      setSearching(true)
      const tempList = filtered.filter(item => {
      if (item.videotitle.match(text))
          return item.videotitle })

      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(VideoList)
    }};

  async function getVideo() {
    const VideoCol = collection(db, "Video");
    const VideoSnapshot = await getDocs(VideoCol);
    setVideoList(VideoSnapshot.docs.map((doc) => (
      {
        videotitle: doc.data().videotitle,
        videoURL: doc.data().videoURL,
        videodescription: doc.data().videodescription,
        ID:doc.id,
      })))
    setFiltered(VideoSnapshot.docs.map((doc) => (
      {
        videotitle: doc.data().videotitle,
        videoURL: doc.data().videoURL,
        videodescription: doc.data().videodescription,
        ID:doc.id,
      })))
    
    };

  useEffect(() => {
    getVideo()
  }, [])


  return (

    <View style={styles.container} >
{/*       
      <View style={styles.rectanglesContainer}>
        <View style={styles.rectangle} />
        <View style={styles.rectangle2} />
        <View style={styles.rectangle3} />
      </View>
      <View style={styles.baseTop} /> */}

     <TouchableOpacity  onPress={()=>navigation.goBack()} >
      <Image style={styles.Back_icon}
         source= {require('../../../assets/Backicon.png')}/>  
      </TouchableOpacity>

      <Text style={styles.pagetitle}> دقيقة مع جود  </Text>
      
      <View style={styles.Search_Bar}>
        <TextInput
        style={styles.textInput}
        placeholder={'بحث عن فديو'}
        onChangeText={onSearch}
        />
        <Octicons style={styles.saerchicon} name="search" size={15} color="gray" />

      </View>

     
      <View style={styles.VideoContainer1}>
        <ScrollView >
  <View>
        {filtered.map((element1) => {
            return (
              <View style={styles.VideoContainer2} key={element1.ID}>
                <Video
                  ref={video}
                  style={styles.video}
                  source={{ uri: element1.videoURL }}
                  useNativeControls
                  flex= {1}
                  backgroundColor='white'
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={setStatus}
                />

                <Text style={{ textAlign: 'center', color: '#4C5785', fontSize: 18, fontWeight: 'bold' }}> {element1.videotitle} </Text>
                <Text style={{ textAlign: 'center', color: '#4C5785', fontSize: 16, }} > {element1.videodescription} </Text>
                <TouchableOpacity style={{
                  width: 35, height: 25, backgroundColor: "#4C5785",
                  borderRadius: 50, alignItems: 'center', justifyContent: 'center'
                }}
                  onPress={() => { navigation.navigate("EditVideo",{id :element1.ID})}}>
                  <AntDesign name="edit" size={20} color="white" />
                </TouchableOpacity>
                <StatusBar style="auto" />
              </View>

            )})}
</View>

        </ScrollView>
      </View>

      <View style={styles.circle}>


      <TouchableOpacity onPress={() => navigation.navigate('AddVideo')}>
     <Image style={styles.plusicon}
    source={require('../../../assets/plusicon.png')} />
   </TouchableOpacity>


</View>
    </View>

  );
}

const styles = StyleSheet.create({

    container: {
    backgroundColor: 'white',
    width: width,
    height: height,
    justifyContent:'center',
    flex:1,
    alignItems:'center',
  },
pagetitle: {
    //left:0.5,
   // left: 60,
    fontSize: 25,
    color: 'rgba(76, 87, 133, 1)',
    right:-width*0.15,
    top:-height*0.055
   // bottom: 105
  },

video: {
    justifyContent: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
    alignSelf: 'stretch',
    marginLeft: 0,
    marginRight: 0,
    height: 190, },

buttons: {
    margin: 16},

VideoContainer1: {
    borderColor: '#6F97B1',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    width: width*0.90,
    height:height*0.60,
    margin: 19,
    padding: 20,
   // bottom: 60
  },

VideoContainer2: {
    borderColor: '#6F97B1',
    backgroundColor: '#E8F0F4',
    padding: 12,
    borderWidth: 1,
    margin: 5,
    borderRadius: 30,},

circle: {
    position: 'absolute',
   // left: 340,
    bottom: height*0.06,
    left:width*0.80,
    height: 41,
    width: 41,
    borderRadius: 30,
    borderColor: '#6F97B1',
    borderWidth: 2},

plusicon: {
    left: 6,
    bottom: -6.33,
    width: 25,
    height: 25},

rectanglesContainer: {
   // bottom: 63,
    //left: 173,
    justifyContent: 'center',
    transform: [{ rotate: "90deg" }],},

rectangle: {
    width: 20 * 2,
    height: 20,
    backgroundColor: "rgba(187, 206, 219, 0.54)"},

rectangle2: {
    width: 20 * 2,
    height: 20,
    backgroundColor: "rgba(111, 151, 177, 1)"},

rectangle3: {
    width: 20 * 2,
    height: 20,
    backgroundColor: "rgba(76, 87, 133, 1)"},

baseTop: {
    borderBottomWidth: 15,
    borderBottomColor: "rgba(76, 87, 133, 1)",
    borderLeftWidth: 20.5,
    borderLeftColor: "transparent",
    borderRightWidth: 20.5,
    borderRightColor: "transparent",
    transform: [{ rotate: "-90deg" }],
   // left: 322,
   // top: 67,
   // position: "absolute",
  },

Back_icon:{
   // position: 'absolute',
    //left: -180.47,
    // width:25,
    // height:20,
   // top: -96.78,
   width: 25,
   height: 20,
   left:-width*0.4,
   top:-height*0.02
   },

textInput:{
   // position: 'absolute',
   // right:-140,
   // bottom:50,
    fontSize: 13,
    height: height*0.04,
    width:width*0.90,
    color: '#4C5785',
    backgroundColor:'#fff',
    borderColor:'#6F97B1',
    borderWidth:1,
    borderRadius:33,
    textAlign:'center'},

saerchicon:{
   bottom:28,
  left:10
  },
});
