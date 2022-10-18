import React ,{useState} from 'react';
import { StyleSheet,Alert,TextInput,TouchableOpacity,Text,Image, View} from 'react-native';
import {setDoc ,doc,collection,updateDoc} from 'firebase/firestore';
import {db} from '../../config_firebase/firebase';
import { Dropdown } from 'react-native-element-dropdown';
 
 
export default function EditQuestion() {
 
 
  const [NewQuestionis,setNewQuestionis]=useState('');
 
  const [NewChoice1,setNewChoice1]=useState("");
  const [NewChoice2,setNewChoice2]=useState("");
  const [NewChoice3,setNewChoice3]=useState("");
  const [NewChoice4,setNewChoice4]=useState("");
 
  var [NewChoices,setNewChoices]=useState([""]);
  NewChoices=[
    {label:NewChoice1},
    {label:NewChoice2},
    {label:NewChoice3},
    {label:NewChoice4}]
 
  const [value,setvalue]=useState([]);
  const [Newvalue3, setNewValue3] = useState("");
  const [Newvalue2, setNewValue2] = useState("");
  const [Newvalue, setNewValue] = useState("");
 
  //var [NewAnswer,setNewAnswer]=useState("");
  const NewAnswer=[
    {label:NewChoice1,value:NewChoice1},
    {label:NewChoice2,value:NewChoice2},
    {label:NewChoice3,value:NewChoice3},
    {label:NewChoice4,value:NewChoice4}]
 
  const Newpoint = [
    { label: '4 نقاط',value: 4  },
    { label: '5 نقاط',value: 5  },
    { label: '6 نقاط',value: 6  },];
 
 
  const NewquestionLevel = [
    { label: 'سهل ' , value: 1 },
    { label: 'متوسط', value: 2 },
    { label: 'صعب'  , value: 3 },];
 
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
 
 
  const update=()=>{
    const Question_update= doc(db, "QuestionsInfo",id);
 
   if(NewQuestionis !="")
    {updateDoc(doc(db, "QuestionsInfo",id),{
      Questionis:NewQuestionis,
    })}
   
   if(NewChoices != "")
    {updateDoc(doc(db, "QuestionsInfo",id),{
      Choices:[NewChoices[0],NewChoices[1],NewChoices[2],NewChoices[3]]
    })}
 
    if(Newpoint !="")
    {updateDoc(doc(db, "QuestionsInfo",id),{
      point: Newvalue
    })}
 
   if(NewAnswer !="")
    {updateDoc(doc(db, "QuestionsInfo",id),{
      Answer: Newvalue2
    })}
 
   if(NewquestionLevel !="")
    {updateDoc(doc(db, "QuestionsInfo",id),{
      questionLevel: Newvalue3
    })}
 
  };
 
    return (
      <View>
        <View style={styles.rectangle1} />
        <View style={styles.rectangle2} />
        <View style={styles.rectangle3} />
        <View style={styles.baseTop} />
     
      <Text style={styles.Pagtitle}> تعديل السؤال </Text>
      <Text style={styles.Note}>أدناه يمكنك تعديل أحد محتويات السؤال </Text>
 
      <TouchableOpacity  onPress={()=>navigation.goBack()} >
      <Image style={styles.Back_icon}
         source= {require('../../../assets/Backicon.png')}/>  
     </TouchableOpacity>

      <View style={styles.Search_Bar}>
 
              <TextInput
                placeholder="السؤال"
                onChangeText={(NewQuestionis)=>setNewQuestionis(NewQuestionis)}
                value={NewQuestionis}
                style={styles.input}
              />
               <TextInput
                placeholder="الإختيار الأول"
                onChangeText={(NewChoice1) => setNewChoice1(NewChoice1)}
                value={NewChoice1}
                style={styles.input}
              />
              <TextInput
                placeholder="الإختيار الثاني"
                onChangeText={(NewChoice2) => setNewChoice2(NewChoice2)}
                value={NewChoice2}
                style={styles.input}
              />
              <TextInput
                placeholder="الإختيار الثالث"
                onChangeText={(NewChoice3) => setNewChoice3(NewChoice3)}
                value={NewChoice3}
                style={styles.input}
              />  
              <TextInput
                placeholder="الإختيار الرابع"
                onChangeText={(NewChoice4) => setNewChoice4(NewChoice4)}
                value={NewChoice4}
                style={styles.input}>
              </TextInput>
            </View>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={Newpoint}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="اختاري النقاط المستحقة"
                value={Newvalue}
                onChange={item =>{
                  setNewValue(item.value);}}
                renderItem={renderItem}
              />
           
           <Dropdown
              style={styles.dropdown2}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={NewAnswer}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="الجواب"
              value={Newvalue2}
              onChange={item =>{
                setNewValue2(item.value);}}
              renderItem={renderItem2}
            />
            <Dropdown
              style={styles.dropdown3}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              data={NewquestionLevel}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="مستوى الصعوبة "
              value={Newvalue3}
              onChange={item =>{
                setNewValue3(item.value);}}
              renderItem={renderItem3}
            />
   
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={update}
                      style={styles.button}>
                <Text style={styles.buttonText}>تعديل</Text>
                </TouchableOpacity>
            </View>
      </View>
   
    );}
 
  const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'},
 
  iconStyle: {
    width: 20,
    height: 20,
    right:250},
 
  Pagtitle:{
    color: '#4C5785',
    height:25,
    fontWeight:'700',
    fontSize:20,
    alignContent:'center',
    position: 'absolute',
    left: '50%',
    top: '10%',
    bottom: '87.44%',},
 
  Note:{
    color: '#4C5785',
    height:25,
    fontWeight:'700',
    fontSize:15,
    alignContent:'center',
    position: 'absolute',
    left: '35%',
    top: '15%',
    bottom: '87.44%',},
 
 
  rectangle1: {
    width: 10 * 2,
    height: 40,
    bottom:-70,
    left:380,
    backgroundColor: "rgba(187, 206, 219, 0.54)"},
 
  rectangle2: {
    width: 10 * 2,
    height: 40,
    bottom:-30,
    left:360,
    backgroundColor: "rgba(111, 151, 177, 1)"},
 
  rectangle3: {
    width: 10 * 2,
    height: 40,
    top:-10,
    left:340,
    backgroundColor: "rgba(76, 87, 133, 1)"},
 
  baseTop: {
    borderBottomWidth: 15,
    borderBottomColor: "rgba(76, 87, 133, 1)",
    borderLeftWidth: 20.5,
    borderLeftColor: "transparent",
    borderRightWidth: 20.5,
    borderRightColor: "transparent",
    transform: [{ rotate: "-90deg" }],
    left: 312,
    top: 82,
    position: "absolute" },
 
  inputContainer:{
    height:15,
    padding:3,
    bottom:450,
    marginTop:20,
    textAlign:'center'
    },
   
  input:{
    height:39,
    marginTop:10,
    paddingHorizontal:15,
    left:65,
    top:96,
    width:290,
    borderRadius:100,
    borderColor:'rgba(187, 206, 219, 0.54)',
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
    top:200,
    width:290,
    borderRadius:100,
    borderColor:"rgba(187, 206, 219, 0.54)",
    borderWidth:1,
    textAlign:'right'},
 
  dropdown2: {
    height:39,
    left:65,
    top:65,
    width:290,
    borderRadius:100,
    borderColor:"rgba(187, 206, 219, 0.54)",
    borderWidth:1,
    textAlign:'right'},
 
  dropdown3: {
    height:39,
    left:65,
    top:75,
    width:290,
    borderRadius:100,
    borderColor:'rgba(187, 206, 219, 0.54)',
    borderWidth:1,
    textAlign:'right'},
 
  Exit1:{
    color:'#E55C72',
    position: 'absolute',
    top:250,
    left:175,
    fontSize:20 },
 
  buttonContainer:{
    width:'60%',
    height:'40%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
    left:85},
 
  button:{
    backgroundColor:'rgba(76, 87, 133, 1)',
    width:'50%',
    //padding:10,
    borderRadius:50},
   
  buttonText:{
    color:'white',
    padding:15,
    bottom:2,
    fontSize:16,
    fontWeight:'700',
    textAlign:'center'},
 
});
 

