
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert ,Image} from 'react-native';
import { ref, getDocs, collection,deleteDoc, doc, getDoc, updateDoc, setDoc, UpdateData, Firestore } from "firebase/firestore";
import { db } from '../../config_firebase/firebase';
import { Dropdown } from 'react-native-element-dropdown';


export default function EditQuestions({route,navigation}) {

  const { id } = route.params;
 
  const [Questionis, setQuestionis] = useState('');
  const [answer, setAnswer] = useState(0);
  const [PointValue, setPointValue] = useState(0);
  const [Choices, setChoices] = useState(['','','','']);
  const [value, setValue] = useState(0);


  let AnswerList;
  

useEffect(() => {
  AnswerList = [
    { label: Choices[0].label, value: 0 },
    { label: Choices[1].label, value: 1 },
    { label: Choices[2].label, value: 2 },
    { label: Choices[3].label, value: 3 }]

})
  
  const point = [
    { label: 'نقطة', value: 1 },
    { label: 'نقطتان', value: 2 },
    { label: 'ثلاثة نقاط', value: 3 }];


  async function getLevel1(id, level) {

    const docRef = doc(db, level, id);
    const docSnap = await getDoc(docRef);
    setAnswer(docSnap.data().Answer),
    setChoices(docSnap.data().Choices)
      // setChoice0(docSnap.data().Choice1),
      // setChoice1(docSnap.data().Choice2),
      // setChoice2(docSnap.data().Choice3),
      // setChoice3(docSnap.data().Choice4),
      setPointValue(docSnap.data().Point),
      setQuestionis(docSnap.data().Questionis)
      // setChoice0(Choices[0].label),
      // setChoice1(Choices[1].label),
      // setChoice2(Choices[2].label)
      // setChoice3(Choices[3].label)

  };


  useEffect(async () => {

    const docRef = doc(db, "Level one", id);
    const docSnap = await getDoc(docRef);
    let data = docSnap.data();
    
    if (data != undefined) {
     global.detrminedlevel='Level one'

    }
    else {
      const docRef = doc(db, "Level two", id);
      const docSnap = await getDoc(docRef);
      let data = docSnap.data();

      if (data != undefined) {
        global.detrminedlevel="Level two"
      } else {
        global.detrminedlevel="Level three"
      }
    }
     await getLevel1(id, detrminedlevel)

  }, []);

  async function EditQuestion(level,id){
  
    const docRef = doc(db, level, id);
    updateDoc(docRef, { Answer: answer, },{merge:true})
    updateDoc(docRef, { Choices:[{label: Choices[0].label},{label: Choices[1].label},{label: Choices[2].label},{label: Choices[3].label}]},{merge:true})
    updateDoc(docRef, { Point: PointValue},{merge:true})
    updateDoc(docRef, { Questionis: Questionis },{merge:true})

    Alert.alert('تم تعديل السؤال بنجاح')

  };

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

  function deleteQuestion()
  {deleteDoc(doc(db, detrminedlevel, id));
  Alert.alert('تم حذف السؤال بنجاح')
  navigation.goBack()}
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.rectanglesContainer}>
          <View style={styles.rectangle} />
          <View style={styles.rectangle2} />
          <View style={styles.rectangle3} />
        </View>

       <TouchableOpacity  onPress={()=>navigation.goBack()} >
        <Image style={styles.Back_icon}
         source= {require('../../../assets/Backicon.png')}/>  
        </TouchableOpacity>

        <View style={styles.baseTop} />
        <Text style={styles.pagetitle}> إختيار من متعدد </Text>
        <Text style={styles.Note1}> يمكنك التعديل على أي من محتويات السؤال</Text>
        <Text style={styles.Note2}>والضغط على " تعديل " و" حذف " لحذف السؤال </Text>

        <Text style={styles.title1}> السؤال :</Text>
        <Text style={styles.title2}> الإختيار الأول :</Text>
        <Text style={styles.title3}> الإختيار الثاني :</Text>
        <Text style={styles.title4}> الإختيار الثالث :</Text>
        <Text style={styles.title5}> الإختيار الرابع :</Text>
        <Text style={styles.title6}> الجواب :</Text>
        <Text style={styles.title7}> النقاط المستحقة :</Text>

        <TextInput
          placeholder={Questionis}
          onChangeText={(NewQuestionis) => setQuestionis(NewQuestionis)}
          style={styles.input}
        > {Questionis}</TextInput>
        <TextInput
          placeholder={Choices[0].label}
          onChangeText={(NewChoice0) => Choices[0].label=NewChoice0}
          style={styles.input}
         >{Choices[0].label}</TextInput>

        <TextInput
          placeholder={Choices[1].label}
          onChangeText={(NewChoice1) => Choices[1].label=NewChoice1}
          style={styles.input}
        >{Choices[1].label}</TextInput>

        <TextInput
          placeholder={Choices[2].label}
          onChangeText={(NewChoice2) => Choices[2].label=NewChoice2}
          style={styles.input}
        >{Choices[2].label}</TextInput>

        <TextInput
          placeholder={Choices[3].label}
          onChangeText={(NewChoice3) => Choices[3].label=NewChoice3}
          style={styles.input}
        >{Choices[3].label}</TextInput>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={point}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={PointValue}
          value={PointValue}
          onChange={item => {
            setPointValue(item.value);
          }}
          renderItem={renderItem}
        />

        <Dropdown
          style={styles.dropdown2}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={[
            { label: 'الإختيار الأول', value: 0 },
            { label: 'الإختيار الثاني', value: 1 },
            { label: 'الإختيار الثالث', value: 2 },
            { label: 'الإختيار الرابع', value: 3 }]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={Choices[answer].label}
          value={answer}
          onChange={item => {
            setAnswer(item.value);
          }}
          renderItem={renderItem2}
        />


    <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { EditQuestion(detrminedlevel,id) }}
            style={styles.button}>
            <Text style={styles.buttonText}>تعديل</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer1}>
          <TouchableOpacity onPress={() => { deleteQuestion() }}
            style={styles.button1}>
            <Text style={styles.buttonText}>حذف</Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 1100,
    width: 500
  },
  Back_icon:{
    position: 'absolute',
          left: 30,
         width:25,
         height:20,
        top:-45,
     },
  contentContainer: {
    paddingVertical: 20
  },

  iconStyle: {
    width: 20,
    height: 20,
    right: 250
  },

  pagetitle: {
    //left:0.5,
    left: 185,
    fontSize: 25,
    color: 'rgba(76, 87, 133, 1)',
    bottom: 70
  },

  title1: {
    left: 308,
    fontSize: 18,
    color: 'rgba(76, 87, 133, 1)',
    bottom: 40
  },

  title2: {
    left: 265,
    fontSize: 18,
    color: 'rgba(76, 87, 133, 1)',
    top: 25
  },

  title3: {
    left: 265,
    fontSize: 18,
    color: 'rgba(76, 87, 133, 1)',
    top: 95
  },

  title4: {
    left: 265,
    fontSize: 18,
    color: 'rgba(76, 87, 133, 1)',
    top: 165
  },

  title5: {
    left: 265,
    fontSize: 18,
    color: 'rgba(76, 87, 133, 1)',
    top: 240
  },

  title6: {
    left: 303,
    fontSize: 18,
    color: 'rgba(76, 87, 133, 1)',
    top: 305
  },

  title7: {
    left: 235,
    fontSize: 18,
    color: 'rgba(76, 87, 133, 1)',
    top: 367
  },

  Note1: {
    left: 125,
    fontSize: 16,
    color: 'rgba(76, 87, 133, 1)',
    bottom: 60
  },

  Note2: {
    left: 100,
    fontSize: 16,
    color: 'rgba(76, 87, 133, 1)',
    bottom: 60
  },

  rectangle: {
    width: 20 * 2,
    height: 20,
    backgroundColor: "rgba(187, 206, 219, 0.54)"
  },

  rectangle2: {
    width: 20 * 2,
    height: 20,
    backgroundColor: "rgba(111, 151, 177, 1)"
  },

  rectangle3: {
    width: 20 * 2,
    height: 20,
    backgroundColor: "rgba(76, 87, 133, 1)"
  },

  rectanglesContainer: {
    top: 200,
    left: 130,
    justifyContent: 'center',
    transform: [{ rotate: "90deg" }],
  },

  baseTop: {
    borderBottomWidth: 15,
    borderBottomColor: "rgba(76, 87, 133, 1)",
    borderLeftWidth: 20.5,
    borderLeftColor: "transparent",
    borderRightWidth: 20.5,
    borderRightColor: "transparent",
    transform: [{ rotate: "-90deg" }],
    left: 322,
    top: 67,
    position: "absolute"
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    left: 65
  },

  button: {
    backgroundColor: 'rgba(76, 87, 133, 1)',
    width:200,
    height:58,
    borderRadius:100,
    padding: 10,
    borderRadius: 50
  },

  buttonText: {
    color: 'white',
    padding: 20,
    height:26,
    bottom: 15,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
buttonContainer1: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    left: 65
  },

  button1: {
    backgroundColor: '#ed2939',
    width:200,
    height:58,
    borderRadius:100,
    padding: 10,
    borderRadius: 50
  },
  inputContainer: {
    height: 15,
    padding: 3,
    bottom: 350,
    marginTop: 20,
    textAlign: 'center'
  },

  input: {
    height: 39,
    marginTop: 55,
    paddingHorizontal: 15,
    left: 65,
    bottom: 220,
    width: 290,
    borderRadius: 100,
    borderColor: '#DAE5EB',
    borderWidth: 1,
    textAlign: 'right'
  },

  iconStyle: {
    width: 20,
    height: 20,
    right: 250
  },
  item: {
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  textItem: {
    flex: 1,
    fontSize: 15,
    height: 30
  },

  placeholderStyle: {
    fontSize: 13,
    color: '#B7B7B7',
    textAlign: 'right'
  },

  selectedTextStyle: {
    fontSize: 13,
    color: 'black',
    textAlign: 'right'
  },

  dropdown: {
    height: 39,
    left: 65,
    bottom: 90,
    width: 290,
    borderRadius: 100,
    borderColor: '#DAE5EB',
    borderWidth: 1,
    textAlign: 'center'
  },

  dropdown2: {
    height: 39,
    left: 65,
    bottom: 215,
    width: 290,
    borderRadius: 100,
    borderColor: '#DAE5EB',
    borderWidth: 1,
    textAlign: 'center'
  },

  Question: {
    right: 45,
    left: 5,
    color: '#4C5785',
    fontSize: 16,
    top: 15.17,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 15,
    margin: 2,
    marginHorizontal: 8,
    //padding:2,
    direction: 'ltr',
    textAlign: 'right',
    justifyContent: 'space-evenly',
    borderColor: '#6F96B3',
    borderRadius: 15,
    borderWidth: 1
  },

})

