

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,Dimensions, TouchableOpacity,ScrollView, TextInput, Alert } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import { db,authentication } from '../../config_firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const{height,width,right,left}=Dimensions.get('window')

export default function Users({ navigation }) {
  
  const [position, setPosition] = useState('');
  const [Name, setName] = useState('');
  const [Phone_number, setPhone_number] = useState('');
  const [ID, setID] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [secureEntry, setsecureEntry] = useState(true);

  const CreateAdmin = () => {

    if (Email.length != 0) {
      if (ID.length == 9) {
        if (Password.length != 0) {
          if (Password.length >= 8) {
            if (Password == confirmPassword) {
              if (Phone_number.length == 9) {
                createUserWithEmailAndPassword(authentication, Email, Password).then((re) => {
                  setDoc(doc(db, "Admin", re.user.uid), {
                    name: Name,
                    email: Email,
                    phone: Phone_number,
                    work_id: ID,
                    position: position,
                  });
                  Alert.alert("تم إنشاء حساب جديد بنجاح")
                  navigation.goBack()
                }).catch((error) => { alert(error.message); })
              }
              else { Alert.alert("رقم الجوال يجب ان يكون ٩ ارقام فقط  ") }
            }
            else { Alert.alert("الرقم السري مختلف  ") }
          }
          else { Alert.alert("الرقم السري يجيب ان يكون ٨ خانات  ") }
        }
        else { Alert.alert("  الرجاء إدخال الرقم السري ") }
      }
      else { Alert.alert(" خطا في ادخال الرقم الوظيفي ") }
    }
    else {
      if (ID.length == 0 || Password.length == 0 || Phone_number.length == 0)
        Alert.alert(" الرجاء ادخال كافة البيانات ")
      else
        Alert.alert(" الرجاء ادخال البريد الالكتروني ")
    }
  }


  return (
    <View style={styles.container}>
      {/* راح اخذه من فاطمه و شهد  */}

{/* 
      <View style={styles.rectangle} />
      <View style={styles.rectangle2} />
      <View style={styles.rectangle4} />
      <View style={styles.rectangle3} />
      <View style={styles.baseTop} /> */}

      <Text style={styles.Userst}> إضافة مشرفة   </Text>

      <TouchableOpacity onPress={() => navigation.navigate('admin')} >
        <Image style={styles.Back_icon}
          source={require('../../../assets/Backicon.png')} />
      </TouchableOpacity>


      <View style={styles.add}>
        <TouchableOpacity onPress={CreateAdmin}>
          <Text style={styles.textstyle2}>إضافة </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.admin_info}>
      <ScrollView >
        
        <Text style={styles.text1}> الاسم  </Text>
        <TextInput style={styles.textInput1} autoCapitalize={true} placeholder={'    الاسم كامل '} value={Name} onChangeText={text => setName(text)} />
        <View style={styles.line1}></View>

        <Text style={styles.text2}> الرقم الوظيفي  </Text>
        <TextInput style={styles.textInput2} autoCapitalize={true} placeholder={'    الرقم الوظيفي  '} value={ID} onChangeText={text => setID(text)} />
        <View style={styles.line2}></View>

        <Text style={styles.text3}> المسمى الوظيفي  </Text>
        <TextInput style={styles.textInput3} autoCapitalize={true} placeholder={'    المسمى  الوظيفي  '} value={position} onChangeText={text => setPosition(text)} />
        <View style={styles.line3}></View>

        <Text style={styles.text4}> البريد الالكتروني   </Text>
        <TextInput style={styles.textInput4} autoCapitalize={true} placeholder={'   البريد الالكتروني    '} value={Email} onChangeText={text => setEmail(text)} />
        <View style={styles.line4}></View>

        <Text style={styles.text5}> رقم الجوال </Text>
        <TextInput style={styles.textInput5} autoCapitalize={true} placeholder={'   5xxxxxxxx  '} value={Phone_number} onChangeText={text => setPhone_number(text)} />
        <View style={styles.line5}></View>

        <Text style={styles.text6}> الرقم السري  </Text>
        <TextInput style={styles.textInput6} secureTextEntry={secureEntry} placeholder={'  ********  '} value={Password} onChangeText={text => setPassword(text)} />
        <View style={styles.line6}></View>

        <Text style={styles.text7}> تاكيد الرقم السري  </Text>
        <TextInput style={styles.textInput7} secureTextEntry={secureEntry} placeholder={'    ********  '} value={confirmPassword} onChangeText={text => setconfirmPassword(text)} />
        <View style={styles.line7}></View>
        </ScrollView>

         {/* <TouchableOpacity onPress={() => { setsecureEntry((prev) => !prev); }}>
          {secureEntry ?
            <MaterialCommunityIcons style={styles.show} name="eye-outline" size={18} />
            :
            <MaterialCommunityIcons style={styles.show} name="eye-off-outline" size={18} />
          }</TouchableOpacity> */}

          {/* <TouchableOpacity onPress={() => { setsecureEntry((prev) => !prev); }}>
            {secureEntry ?
              <MaterialCommunityIcons style={styles.show1} name="eye-outline" size={18} />
              :
              <MaterialCommunityIcons style={styles.show1} name="eye-off-outline" size={18} />
            }
          </TouchableOpacity>  */}
        

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

  Userst: {
    color: '#4C5785',
    //height: 25,
    fontWeight: '700',
    fontSize: 20,
    alignContent: 'center',
    left:width*0.30
   // position: 'absolute',
   // left: '18%',
   // top: 109,
   // left: 190
  },

  add: {
    borderColor: '#6F97B1',
    borderWidth: 3,
    width: width-width*0.29,
    height: height*0.06,
    borderRadius: 70,
    top: height*0.70,
    // bottom: 90,
    //padding: 1,
    //margin: 1,
    backgroundColor: '#6F97B1',
    color: '#FFFFFF',
  },

  textstyle2: {
    // width: 224,
    // height: 26,
    fontSize: 20,
    color: '#fff',
    top:'50%',
    left:width*0.33,
    // tex9tAlign: 'center',
    // top: '40.57%',
    // left: -15
  },
  Back_icon: {
   // position: 'absolute',
    //left: 30.47,
    width: 25,
    height: 20,
    left:-width*0.4,
    top:-height*0.02
    //top: -30.78,
  },
  rectangle: {
    color: '#BBCEDB',
    left: 40,
    top: 50,
    width: 10 * 2,
    height: 20,
  },
  rectangle2: {
    width: 30,
    height: 40,
    top: 80,
    left: 360,
    backgroundColor: "rgba(111, 151, 177, 1)",
  },
  rectangle4: {
    width: 30,
    height: 40,
    top: 40,
    left: 390,
    backgroundColor: "#BBCEDB",
  },

  admin_info: {
    //position: 'absolute',
    width: width*0.862,
    height: height*0.631,
   // left: 29.6,
   // top: 200,
    backgroundColor: '#D9E8F1',
    borderRadius: 33,
    borderWidth: 1,
    borderColor: '#D9E8F1'
  },
  rectangle3: {
    width: 30,
    height: 40,
    top: 0,
    left: 330,
    backgroundColor: "rgba(76, 87, 133, 1)",
  },
  baseTop: {
    borderBottomWidth: 15,
    borderBottomColor: "rgba(76, 87, 133, 1)",
    borderLeftWidth: 20.5,
    borderLeftColor: "transparent",
    borderRightWidth: 20.5,
    borderRightColor: "transparent",
    transform: [{ rotate: "-90deg" }],
    left: 302,
    top: 113,
    position: "absolute",
  },

  line1: {
    width:  width*0.70,
    height: 0,
    top: 30,
    left: width*0.862*0.09,
    borderColor: '#4C5785',
    borderWidth: 1
  },

  line2: {
    width:  width*0.70,
    height: 0,
    top: 60,
    left:  width*0.862*0.09,
    borderRadius: 100,
    borderColor: '#4C5785',
    borderWidth: 1
  },

  line3: {
    width:  width*0.70,
    height: 0,
    top: 90,
    left:  width*0.862*0.09,
    borderRadius: 100,
    borderColor: '#4C5785',
    borderWidth: 1
  },

  line4: {
    width:  width*0.70,
    height: 0,
    top: 120,
    left:  width*0.862*0.09,
    borderRadius: 100,
    borderColor: '#4C5785',
    borderWidth: 1
  },

  line5: {
    width:  width*0.70,
    height: 0,
    top: 150,
    left:  width*0.862*0.09,
    borderRadius: 100,
    borderColor: '#4C5785',
    borderWidth: 1
  },

  line6: {
    width:  width*0.70,
    height: 0,
    top: 180,
    left: width*0.862*0.09,
    borderRadius: 100,
    borderColor: '#4C5785',
    borderWidth: 1
  },

  line7: {
    width:  width*0.70,
    height: 0,
    top: 210,
    left: width*0.862*0.09,
    borderRadius: 100,
    borderColor: '#4C5785',
    borderWidth: 1
  },

  text1: {
    color: '#4C5784',
    fontSize: 17,
    top: 40,
    left: width*0.862*0.77
  },

  textInput1: {
    left: 110,
    top: 20,
    width: width*0.30,
    height: 20,
    alignItems: 'center',
    // backgroundColor:'red',
    //placeholderr:'red'

  },

  text2: {
    color: '#4C5784',
    fontSize: 17,
    top: 65,
    left: width*0.60
  },

  textInput2: {
    left: 110,
    top: 45,
    width: width*0.30,
    height: 20,
    alignItems: 'center',
    // backgroundColor:'red'

  },

  text3: {
    color: '#4C5784',
    fontSize: 17,
    top: 90,
    left: width*0.57
  },

  textInput3: {
    left: 110,
    top: 70,
    width: width*0.30,
    height: 20,
    alignItems: 'center',
    placeholder:'grey',
    // backgroundColor:'red'
  },

  text4: {
    color: '#4C5784',
    fontSize: 17,
    top: 115,
    left: width*0.575
  },

  textInput4: {
    left: 110,
    top: 95,
    width: width*0.30,
    height: 20,
    alignItems: 'center',
    placeholder:'grey',
    // backgroundColor:'red'
  },

  text5: {
    color: '#4C5784',
    fontSize: 17,
    top: 145,
    left:  width*0.862*0.71
  },

  textInput5: {
    left: 110,
    top: 125.5,
    width: width*0.30,
    height: 20,
    alignItems: 'center',
    placeholder:'grey',
    // backgroundColor:'red'
  },


  text6: {
    color: '#4C5784',
    fontSize: 17,
    top: 175,
    left:  width*0.862*0.695
  },

  textInput6: {
    left: 110,
    top: 155,
    width: width*0.30,
    height: 20,
    alignItems: 'center',
    placeholder:'grey',
    // backgroundColor:'red'
  },


  text7: {
    color: '#4C5784',
    fontSize: 17,
    top: 200,
    left:  width*0.555
  },

  textInput7: {
    left: 110,
    top: 182,
    width: width*0.30,
    height: 20,
    alignItems: 'center',
    placeholder:'grey',
    // backgroundColor:'red'
  },

  // show: {
  //  position: 'absolute',
  //  // top: '-150%',
  //   color: '#4C5784',
  //   left: 50.50,
  //   height: 20,
  //   width: 20,
  // },

  // show1: {
  //   top: -height*0.22,
  //   color: '#4C5784',
  //   left: 50.50,
  //   height: 20,
  //   width: 20,
  // },
});