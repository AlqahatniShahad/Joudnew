 import React,{useState, useEffect} from 'react';
 import { View, StyleSheet, Button, ScrollView,Dimensions, TextInput,Image, Text, TouchableOpacity } from 'react-native';
 import { uploadString,getDownloadURL, ref, getStorage, uploadBytes, uploadBytesResumable } from "firebase/storage";
 import { doc,getDoc, setDoc,deleteDoc , collection, addDoc,updateDoc} from 'firebase/firestore';
 import {db} from '../../config_firebase/firebase';
 import { Video } from 'expo-av';
 import { AntDesign } from '@expo/vector-icons';
 import * as ImagePicker from "expo-image-picker";
 import * as Progress from 'react-native-progress';
  
 const{height,width,right,left}=Dimensions.get('window')

 export default function UploadVideo({navigation}) {
  const [progress, setProgress]= useState(0);
  const [video, setVideo] = useState(null);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState();
  const [VideoTitle,setVideoTitle]=useState("");
  const [VideoDescription,setVideoDescription]=useState("");
  
  
 useEffect(()=>{
 (async()=>{
  if(Platform.OS !== 'web'){
    const{
      status,
    }=await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(status!=='granted'){
      alert("يجب السماح بالوصول لألبوم الكاميرا حتى يتسنى لك رفع الفديو");
    }
  }
 })();
 },[]);
  
  
 const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.Videos,
     allowsEditing: true,
    // aspect: [4, 3],
     quality: 1,
   });
   console.log(result);
    if (!result.cancelled) {
      setError("");
      setVideo(result.uri);
   }else{
     setError("ارجوا منك اختيار فديو")
   }
  };
  const UploadVideo=async ()=>{
    const metadata = {
      contentType: 'video/mp4',
    };
      const response = await fetch(video);
      const file = await response.blob();
      const storragge= getStorage();
  
      addDoc(collection(db,"Video"),{
       videotitle:VideoTitle,
       videodescription:VideoDescription,
       videoURL:''
     }).then( async (dc) => {
      const storageReff = await ref(storragge, `Minute with joud/${dc.id}`);// يوم إضفته ضبط الرفع شوووي
      const uploadTask=await uploadBytesResumable(storageReff, file, metadata);
      const prog =Math.round((uploadTask.bytesTransferred/uploadTask.totalBytes)*100);
        setProgress(prog);
        getDownloadURL(storageReff).then( url =>
          updateDoc(doc(db,'Video',dc.id),{
         videoURL:url,
       },{ merge: true })
       .then(() => {
            alert("تم إضافة الفديو بنجاح ")
          })
          .catch((error) => {
            alert(error.message)
          }));
         })
          };
  
   return (
  
    <ScrollView >
    <View style={styles.container}>
  
               {/* <View style={styles.rectanglesContainer}>
                 <View style={styles.rectangle} />
                 <View style={styles.rectangle2} />
                 <View style={styles.rectangle3} />
               </View>
               <View style={styles.baseTop} />
   */}
       <TouchableOpacity  onPress={()=>navigation.goBack()} >
        <Image style={styles.Back_icon}
         source= {require('../../../assets/Backicon.png')}/>  
        </TouchableOpacity>
        
               <Text style={styles.pagetitle}> إضافة فديو </Text>
               <Text style={styles.note}> يمكنك إضافة فديو بعد ملئ التالي والضغط على "إضافة" </Text>
               <Text style={styles.title1}> عنوان الفديو :</Text>
               <Text style={styles.title2}> وصف الفديو :</Text>
               <Text style={styles.title3}>إختيار الفديو :</Text>
            
               <View style={styles.inputContainer}>
               <TextInput
                 placeholder="مثال=> دقيقة مع جود: الحلقة الأولى "
                 onChangeText={(VideoTitle)=>setVideoTitle(VideoTitle)}
                 value={VideoTitle}
                 style={styles.input}
               />
  
               <TextInput
               placeholderStyle={styles.placeholderStyle}
               placeholder="وصف الفديو "
               onChangeText={(VideoDescription)=>setVideoDescription(VideoDescription)}
               value={VideoDescription}
               style={styles.input2}
               />
               <View style={styles.board}>
               <Video
                style={styles.video}
                source={{uri: video}}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
               />              
              </View>
               <TouchableOpacity onPress={pickImage} style={styles.button}>
                 <Text style={styles.buttonText}>
                 <AntDesign name={"upload"} size={30} color={'#fff'}  style={styles.placeholderStyle2} />
                 </Text>
               </TouchableOpacity>
  
               <View style={styles.uploadedicon}>
               <Progress.Bar progress={progress} width={110} left={150} top={330} color={'rgba(76, 87, 133, 1)'} />
               <Text style={{top:295, left:150, color:'rgba(76, 87, 133, 1)'}}> حالة رفع الفديو {progress} % </Text>
               </View>
              
             <View style={styles.buttonContainer}>
                 <TouchableOpacity onPress= {UploadVideo}
                   style={styles.button2}>
                 <Text style={styles.buttonText2}>إضافة</Text>
                 </TouchableOpacity>
             </View>
                 </View>
    </View>
    </ScrollView>      
   );
 }
  
 const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: width,
    height: height,
    justifyContent:'center',
    flex:1,
    alignItems:'center',
  },
  
  video:{
    width:200,
    height:300},
  
  uploadedicon:{
   width:130,
   height:40
  },
  iconStyle: {
    width: 20,
    height: 20,
   // right:250
  },
  
  pagetitle:{
    //left:0.5,
   // left:230,
    fontSize:25,
    color:'rgba(76, 87, 133, 1)',
    bottom:445},
  
  note:{
    //left:65,
    fontSize:16,
    color:'rgba(76, 87, 133, 1)',
    //bottom:670
  },
  
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
   // left: 324,
   // top: 65,
    position: "absolute" },
  
  rectanglesContainer:{
    // bottom:173,
    // left:132,
    justifyContent:'center',
    transform: [{ rotate: "90deg" }],},
  
  placeholderStyle:{
    fontSize: 14,
    color: '#C9C9C9',
    textAlign:'right' ,
   // top:-5
  },
  
  placeholderStyle2:{
    fontSize: 20,
    color: '#fff',
    textAlign:'center' ,
   // top:10
  },
  
  title1:{
   // left:285,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
   // bottom:410
  },
  
  title2:{
    //left:285,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
   // bottom:340
  },
  
  title3:{
   // left:285,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
   // bottom:250
  },
  
  buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    padding:3,
    marginTop:360,
   // left:55
  },
  
  button:{
    backgroundColor:'rgba(76, 87, 133, 1)',
    width:'15%',
    borderRadius:100,
    // top:270,
   // left:80
  },
  
  buttonText:{
    padding:20,
    //bottom:10,
    fontSize:16,},
  
  button2:{
    backgroundColor:'rgba(76, 87, 133, 1)',
    width:'50%',
    padding:10,
    borderRadius:50},
  
  buttonText2:{
    color:'white',
    padding:20,
    //bottom:10,
    fontSize:16,
    fontWeight:'700',
    textAlign:'center'},
  
  inputContainer:{
    height:15,
    padding:3,
    //bottom:810,
    marginTop:20,
    textAlign:'center'},
  
  input:{
    height:39,
    marginTop:40,
    paddingHorizontal:15,
    // left:65,
    // top:300,
    width:290,
    borderRadius:100,
    borderColor:'rgba(187, 206, 219, 1)',
    borderWidth:1,
    textAlign:'right'},
  
  input2:{
    height:70,
    marginTop:40,
    paddingHorizontal:15,
    // left:65,
    // top:310,
    width:290,
    borderRadius:10,
    borderColor:'rgba(187, 206, 219, 1)',
    borderWidth:1,
    textAlign:'right'},
  
  board:{
    height:420,
    marginTop:40,
    padding:20,
    // left:65,
    // top:320,
    width:290,
    borderRadius:10,
    borderColor:'rgba(187, 206, 219, 1)',
    borderWidth:1,
    alignItems:'center'},
    Back_icon:{
     // position: 'absolute',
           width:25,
           height:20,
           left:-width*0.4,
           top:-height*0.02,
       },
 });
 
 

