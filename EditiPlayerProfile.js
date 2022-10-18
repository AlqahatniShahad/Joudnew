import React, { useState } from 'react';
import { StyleSheet, Alert, TextInput, TouchableOpacity,Image, Text, View } from 'react-native';
import { setDoc, doc, collection, updateDoc, getDoc } from 'firebase/firestore';
import { updatePassword, updateEmail } from 'firebase/auth';
import { db ,authentication} from'../../config_firebase/firebase';
import { Dropdown } from 'react-native-element-dropdown';

export default function UpdatePlayer({ navigation, route }) {

  const { PlayerID } = route.params;
  const [Newname, setNewname] = useState('');
  const [value, setValue] = useState('');
  const [NewPhone, setNewPhone] = useState('');
  const [Newcollage, setNewcollage] = useState('');
  const [Newclevel, setNewclevel] = useState('');
  const [Name, setName] = useState('')
  const [email, setemail] = useState('')
  const [Id, setId] = useState('')
  const [collage, setcollage] = useState('')
  const [level, setlevel] = useState('')
  const [phone1, setphone] = useState('');
  console.log(PlayerID)
  Data();
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

  function Data() {
    const Player = doc(db, "player", PlayerID);
    getDoc(Player).then((doc) => {
      setName(doc.get('name'))
      setlevel(doc.get('Academicـlevel'))
      setcollage(doc.get('collage'))
      setphone(doc.get('phone'))
      setemail(doc.get('email'))
      setId(doc.get('student_id'))

    })

  }
  const update = () => {

    if(Newclevel != "" || Newcollage != "" || NewPhone != ""){
    if (Newclevel != "") {
      updateDoc(doc(db, "player", PlayerID), {
        Academicـlevel: Newclevel,
      })
    }
    if (Newcollage != "") {
      updateDoc(doc(db, "player", PlayerID), {
        collage: Newcollage,
      })
    }
    if (NewPhone != "") {
      updateDoc(doc(db, "player", PlayerID), {
        phone: NewPhone,
      })
    }
    Alert.alert('تم التعديل بنجاح')
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

      <View style={styles.name}>
        <Text style={styles.Fullname}>الاسم كامل </Text>
        <TextInput style={styles.textInput1} value={Name} onChangeText={text => setNewname(text)} />
      </View>

      <View style={styles.job}>
        <Text style={styles.Jobnumber}>الرقم الجامعي   </Text>

        <TextInput style={styles.textInput3} value={Id} />
      </View>
      
      <TouchableOpacity  onPress={()=>navigation.goBack()} >
        <Image style={styles.Back_icon}
         source= {require('../../../assets/Backicon.png')}/>  
        </TouchableOpacity>

      <View style={styles.password}>
        <Text style={styles.pass}>المستوى الاكاديمي  </Text>
        {/* <TextInput style={styles.textInput3} secureTextEntry={true}  placeholder={level}  onChangeText={text=>setNewcollage(text)}/>  */}
        <Dropdown
          style={styles.dropdown1}
          placeholderStyle={styles.placeholderStyle1}
          selectedTextStyle={styles.selectedTextStyle1}
          inputSearchStyle={styles.inputSearchStyle1}
          iconStyle={styles.iconStyle1}
          data={Academic_leveldata}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={level}
          searchPlaceholder="بحث...."
          value={Newclevel}
          onChange={item => {
            setNewclevel(item.value);
          }}
          renderItem={renderItem2}
        />
      </View>

      <View style={styles.jobname}>
        <Text style={styles.jobn}> الكلية   </Text>
        {/* <TextInput style={styles.textInput3} secureTextEntry={true} placeholder={collage}  onChangeText={text=>setconfirmPassword(text)}/> */}
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
          placeholder={collage}
          searchPlaceholder="بحث...."
          value={Newcollage}
          onChange={item => {
            setNewcollage(item.value);
          }}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.Email}>
        <Text style={styles.Emailn}>البريد الالكتروني   </Text>
        <TextInput style={styles.textInput4} value={email}></TextInput>
      </View>

      <View style={styles.Phonenumber}>
        <Text style={styles.Phonen}>رقم الجوال   </Text>
        <TextInput style={styles.textInput5} placeholder={phone1} onChangeText={text => setNewPhone(text)} />
      </View>


      <View style={styles.buttonborder}>
        <TouchableOpacity onPress={update}>
          <Text style={{
            color: 'white',
            position: 'absolute',
            top: 0,
            left: 55,
            fontSize: 26
          }} >تحديث  </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  name: {

    width: 330,
    height: 0,
    top: 200,
    left: 50,
    borderRadius: 100,
    borderColor: '#B7DFD7',
    borderWidth: 1

  },
  buttonborder: {
    borderColor: '#6F97B1',
    borderWidth: 3,
    width: 190,
    borderRadius: 70,
    height: 60,
    top: 630,
    padding: 1,
    margin: 1,
    backgroundColor: '#6F97B1',
    color: '#FFFFFF',
    marginLeft: 60,
    marginRight: 90,
    left: 50,
  },


  Fullname: {
    position: 'absolute',
    left: 246.27,
    top: -27.85,
    color: '#4C5784',
    fontSize: 17
  },
  textInput1: {
    position: 'absolute',
    left: 80.27,
    top: -25.85,
    fontSize: 15
  },

  job: {
    width: 330,
    height: 0,
    top: 270,
    left: 50,
    borderRadius: 100,
    borderColor: '#B7DFD7',
    borderWidth: 1
  },

  Jobnumber: {
    position: 'absolute',
    left: 205.27,
    top: -27.85,
    color: '#4C5784',
    fontSize: 17
  },
  textInput2: {
    position: 'absolute',
    left: 80.27,
    top: -25.85,
    fontSize: 15
  },
    Back_icon:{
        position: 'absolute',
              left: 30,
             width:25,
             height:20,
            top: 70,
         },

  password: {
    width: 330,
    height: 0,
    top: 340,
    left: 50,
    borderRadius: 100,
    borderColor: '#B7DFD7',
    borderWidth: 1
  },

  pass: {
    position: 'absolute',
    left: 200,
    top: -27.85,
    color: '#4C5784',
    fontSize: 17
  },
  textInput3: {
    position: 'absolute',
    left: 140.27,
    top: -25.85,
    fontSize: 15
  },

  jobname: {
    width: 330,
    height: 0,
    top: 410,
    left: 50,
    borderRadius: 100,
    borderColor: '#B7DFD7',
    borderWidth: 1
  },

  jobn: {
    position: 'absolute',
    left: 280.27,
    top: -27.85,
    color: '#4C5784',
    fontSize: 17
  },
  textInput3: {
    position: 'absolute',
    left: 100.27,
    top: -25.85,
    fontSize: 15
  },


  Email: {
    width: 330,
    height: 0,
    top: 480,
    left: 50,
    borderRadius: 100,
    borderColor: '#B7DFD7',
    borderWidth: 1
  },

  Emailn: {
    position: 'absolute',
    left: 210.27,
    top: -27.85,
    color: '#4C5784',
    fontSize: 17
  },
  textInput4: {
    position: 'absolute',
    left: 40.27,
    top: -25.85,
    fontSize: 15
  },

  Phonenumber: {
    width: 330,
    height: 0,
    top: 550,
    left: 50,
    borderRadius: 100,
    borderColor: '#B7DFD7',
    borderWidth: 1
  },

  Phonen: {
    position: 'absolute',
    left: 240.27,
    top: -27.85,
    color: '#4C5784',
    fontSize: 17
  },
  textInput5: {
    position: 'absolute',
    width: 190,
    height: 20,
    left: 40.27,
    top: -25.85,
    fontSize: 15
  },

  Exit: {
    color: '#E55C72',
    position: 'absolute',
    top: 660,
    left: 175,
    fontSize: 20
  },

  Exit1: {
    color: '#E55C72',
    position: 'absolute',
    top: 750,
    left: 175,
    fontSize: 20
  },

  Exiticon: {
    position: 'absolute',
    top: 665,
    left: 120,
    width: 24,
    height: 24

  },
  Edititicon: {
    top: -27,
    width: 20,
    height: 20,
    left: -15
  },
  dropdown1: {
    margin: 16,
    height: 0,
    width: 290,
    left: -50,
    top: -5,

  },

  placeholderStyle1: {
    fontSize: 16,
    left: 170,
    top: -30,
    color: 'grey'
  },
  selectedTextStyle1: {
    fontSize: 16,
    left: 80,
    top: -25,
    color: 'grey'

  },
  iconStyle1: {
    width: 20,
    height: 20,
    left: -225,
    top: -25,
  },
  inputSearchStyle1: {
    height: 40,
    fontSize: 16,
    alignContent: 'center',
    alignItems: 'center'
  },
  dropdown: {
    margin: 16,
    height: 0,
    width: 260,
    left: -55,
    top: -10,

  },

  placeholderStyle: {
    fontSize: 16,
    left: 120,
    top: -30,
    color: 'grey'

  },
  selectedTextStyle: {
    fontSize: 16,
    left: 120,
    top: -25,
    color: 'grey'
  },
  iconStyle: {
    width: 20,
    height: 20,
    left: -189,
    top: -20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

});

