import React ,{useState}from 'react';
import { StyleSheet,Alert,TextInput,TouchableOpacity,Image,Text, View} from 'react-native';
import {setDoc ,doc,collection,updateDoc,getDoc} from 'firebase/firestore';
import { updatePassword,updateEmail} from 'firebase/auth';
import {db,authentication} from '../../config_firebase/firebase';

export default function UpdateAdmin({navigation,route}) {
  
  const user = authentication.currentUser;
  
  const { AdminID } = route.params;

  const [NewPassword,setNewPassword]=useState('');
  const [confirmPassword,setconfirmPassword]=useState('');

  const [Name,setName]=useState('')
  const [newName,setnewName]=useState('')
  const [Id,setId]=useState('')
  const [newId,setnewId]=useState('')
  const [newposition,setnewposition]=useState('')
  const [position,setposition]=useState('')
  const [phone,setphone]=useState('')
  const [newphone,setnewphone]=useState('')
  const [email,setemail]=useState('')
  Data();

  function Data(){
    const admin_update= doc(db, "Admin",AdminID);
    getDoc(admin_update).then((doc)=>{
        setName(doc.get('name'))
        setId(doc.get('work_id'))
        setposition(doc.get('position'))
        setphone(doc.get('phone'))
        setemail(doc.get('email'))
  })}

  const update=()=>{

  if(newName != "" || newphone != "" || newId != ""|| newposition!=""){
   if(newName !="")
    {updateDoc(doc(db, "Admin",AdminID),{
      name:newName,
    })}
    if(newphone !="")
    {updateDoc(doc(db, "Admin",AdminID),{
      phone:newphone,
    })}

    if(newId !="")
    {updateDoc(doc(db, "Admin",AdminID),{
      work_id:newId,
    })}
    if(newposition !="")
    {updateDoc(doc(db, "Admin",AdminID),{
      position:newposition,
    })}
  }
  Alert.alert('تم التعديل بنجاح');
}
  return (
    <View style={styles.container}>

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
      <View style={styles.name}>
        <Text style={styles.Fullname}>الاسم كامل </Text>

         <TextInput style={styles.textInput1}placeholder={Name}  onChangeText={text=>setnewName(text)}/>
      </View>

      <View style={styles.job}>
        <Text style={styles.Jobnumber}>المسمى الوظيفي  </Text> 

        <TextInput style={styles.textInput3} placeholder={position}  onChangeText={text=>setnewposition(text)}/>  
       </View>
       
       <View style={styles.password}> 
        <Text style={styles.pass}>الرقم الوظيفي  </Text>
        <TextInput style={styles.textInput3}  placeholder={Id} onChangeText={text=>setnewId(text)}/> 
       </View>
       
       <View style={styles.jobname}>
        <Text style={styles.jobn}>رقم الجوال   </Text>
        <TextInput style={styles.textInput3}  placeholder={phone} onChangeText={text=>setnewphone(text)}/>
       </View>
       
       {/* <View style={styles.Email}>
        <Text style={styles.Emailn}>البريد الالكتروني   </Text>
        <TextInput style={styles.textInput4}  value={email} onChangeText={text=>setemail(text)}/>
       </View> */}


        <View style={styles.buttonborder}>
         <TouchableOpacity onPress={update}>
          <Text style={{ color:'white',
      position: 'absolute',
      top:0,
      left:55,
      fontSize:26}} >تحديث  </Text>
         </TouchableOpacity>
        </View>
      

     </View>
  );
  }
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: 500,
        height: 1500
      },    

      
name:{
  width:330,
  height:0,
  top:200,
  left:50,
  borderRadius:100,
  borderColor:'#B7DFD7',
  borderWidth:1

},

Fullname:{
position: 'absolute',
left: 246.27,
top: -27.85,
color:'#4C5784',
fontSize:17
},
textInput1:{
  position: 'absolute',
  left: 80.27,
  top: -25.85,
  fontSize:15},
  buttonborder:{
    borderColor:'#6F97B1',
    borderWidth:3,
    width:190,
    borderRadius:70,
    height:60,
    top:630,
    padding:1,
    margin:1,
    backgroundColor:'#6F97B1',
    color:'#FFFFFF',
    marginLeft:60,
    marginRight:90,
    left:50,
  },


job:{
  width:330,
  height:0,
  top:270,
  left:50,
  borderRadius:100,
  borderColor:'#B7DFD7',
  borderWidth:1
},

Jobnumber:{
  position: 'absolute',
  left: 205.27,
  top: -27.85,
  color:'#4C5784',
  fontSize:17
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
  left: 324,
  top: 94,
  position: "absolute" },

rectanglesContainer:{
  bottom:86,
  left:132,
  justifyContent:'center',
  transform: [{ rotate: "90deg" }],},

textInput2:{
  position: 'absolute',
  left: 80.27,
  top: -25.85,
  fontSize:15},

  password:{
    width:330,
    height:0,
    top:340,
    left:50,
    borderRadius:100,
    borderColor:'#B7DFD7',
    borderWidth:1
  },
  
  pass:{
    position: 'absolute',
    left: 236,
    top: -27.85,
    color:'#4C5784',
    fontSize:17
  },
  textInput3:{
    position: 'absolute',
    left: 100.27,
    top: -25.85,
    fontSize:15},
 
  jobname:{
      width:330,
      height:0,
      top:410,
      left:50,
      borderRadius:100,
      borderColor:'#B7DFD7',
      borderWidth:1
    },
    
    jobn:{
      position: 'absolute',
      left: 250.27,
      top: -27.85,
      color:'#4C5784',
      fontSize:17
    },
    textInput3:{
      position: 'absolute',
      left: 100.27,
      top: -25.85,
      fontSize:15},

      Back_icon:{
        position: 'absolute',
              left: 30,
             width:25,
             height:20,
            top: 70,
         },

  Email:{
    width:330,
    height:0,
    top:480,
    left:50,
    borderRadius:100,
    borderColor:'#B7DFD7',
    borderWidth:1
  },
  
  Emailn:{
    position: 'absolute',
    left: 210.27,
    top: -27.85,
    color:'#4C5784',
    fontSize:17
  },
  textInput4:{
    position: 'absolute',
    left: 20.27,
    top: -25.85,
    fontSize:15},

    Phonenumber:{
      width:330,
      height:0,
      top:550,
      left:50,
      borderRadius:100,
      borderColor:'#B7DFD7',
      borderWidth:1
    },
    
    Phonen:{
      position: 'absolute',
      left: 240.27,
      top: -27.85,
      color:'#4C5784',
      fontSize:17
    },
    textInput5:{
      position: 'absolute',
      left: 80.27,
      top: -25.85,
      fontSize:15},

      Exit:{
      color:'#E55C72',
      position: 'absolute',
      top:660,
      left:175,
      fontSize:20 },

      Exit1:{
        color:'#E55C72',
        position: 'absolute',
        top:750,
        left:175,
        fontSize:20 },

      Exiticon:{
        position: 'absolute',
        top:665,
        left:120,
        width:24,
        height:24

      },
      Edititicon:{
      top:-27,
      width:20,
      height:20,
      left:-15}


});