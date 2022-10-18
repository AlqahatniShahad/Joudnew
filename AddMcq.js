

import { useState} from 'react';
import { doc,getDoc, setDoc,deleteDoc , collection, addDoc} from 'firebase/firestore';
import { StyleSheet, Text,TextInput, View,TouchableOpacity,ScrollView,StatusBar,SafeAreaView, Alert ,Image} from 'react-native';
import {db} from '../../config_firebase/firebase';
import { Dropdown } from 'react-native-element-dropdown';
 
export default function MultipleChoiceQuestion({navigation}) {
 //store user data
  const [state,setState]= useState("");
  const [Questionis,setQuestionis]=useState("");
  const [Choices, setChoices] = useState(['','','','']);
  const [points, setPoints] = useState(1);
  const [answer, setAnswer] = useState(0);
  const [level, setLevel] = useState(1);
  const [value, setValue] = useState(0);
  
  const point = [
    { label: 'نقطة'     , value: 1 },
    { label: 'نقطتان'   , value: 2 },
    { label: 'ثلاثة نقاط', value: 3 }];
 
  const questionLevel = [
    { label: 'سهل ' , value: 1 },
    { label: 'متوسط', value: 2 },
    { label: 'صعب'  , value: 3 }];

  const Answer=[{label:"الاختيار الأول", value: 0},
                {label:"الاختيار الثاني", value: 1},
                {label:"الاختيار الثالث", value: 2},
                {label:"الاختيار الرابع", value: 3}]
 
const Create = async() => {
 let lvl
if(level == 1){
    lvl="Level one"
}
if(level == 2){
    lvl="Level two"
}
if(level == 3){
    lvl="Level three"
 } 
 if(Questionis==""||Choices[0]==''||Choices[1]==''||Choices[2]==''||Choices[3]==''){Alert.alert("الرجاء إدخال كافة البيانات")}
 else{
    addDoc( collection(db,lvl),{
    Questionis: Questionis,
    Choices:[{label:Choices[0]},{label:Choices[1]},{label:Choices[2]},{label:Choices[3]}],
    Answer: answer,
    Point: points,
    QuestionLevel:level,
    Type: "إختيار من متعدد",
    }).then(() => {
      alert("تم إضافة السؤال بنجاح ")
    })
    .catch((error) => {
      alert(error.message)
    })}
};
 
  //  console.log(Choices[0].label)
    
    const renderItem = (item) => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value}
        </View>
      );};
    const renderItem2 = (item) => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value}
        </View>
      );};
 
    const renderItem3 = (item) => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value}
        </View>
      );};
 return (
  <ScrollView >
<View style={styles.container}>
 
              <View style={styles.rectangle} />
              <View style={styles.rectangle2} />
              <View style={styles.rectangle3} />
              <View style={styles.baseTop} />
              <Text style={styles.pagetitle}> إختيار من متعدد </Text>
              <Text style={styles.Text3}> يمكنك إضافة سؤال بعد ملئ التالي والضغط على "إضافة" </Text>
 
        <TouchableOpacity  onPress={()=>navigation.goBack()} >
        <Image style={styles.Back_icon}
         source= {require('../../../assets/Backicon.png')}/>  
        </TouchableOpacity>

              <Text style={styles.title1}> السؤال :</Text>
              <Text style={styles.title2}> الإختيار الأول :</Text>
              <Text style={styles.title3}> الإختيار الثاني :</Text>
              <Text style={styles.title4}> الإختيار الثالث :</Text>
              <Text style={styles.title5}> الإختيار الرابع :</Text>
              <Text style={styles.title6}> الجواب :</Text>
              <Text style={styles.title7}> مستوى صعوبة السؤال :</Text>
              <Text style={styles.title8}> النقاط المستحقة :</Text>
 
              <View style={styles.inputContainer}>
             
              <TextInput
                placeholder="السؤال"
                onChangeText={(Questionis)=>setQuestionis(Questionis)}
                value={Questionis}
                style={styles.input}
              />
              <TextInput
                placeholder="الإختيار الأول"
                onChangeText={(Choice1) =>setChoices([Choice1,Choices[1],Choices[2],Choices[3]])}
                // value={Choices[0].label}
                style={styles.input}
              />
              <TextInput
                placeholder="الإختيار الثاني"
                onChangeText={(Choice2) =>  setChoices([Choices[0],Choice2,Choices[2],Choices[3]])}
                // value={Choices[1].label}
                style={styles.input}
              />
              <TextInput
              placeholder="الإختيار الثالث"
              onChangeText={(Choice3) => setChoices([Choices[0],Choices[1],Choice3,Choices[3]])}
              // value={Choices[2].label}
              style={styles.input}
              />
              <TextInput
              placeholder="الإختيار الرابع"
              onChangeText={(Choice4) => setChoices([Choices[0],Choices[1],Choices[2],Choice4])}
              // value={Choices[3].label}
              style={styles.input}
              />
 
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={point}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="اختاري النقاط المستحقة"
              value={points}
              onChange={item =>{
                setPoints(item.value);}}
              renderItem={renderItem}
            />
            <Dropdown
              style={styles.dropdown2}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={Answer}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="الجواب"
              value={answer}
              onChange={item =>{
                setAnswer(item.value);}}
              renderItem={renderItem2}
            />
            <Dropdown
              style={styles.dropdown3}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={questionLevel}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="مستوى الصعوبة "
              value={level}
              onChange={item =>{
                setLevel(item.value);}}
              renderItem={renderItem3}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=>{Create()}}
                  style={styles.button}>
                <Text style={styles.buttonText}>إضافة</Text>
                </TouchableOpacity>
            </View>
 
            </View>
            </View>
            </ScrollView>
 
);
}
 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent:'center',
    height:1200,
    width:500
  },
 
  contentContainer: {
    paddingVertical: 20
  },
 
  iconStyle: {
    width: 20,
    height: 20,
    right:250},
 
  pagetitle:{
    //left:0.5,
    left:185,
    fontSize:25,
    color:'rgba(76, 87, 133, 1)',
    bottom:465},
 
  title1:{
    left:308,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
    bottom:420
  },
 
  title2:{
    left:265,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
    bottom:360
  },
 
  title3:{
    left:265,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
    bottom:300
  },
 
  title4:{
    left:265,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
    bottom:235
  },
 
  title5:{
    left:265,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
    bottom:175
  },
 
  title6:{
    left:303,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
    bottom:110
  },
 
  title7:{
    left:203,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
    bottom:50
  },
 
  title8:{
    left:237,
    fontSize:18,
    color:'rgba(76, 87, 133, 1)',
    bottom:-15
  },
 
  Text3:{
    left:55,
    fontSize:16,
    color:'rgba(76, 87, 133, 1)',
    bottom:450},
 
 
  rectangle: {
    width: 10 * 2,
    height: 40,
    bottom:350,
    left:395,
    backgroundColor: "rgba(187, 206, 219, 0.54)"},
 
  rectangle2: {
    width: 10 * 2,
    height: 40,
    bottom:390,
    left:375,
    backgroundColor: "rgba(111, 151, 177, 1)"},
 
  rectangle3: {
    width: 10 * 2,
    height: 40,
    bottom:430,
    left:355,
    backgroundColor: "rgba(76, 87, 133, 1)"},
 
  baseTop: {
    borderBottomWidth: 15,
    borderBottomColor: "rgba(76, 87, 133, 1)",
    borderLeftWidth: 20.5,
    borderLeftColor: "transparent",
    borderRightWidth: 20.5,
    borderRightColor: "transparent",
    transform: [{ rotate: "-90deg" }],
    left: 327,
    bottom:1115,
    position: "absolute" },
 
  buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    bottom:40,
    left:65},
 
  button:{
    backgroundColor:'rgba(76, 87, 133, 1)',
    width:'50%',
    padding:10,
    borderRadius:50},
 
  buttonText:{
    color:'white',
    padding:20,
    bottom:10,
    fontSize:16,
    fontWeight:'700',
    textAlign:'center'},
 
  inputContainer:{
    height:15,
    padding:3,
    bottom:350,
    marginTop:20,
    textAlign:'center'},
   
  input:{
    height:39,
    marginTop:45,
    paddingHorizontal:15,
    left:65,
    bottom:285,
    width:290,
    borderRadius:100,
    borderColor:'#DAE5EB',
    borderWidth:1,
    textAlign:'right'},
 
  iconStyle: {
    width: 20,
    height: 20,
    right:250},
    item: {
      padding: 5,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end'},
   
  textItem: {
    flex: 1,
    fontSize: 15,
    height:30},
 
  placeholderStyle: {
    fontSize: 13,
    color: '#B7B7B7',
    textAlign:'right' },
 
  selectedTextStyle: {
    fontSize: 13,
    color:'black',
    textAlign:'right'},
 
  dropdown: {
    height:39,
    left:65,
    bottom:75,
    width:290,
    borderRadius:100,
    borderColor:'#DAE5EB',
    borderWidth:1,
    textAlign:'center'},
 
  dropdown2: {
    height:39,
    left:65,
    bottom:280,
    width:290,
    borderRadius:100,
    borderColor:'#DAE5EB',
    borderWidth:1,
    textAlign:'center'},
 
  dropdown3: {
    height:39,
    left:65,
    bottom:235,
    width:290,
    borderRadius:100,
    borderColor:'#DAE5EB',
    borderWidth:1,
    textAlign:'center'},
    
    Back_icon:{
      position: 'absolute',
            left: 30,
           width:25,
           height:20,
          top: -520,
       },
     });
