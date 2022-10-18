import  React,{useState,useEffect} from 'react';
import { StyleSheet,Text,View ,TouchableOpacity,Alert,KeyboardAvoidingView,Platform,TextInput,Image, ScrollView} from 'react-native';
import { collection,onSnapshot, doc,deleteDoc,docs, query, limit, getDoc, getDocs, snapshot} from "firebase/firestore";
import { Octicons } from '@expo/vector-icons';
import { db } from '../../config_firebase/firebase';
import { async } from '@firebase/util';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


 

 
export default function Admin({route,navigation}) {
 

  const [filtered, setFiltered] = useState([])
  const [searching, setSearching] = useState(false)
  const [admin, setAdmin]=useState([]);
  const [adminv,setAdminv]= useState([]);
  
  
   useEffect(() =>{
      onSnapshot(collection(db,"Admin"), (snapshot) =>
      setAdmin(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
       setfilterd();
    },[]);  
  
 
 async function setfilterd(){
   const querySnapshot = await getDocs(collection(db,"Admin"));
   setAdminv(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
   setFiltered(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  
 
 }
   
 const onSearch=(text)=>{
  
      if (text) {
      setSearching(true)
      const temp = text.toLowerCase()
      const tempList = admin.filter(item => {
      if (item.name.toLowerCase().match(temp))
          return item.name
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(adminv)
    }}
  
 
    function deleteAdmin(id)
    {deleteDoc(doc(db, "Admin", id));
   Alert.alert('تم الحذف ')
   }
    
 return (
     <View style={styles.container}>
       <View>
       <View style={styles.rectangle1}/>
       <View style={styles.rectangle2}/>
       <View style={styles.rectangle3}/>
       <View style={styles.baseTop} />
       <Text style={styles.Pagtitle}> مشرفين اللعبة </Text>
       <View style={styles.Search_Bar}>
       <TouchableOpacity  onPress={()=> navigation.goBack()} >
       <Image style={styles.Back_icon}
          source= {require('../../../assets/Backicon.png')}/>  
      </TouchableOpacity> 
 
       <TextInput
       style={styles.textInput}
       placeholder={'بحث عن مشرفة'}
       onChangeText={onSearch}
       />
       <Octicons style={styles.saerchicon} name="search" size={15} color="gray" />
      
       </View>
  
       <View style={styles.AdminsList}>
       <ScrollView>
         <View>
          
             {filtered.map((item) =>
             {
               return(
                 <View style={styles.Playercontainer}>
                  <Text style={styles.Player_name}>{item.name}</Text>
                
                    
                   <TouchableOpacity onPress={()=>navigation.navigate('EditiAdminProfile',{AdminID:item.id})  }>
                    <Image style={styles.settingicon}
                    source= {require('../../../assets/Settingicon.png')}/>   
                   </TouchableOpacity>
                  
                   <TouchableOpacity onPress={()=>{Alert.alert(
                       "حذف",
                       "هل انت متأكدة حذف هذا المستخدم؟",
                 [{
                       text: "لا",
                       onPress: () => console.log("Cancel Pressed"),
                       style: "cancel"},
                     { text: "نعم", onPress: () => { deleteAdmin(item.id)} }]
                 );}}>
                   <MaterialCommunityIcons style={styles.garbageicon} name="delete-outline"  size={22}/>    
                   
                   </TouchableOpacity>
              
                </View>
            )})}
         </View>
 
  
 
       </ScrollView>
       </View>
       </View>
       <View style={styles.circle}>
 
 <TouchableOpacity onPress={() => navigation.navigate('add_admin')}>
   <Image style={styles.plusicon}
     source={require('../../../assets/plusicon.png')} />
 </TouchableOpacity>
 
 </View>
 
     </View>
 );}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'},
    Player_name:{
     left:90,
     color:'#4C5785',
     fontSize:16,
     top: 5.17,},
     Playercontainer:{
       left:30,
       right:10,
       borderColor:'#6F96B3',
       borderRadius: 24,
       borderWidth:1,
       width:225,
       height:41,
       top: 5.17,
       marginVertical:8,
       padding:5
     },
     garbageicon:{
       position: 'absolute',
       left:6,
       width:20,
       color:'#6F96B3',
       height:20,
       right: 220.2,
       bottom: -5,
       borderRadius:10},
     settingicon:{
       position: 'absolute',
       left:25,
       width:34,
       height:30,
       bottom: -12,
       borderRadius:10},
     Player_name:{
       left:90,
       color:'#4C5785',
       fontSize:16,
       top: 5.17,},
   
   Pagtitle:{
     color: '#4C5785',
     height:25,
     fontWeight:'700',
     fontSize:20,
     alignContent:'center',
     position: 'absolute',
     left: '47%',
     top: '80%',
     bottom: '87.44%',},
  
   Search_Bar:{
     position: 'absolute',
     width:305,
     height:41,
     left:53,
     top:210,},
  
   textInput:{
     position: 'absolute',
     left: '3.8%',
     right: '5.8%',
     top: '31.88%',
     bottom: '72.66%',
     fontSize: 13,
     height: 39,
     width:300,
     color: '#4C5785',
     backgroundColor:'#fff',
     borderColor:'#6F97B1',
     borderWidth:1,
     borderRadius:33,
     textAlign:'center'},
     saerchicon:{
      left:265,
      top:25
     },
     AdminsList:{
     position: 'absolute',
     left: '15.8%',
     right: '5.8%',
     top: '235%',
     bottom: '40.66%',
     width:300,
     height:440,
     color: '#6F97B1',
     backgroundColor:'#fff',
     borderColor:'#DAE5EB',
     borderWidth:1,
     borderRadius:10,
     textAlign:'center',
     alignItems:'stretch',
     // marginVertical:8,
     padding:5,},
  
   Question:{
     right:45,
     left:5,
     color:'#4C5785',
     fontSize:16,
     top: 15.17,
     paddingLeft:15,
     paddingRight:15,
     paddingVertical:15,
     margin:2,
     marginHorizontal:8,
     //padding:2,
     direction:'ltr',
     textAlign:'right',
     justifyContent:'space-evenly',
     borderColor:'#6F96B3',
     borderRadius:15,
     borderWidth:1},
  
  
  
   rectangle1:{
     width: 30,
     height: 40,
     top:80,
     left:360,
     backgroundColor: "rgba(111, 151, 177, 1)",},
  
   rectangle2: {
     width: 30,
     height: 40,
     top:40,
     left:390,
     backgroundColor: "#BBCEDB",},
  
   rectangle3: {
     width: 30,
     height: 40,
     top:0,
     left:330,
     backgroundColor: "rgba(76, 87, 133, 1)",},
  
   baseTop: {
     borderBottomWidth: 15,
     borderBottomColor: "rgba(76, 87, 133, 1)",
     borderLeftWidth: 20.5,
     borderLeftColor: "transparent",
     borderRightWidth: 20.5,
     borderRightColor: "transparent",
     transform: [{ rotate: "-90deg" }],
     left: 302,
     top: 92.5,
     position: "absolute",},
     circle: {
       position: 'absolute',
       left: 340,
       bottom: 105,
       height: 41,
       width: 41,
       borderRadius: 30,
       borderColor: '#6F97B1',
       borderWidth: 2
     },
   
     plusicon: {
       left: 6,
       bottom: -6.33,
       width: 25,
       height: 25
     },
     Back_icon:{
       position: 'absolute',
       left: -10.47,
       width:25,
       height:20,
       top: -110.78,
     },
 });
  
 

