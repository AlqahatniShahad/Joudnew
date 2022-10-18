

import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions,Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import { doc, setDoc } from 'firebase/firestore';
import { db,authentication } from '../../config_firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const{height,width,right,left}=Dimensions.get('window')

export default function AddPlayers({ navigation }) {
  const collage_data = [
    { label: '  اللغات', value: 'اللغات' },
    { label: ' إدارة الاعمال ', value: 'إدارة الأعمال' },
    { label: 'الهندسة ', value: 'الهندسة' },
    { label: 'العلوم ', value: 'العلوم' },
    { label: 'التصاميم و الفنون', value: 'التصاميم والفنون' },
    { label: '  الآداب', value: 'الآداب' },
    { label: 'التربية', value: 'التربية' },
    { label: ' الطب البشري', value: 'الطب البشري' },
    { label: 'طب الأسنان', value: 'طب الأسنان' },
    { label: ' الصيدلة', value: 'الصيدلة' },
    { label: 'الصحة وعلوم التأهيل', value: 'الصحة وعلوم التأهيل' },
    { label: ' التمريض', value: 'التمريض' },
    { label: 'علوم الحاسب والمعلومات', value: 'علوم الحاسب والمعلومات' },
    { label: ' المجتمع', value: 'المجتمع' },
  ];

  const Academic_leveldata = [
    { label: '          ١', value: '1' },
    { label: '          ٢', value: '2' },
    { label: '          ٣', value: '3' },
    { label: '          ٤', value: '4' },
    { label: '          ٥', value: '5' },
    { label: '          ٦', value: '6' },
    { label: '          ٧', value: '7' },
    { label: '          ٨', value: '8' },
    { label: '          ٩', value: '9' },
    { label: '          ١٠', value: '10' },
    { label: '          ١١', value: '11' },
    { label: '          ١٢', value: '12' },
  ];

  const [Login, setLogin] = useState(false);
  const [secureEntry, setsecureEntry] = useState(true);

  //text input states

  const [Collage, setCollage] = useState('');
  const [Name, setName] = useState('');
  const [Phone_number, setPhone_number] = useState('');
  const [Academic_level, setAcademic_level] = useState('');
  const [Major, setMajor] = useState('');
  const [value, setValue] = useState('');
  const [ID, setID] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  //
  const CreatePlayer = () => {
    if (Email.length != 0) {
      if (ID.length == 9) {
        if (Password.length != 0) {
          if ( Password == confirmPassword) {
            if (Password.length >= 8) {
              if (Phone_number.length == 9) {
                createUserWithEmailAndPassword(authentication, Email, Password).then((re) => {
                  setLogin(true);
                  setDoc(doc(db, "player", re.user.uid), {
                    name: Name,
                    email: Email,
                    Academicـlevel: Academic_level,
                    phone: Phone_number,
                    collage: Collage,
                    student_id: ID,
                    TotalGame: 0,
                    TotalWins: 0,
                    TotalLosses: 0,
                    Point: 0,
                  });
                  Alert.alert(" تم اضافة لاعبة")
                  navigation.navigate('player')

                }).catch((error) => { alert(error.message); })
              }
              else { Alert.alert("رقم الجوال يجب ان يكون ٩ ارقام فقط  ") }
            }
            else {Alert.alert("الرقم السري يجيب ان يكون ٨ خانات  ") }
          }
          else {  Alert.alert("الرقم السري مختلف  ") }
        }
        else { Alert.alert(" خطا في ادخال الرقم الجامعي ") }
      }
    }

    else {
      if (ID.length == 0 || Password.length == 0 || Phone_number.length == 0)
        Alert.alert(" الرجاء ادخال كافة البيانات ")
      else
        Alert.alert(" الرجاء ادخال البريد الالكتروني ")
    }
  }



  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value}
      </View>
    );
  };

  const renderItem2 = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value}
      </View>
    );
  };
  return (

    <View style={styles.container}>
{/* 
      <View style={styles.rectangle} />
      <View style={styles.rectangle2} />
      <View style={styles.rectangle4} />
      <View style={styles.rectangle3} />
      <View style={styles.baseTop} />
 */}

      <Text style={styles.Userst}> إضافة لاعبة   </Text>




      <View style={styles.add}>
        <TouchableOpacity onPress={CreatePlayer}>
          <Text style={styles.textstyle2}>إضافة </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.admin_info}>
        <ScrollView >
          <Text style={styles.text1}> الاسم  </Text>
          <TextInput style={styles.textInput1} autoCapitalize={true} placeholder={'    الاسم كامل '}onChangeText={text => setName(text)} />
          <View style={styles.line1}></View>

          <Text style={styles.text2}> الرقم الجامعي  </Text>
          <TextInput style={styles.textInput2} autoCapitalize={true} placeholder={'    الرقم الجامعي  '}  onChangeText={text => setID(text)} />
          <View style={styles.line2}></View>

          <Text style={styles.text3}> البريد الالكتروني  </Text>
          <TextInput style={styles.textInput3} autoCapitalize={true} placeholder={'    البريد الالكتروني  '}  onChangeText={text => setEmail(text)} />
          <View style={styles.line3}></View>

          <Text style={styles.text4}>رقم الجوال   </Text>
          <TextInput style={styles.textInput4} autoCapitalize={true} placeholder={'  5xxxxxxxx  '} onChangeText={text => setPhone_number(text)} />
          <View style={styles.line4}></View>

          <Text style={styles.text5}> الرقم السري </Text>
          <TextInput style={styles.textInput5} autoCapitalize={true} secureTextEntry={secureEntry}  placeholder={'  ********  '}  onChangeText={text => setPassword(text)} />
          <View style={styles.line5}></View>

          <TouchableOpacity onPress={() => { setsecureEntry((prev) => !prev); }}>
          {secureEntry ?
            <MaterialCommunityIcons style={styles.show} name="eye-outline" size={18} />
            :
            <MaterialCommunityIcons style={styles.show} name="eye-off-outline" size={18} />
          }</TouchableOpacity>
          
          <Text style={styles.text6}> تاكيد الرقم السري  </Text>
          <TextInput style={styles.textInput6} secureTextEntry={secureEntry} autoCapitalize={true} placeholder={'  ********  '} onChangeText={text => setconfirmPassword(text)} />
          <View style={styles.line6}></View>
   
          <TouchableOpacity onPress={() => { setsecureEntry((prev) => !prev); }}>
            {secureEntry ?
              <MaterialCommunityIcons style={styles.show1} name="eye-outline" size={18} />
              :
              <MaterialCommunityIcons style={styles.show1} name="eye-off-outline" size={18} />
            }

          </TouchableOpacity>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={collage_data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="الكلية"
            searchPlaceholder="بحث...."
            value={Collage}
            onChange={item => {
              setCollage(item.value);
            }}
            renderItem={renderItem}
          />
 

          <Dropdown
            style={styles.dropdown1}
            placeholderStyle={styles.placeholderStyle1}
            selectedTextStyle={styles.selectedTextStyle1}
            inputSearchStyle={styles.inputSearchStyle1}
            iconStyle={styles.iconStyle}
            data={Academic_leveldata}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="المستوى الاكاديمي "
            searchPlaceholder="بحث...."
            value={Academic_level}
            onChange={item => {
              setAcademic_level(item.value);
            }}
            renderItem={renderItem2}
          />


        </ScrollView>

      </View>

      <TouchableOpacity onPress={() =>navigation.navigate('player')} >
        <Image style={styles.Back_icon}
          source={require('../../../assets/Backicon.png')} />
      </TouchableOpacity>
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
  // ScrollView:{
  //   height:800
  // },
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
     top:-height*0.71
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
    // position: 'absolute',
    // width: 357,
    // height: 620,
    // left: 29.6,
    // top: 170,
    // backgroundColor: '#D9E8F1',
    // borderRadius: 33,
    // borderWidth: 1,
    // borderColor: '#D9E8F1'
    width: width*0.862,
    height: height*0.631,
    
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
    top: 170,
    left:  width*0.862*0.09,
    borderRadius: 100,
    borderColor: '#4C5785',
    borderWidth: 1
  },

  line7: {
    width:  width*0.70,
    height: 0,
    top: 210,
    left:  width*0.862*0.09,
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
    left: 90,
    top: 20,
    width: width*0.30,
    height: 20,
    alignItems: 'center',
   // backgroundColor:'red'
  },

  text2: {
    color: '#4C5784',
    fontSize: 17,
    top: 65,
    left: width*0.862*0.70
  },

  textInput2: {
    left: 90,
    top: 45,
    height: 20,
    width: width*0.30,
    alignItems: 'center',
   // backgroundColor:'red'
  },

  text3: {
    color: '#4C5784',
    fontSize: 17,
    top: 90,
    left: width*0.862*0.70
  },

  textInput3: {
    left: 90,
    top: 70,
    height: 20,
    width: width*0.30,
    alignItems: 'center',
    //backgroundColor:'red'
  },

  text4: {
    color: '#4C5784',
    fontSize: 17,
    top: 115,
    left: width*0.862*0.74
  },

  textInput4: {
    left: 90,
    top: 95,
    height: 20,
    alignItems: 'center',
    width: width*0.30,
   // backgroundColor:'red'
  },

  text5: {
    color: '#4C5784',
    fontSize: 17,
    top: 145,
    left: width*0.862*0.72
  },

  textInput5: {
    left: 90,
    top: 125.5,
    height: 20,
    alignItems: 'center',
    width: width*0.30,
   // backgroundColor:'red'
  },


  text6: {
    color: '#4C5784',
    fontSize: 17,
    top: 167,
    left: width*0.862*0.65
  },

  textInput6: {
    left: 90,
    top: 150,
    height: 20,
    alignItems: 'center',
    width: width*0.30,
   // backgroundColor:'red'
  },


  text7: {
    color: '#4C5784',
    fontSize: 17,
    top: 200,
    left: width*0.862*0.77
  },

  textInput7: {
    left: 90,
    top: 182,
    height: 20,
    alignItems: 'center',
    //backgroundColor:'red',
    width: width*0.30,
  },

  dropdown: {
    margin: 16,
    height: 0,
    width: width*0.70,
    left:  width*0.862*0.07,
    top: 200,
    borderBottomColor: '#4C5784',
    borderBottomWidth: 1,
    borderWidth:1,
    borderColor: '#4C5784',
    //backgroundColor:'red',
  },
  placeholderStyle: {
    fontSize: 16,
    left: width*0.862*0.67,
    top: -30,
    color: '#4C5784',
    width: width*0.30,
  },
  selectedTextStyle: {
    fontSize: 16,
    left: 80,
    top: -20,
    color: '#4C5784',
    width: width*0.30,
  },
  iconStyle: {
    width: 20,
    height: 20,
    left: -width*0.65,
    top: -20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    width: width*0.30,
  },
  dropdown1: {
    margin: 16,
    height:0,
    width: width*0.70,
    left:  width*0.862*0.07,
    top:240,
    borderBottomColor: '#4C5784',
    borderBottomWidth:1,
    borderWidth:1,
    borderColor:'#4C5784',
   },
    
  placeholderStyle1: {
    fontSize: 16,
    left: width*0.862*0.55,
    top:-30,
    color:'#4C5784'
  },

  selectedTextStyle1: {
    fontSize: 16,
    left:80,
    top:-20,
    color:'#4C5784'
    
  },

  iconStyle1: {
    width: 20,
    height: 20,
    left:-width*0.65,
    top:-20,
  },

  inputSearchStyle1: {
    height: 40,
    fontSize: 16, 
    alignContent:'center',
    alignItems:'center'},

    show: {
      top: 104,
      color: '#4C5784',
      left: 50.50,
      height: 20,
      width: 20,
    },
    show1: {
      top: 130,
      color: '#4C5784',
      left: 50.50,
      height: 20,
      width: 20,
    },
});
