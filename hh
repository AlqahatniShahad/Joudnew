// // import  React,{useState,useEffect} from 'react';
// // import { StyleSheet,Text,View ,TouchableOpacity,Alert,KeyboardAvoidingView,Platform,TextInput,Image, ScrollView} from 'react-native';
// // import { collection,onSnapshot,doc, deleteDoc} from "firebase/firestore";
// // import {db} from '/Users/shahadfehaidalqhatni/s/src/config_firebase/firebase.js'
// // import {deleteUser } from "firebase/auth";
// // //import {authentication} from '/Users/shahadfehaidalqhatni/s/src/config_firebase/firebase.js'
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// // export default function Admins({navigation}) {

// //   const [Admin, setAdmin] = useState([""])
// //   const [filtered, setFiltered] = useState([])
// //   const [searching, setSearching] = useState(false)
 
 
// //   useEffect(() =>
// //   onSnapshot(collection(db,"Admin"), (snapshot) =>
// //   setAdmin(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))),
// //   getadmin()
// //   , []
// //   );

// //   function getadmin(){
// //     setFiltered(Admin)
// //   }

// //   const onSearch = (text) => {
    
// //     if (text) {
// //       setSearching(true)
// //       const temp = text.toLowerCase()

// //       const tempList = Admin.filter(item => {
// //       if (item.name.match(temp))
// //           return item.name
// //       })
// //       setFiltered(tempList)
// //     }
// //     else {
// //       setSearching(false)
// //       setFiltered(Admin)
// //     }}
    
// // function deleteAdmin (id)
// //  {deleteDoc(doc(db, "Admin", id));}
// //   return (
   
// //     <View style={styles.container}>
  
// //       <View style={styles.rectangle} />
// //       <View style={styles.rectangle2} />
// //       <View style={styles.rectangle4} />
// //       <View style={styles.rectangle3} />
// //       <View style={styles.baseTop} />
 
      
// //       <Text style={styles.Admin_Name}> مشرفات اللعبة </Text>

// //       <View style={styles.Search_Bar}>
// //         <KeyboardAvoidingView
// //          behavior={Platform.OS === "ios" ? "padding" : "height"}
// //          style={styles.Seach_Player}>
// //          <TextInput style={styles.textInput} placeholder={'بحث عن مشرفه'} 
// //          onChangeText={onSearch}
// //          /></KeyboardAvoidingView>
// //            <Image style={styles.Search_icon}
// //           source= {require('/Users/shahadfehaidalqhatni/s/assets/Searchiocn.png')}/>

        
         
// //       </View>
       
// //        <View style={styles.admin}> 
// //        <ScrollView>
  
// //        {filtered.map((item)=> {
// //           return(
// //              <View style={styles.Playercontainer}>
// //               <Text style={styles.Player_name}>{item.name}</Text>
            
                
// //                <TouchableOpacity onPress={()=>navigation.navigate('EditiAdminProfile',{AdminID:item.id})  }>
// //                 <Image style={styles.settingicon}
// //                 source= {require('/Users/shahadfehaidalqhatni/s/assets/Settingicon.png')}/>   
// //                </TouchableOpacity>
              
// //                <TouchableOpacity onPress={()=> deleteAdmin(item.id)}>
// //                <MaterialCommunityIcons style={styles.garbageicon} name="delete-outline"  size={22}/>    
               
// //                </TouchableOpacity>
          
// //             </View>
// //         )})}
// //        </ScrollView>
// //        <View />
// //        </View>
       
// //            <View style={styles.circle}>

// //              <TouchableOpacity onPress={()=>navigation.navigate('add_admin')}>
// //                <Image style={styles.plusicon}
// //                 source= {require('/Users/shahadfehaidalqhatni/s/assets/plusicon.png')}/>  
// //              </TouchableOpacity>

// //           </View>
   
// //           <TouchableOpacity  onPress={()=>navigation.navigate('users')} >
// //       <Image style={styles.Back_icon}
// //          source= {require('/Users/shahadfehaidalqhatni/s/assets/Backicon.png')}/>  
// //      </TouchableOpacity>
    
    
// //     </View> 
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff'},
// //   Admin_Na:{
// //     backgroundColor: '#BBCEDB',
// //     borderRadius:33,
// //     paddingHorizontal:10,
// //     width:148,
// //     height:52,
// //     position: 'absolute',
// //     left: '56.53%',
// //     right: '4%',
// //     top: '10.39%',
// //     bottom: '86.21%',},
// //   Admin_Name:{
// //     color: '#4C5785',
// //     height:25,
// //     fontWeight:'700',
// //     fontSize:20,
// //     alignContent:'center',
// //     position: 'absolute',
// //     left: '44%',
// //     top: '12.20%',
// //     bottom: '87.44%',},
// // Search_Bar:{
// //     position: 'absolute',
// //     width:305,
// //     height:41,
// //     left:53,
// //     top:230,},

// // textInput:{
// //     position: 'absolute',
// //     left: '3.8%',
// //     right: '5.8%',
// //     top: '31.88%',
// //     bottom: '72.66%',
// //     fontSize: 13,
// //     height: 39,
// //     width:300,
// //     color: '#4C5785',
// //     backgroundColor:'#fff',
// //     borderColor:'#6F97B1',
// //     borderWidth:1,
// //     borderRadius:33,
// //     textAlign:'center'},

// // Search_icon:{
// //     position: 'absolute',
// //     left: '80%',
// //     right: '15.72%',
// //     top: '18.37%',
// //     bottom: '72.65%',
// //     height:20,
// //     width:20},

// // admin:{
// //     position: 'absolute',
// //     left: '15.8%',
// //     right: '5.8%',
// //     top: '31.88%',
// //     bottom: '40.66%',
// //     width:300,
// //     height:440,
// //     color: '#6F97B1',
// //     backgroundColor:'#fff',
// //     borderColor:'#DAE5EB',
// //     borderWidth:1,
// //     borderRadius:10,
// //     textAlign:'center',
// //     marginVertical:8,
// //     padding:5,},
  
// //   Playercontainer:{
// //     left:30,
// //     right:10,
// //     borderColor:'#6F96B3',
// //     borderRadius: 24,
// //     borderWidth:1,
// //     width:225,
// //     height:41,
// //     top: 5.17,
// //     marginVertical:8,
// //     padding:5
// //   },
// //   Player_name:{
// //     left:90,
// //     color:'#4C5785',
// //     fontSize:16,
// //     top: 5.17,},

// //   backgrounicon:{
// //     position: 'absolute',
// //     width:39,
// //     height:35,
// //     left: 175,
// //     right: 0.67,
// //     top: 2.17,
// //     bottom: 40.64,
// // },
// //   Joudicon:{
// //    position: 'absolute',
// //    width:30,
// //    height:30,
// //    left: 179,
// //    right: 0.67,
// //    top: 4.17,
// //    bottom: 40.64,
// // },
// // settingicon:{
// //   position: 'absolute',
// //   left:25,
// //   width:34,
// //   height:30,
// //   bottom: -12,
// //   borderRadius:10},

// //   garbageicon:{
// //     position: 'absolute',
// //     left:6,
// //     width:20,
// //     color:'#6F96B3',
// //     height:20,
// //     right: 220.2,
// //     bottom: -5,
// //     borderRadius:10},
// //     circle:{
// //       position:'absolute',
// //       left: 340,
// //       bottom: 70.33,
// //       height:41,
// //       width:41 ,
// //       borderRadius:30,
// //       borderColor:'#6F97B1',
// //       borderWidth:2},
// //       plusicon:{
// //        left: 6,
// //        bottom: -6.33,
// //        width:25,
// //        height:25
// //       },
// //       Back_icon:{
// //         position: 'absolute',
// //         left: 30.47,
// //         width:25,
// //         height:20,
// //         top: -30.78,
// //       },
// //      rectangle:{
// //      color:'#BBCEDB',
// //      left:40,
// //      top:50,
// //      width: 10 * 2,
// //      height: 20,
// //      },
// //      rectangle2: {
// //       width: 30,
// //       height: 40,
// //       top:80,
// //       left:360,
// //       backgroundColor: "rgba(111, 151, 177, 1)",
// //     },
// //     rectangle4: {
// //       width: 30,
// //       height: 40,
// //       top:40,
// //       left:390,
// //       backgroundColor: "#BBCEDB",
// //     },

// //     rectangle3: {
// //       width: 30,
// //       height: 40,
// //       top:0,
// //       left:330,
// //       backgroundColor: "rgba(76, 87, 133, 1)",
// //     },
// //     baseTop: {
// //       borderBottomWidth: 15,
// //       borderBottomColor: "rgba(76, 87, 133, 1)",
// //       borderLeftWidth: 20.5,
// //       borderLeftColor: "transparent",
// //       borderRightWidth: 20.5,
// //       borderRightColor: "transparent",
// //       transform: [{ rotate: "-90deg" }],
// //       left: 302,
// //       top: 113,
// //       position: "absolute",
// //     },
    
// // });



// import  React,{useState,useEffect} from 'react';
// import { StyleSheet,Text,View ,Button,TouchableOpacity,Alert,KeyboardAvoidingView,Platform,TextInput,Image, ScrollView} from 'react-native';
// import { db } from '/Users/shahadfehaidalqhatni/s/src/config_firebase/firebase.js';
// import { collection,onSnapshot,doc, deleteDoc} from "firebase/firestore";
// import {deleteUser } from "firebase/auth";
// import {authentication} from '/Users/shahadfehaidalqhatni/s/src/config_firebase/firebase.js'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { set } from 'lodash';
// import { SvgFromUri } from 'react-native-svg';



// const Add=()=>{//Alert.alert("Welcome to add")
// }

// export default function Players({navigation}) {

//   const [Player, setPlayer] = useState([""])
//   const [filtered, setFiltered] = useState([])
//   const [searching, setSearching] = useState(false)

//   useEffect(() =>{
//          onSnapshot(collection(db,"player"), (snapshot) =>
//          setPlayer(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
//          setfilterd()},[]
//   );

//   function setfilterd(){

//     setFiltered(Player)
//   }

//   const onSearch = (text) => {
//     if (text) {
//       setSearching(true)
//       const temp = text.toLowerCase()

//       const tempList = Player.filter(item => {
//       if (item.name.toLowerCase().match(temp))
//           return item.name
//       })
//       setFiltered(tempList)
//     }
//     else if (''){
//       setSearching(false)
//       setFiltered(Player)
// }}
    
// function deletePlayer(id)
//  {deleteDoc(doc(db, "player", id));}


//   return (
   
//     <View style={styles.container}>
//        <View style={styles.rectangle} />
//       <View style={styles.rectangle2} />
//       <View style={styles.rectangle4} />
//       <View style={styles.rectangle3} />
//       <View style={styles.baseTop} />

//       <Text style={styles.Admin_Name}> اللاعبات </Text>
      

//       <View style={styles.Search_Bar}>
//         <KeyboardAvoidingView
//          behavior={Platform.OS === "ios" ? "padding" : "height"}
//          style={styles.Seach_Player}>
//          <TextInput style={styles.textInput} placeholder={'بحث عن لاعبة'}
//          onChangeText={onSearch} 
//          /></KeyboardAvoidingView>
         
//          <Image style={styles.Search_icon}
//           source= {require('/Users/shahadfehaidalqhatni/s/assets/Searchiocn.png')}/>
//       </View>
       
//        <View style={styles.Players}> 
//        <ScrollView>
//        {filtered.map((item)=> {
//           return(
//              <View style={styles.Playercontainer}>
//               <Text style={styles.Player_name}>{item.name }</Text>
//               {/* <Text style={styles.Player_name}>{item.id }</Text> */}
//               <Image style={styles.backgrounicon}
//                source= {require('/Users/shahadfehaidalqhatni/s/assets/backgroun.png')}/>

//                <Image style={styles.Joudicon}
//                source= {require('/Users/shahadfehaidalqhatni/s/assets/Joudicon1.png')}/>

//                <TouchableOpacity onPress={()=>navigation.navigate('EditiPlayerProfile',{PlayerID:item.id})}>
//                 <Image style={styles.settingicon}
//                 source= {require('/Users/shahadfehaidalqhatni/s/assets/Settingicon.png')}/>   
//                </TouchableOpacity>
 
//                <TouchableOpacity onPress={deletePlayer}>
//                 <Image style={styles.garbageicon}
//                 source= {require('/Users/shahadfehaidalqhatni/s/assets/Garbage.png')}/>  
//                </TouchableOpacity>

//             </View>
//        )})}
//        </ScrollView>
//        <View />
//        </View>

//           <View style={styles.circle}>
//          <TouchableOpacity onPress={()=>navigation.navigate('add_player')}>
//           <Image style={styles.plusicon}
//            source= {require('/Users/shahadfehaidalqhatni/s/assets/plusicon.png')}/>  
//           </TouchableOpacity>
//          </View>

        
//       <TouchableOpacity  onPress={()=>navigation.navigate('users')} >
//       <Image style={styles.Back_icon}
//          source= {require('/Users/shahadfehaidalqhatni/s/assets/Backicon.png')}/>  
//      </TouchableOpacity>

//     </View> 
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'},
//   Admin_Na:{
//     backgroundColor: '#BBCEDB',
//     borderRadius:33,
//     paddingHorizontal:10,
//     width:148,
//     height:52,
//     position: 'absolute',
//     left: '56.53%',
//     right: '4%',
//     top: '10.39%',
//     bottom: '86.21%',},
//   Admin_Name:{
//     color: '#4C5785',
//     height:25,
//     fontWeight:'700',
//     fontSize:20,
//     alignContent:'center',
//     position: 'absolute',
//     left: '55%',
//     right: '8.47%',
//     top: '12.42%',
//     bottom: '87.44%',},
// Search_Bar:{
//     position: 'absolute',
//     width:305,
//     height:41,
//     left:53,
//     top:230,},
// textInput:{
//     position: 'absolute',
//     left: '3.8%',
//     right: '5.8%',
//     top: '31.88%',
//     bottom: '72.66%',
//     fontSize: 13,
//     height: 39,
//     width:300,
//     color: '#4C5785',
//     backgroundColor:'#fff',
//     borderColor:'#6F97B1',
//     borderWidth:1,
//     borderRadius:33,
//     textAlign:'center'},
// Search_icon:{
//     position: 'absolute',
//     left: '80%',
//     right: '15.72%',
//     top: '18.37%',
//     bottom: '72.65%',
//     height:20,
//     width:20},
// Players:{
//     position: 'absolute',
//     left: '15.8%',
//     right: '5.8%',
//     top: '31.88%',
//     bottom: '40.66%',
//     width:300,
//     height:440,
//     color: '#6F97B1',
//     backgroundColor:'#fff',
//     borderColor:'#DAE5EB',
//     borderWidth:1,
//     borderRadius:10,
//     textAlign:'center',
//     marginVertical:8,
//     padding:5,},
  
//   Playercontainer:{
//     left:30,
//     right:10,
//     borderColor:'#6F96B3',
//     borderRadius: 24,
//     borderWidth:1,
//     width:225,
//     height:41,
//     top: 5.17,
//     marginVertical:8,
//     padding:5
//   },
//   Player_name:{
//     left:70,
//     color:'#4C5785',
//     fontSize:16,
//     top: 5.17,},

//   backgrounicon:{
//     position: 'absolute',
//     width:39,
//     height:35,
//     left: 175,
//     right: 0.67,
//     top: 2.17,
//     bottom: 40.64,
// },
//   Joudicon:{
//    position: 'absolute',
//    width:30,
//    height:30,
//    left: 179,
//    right: 0.67,
//    top: 4.17,
//    bottom: 40.64,
// },
// settingicon:{
//   position: 'absolute',
//   left:25,
//   width:34,
//   height:30,
//   bottom: -12,
//   borderRadius:10},

//   garbageicon:{
//     position: 'absolute',
//     left:8,
//     width:20,
//     height:20,
//     right: 220.2,
//     bottom: -7,
//     borderRadius:10},
//     circle:{
//       position:'absolute',
//       left: 340,
//       bottom: 70.33,
//       height:41,
//       width:41 ,
//       borderRadius:30,
//       borderColor:'#6F97B1',
//       borderWidth:2},
 
//       plusicon:{
//        left: 6,
//        bottom: -6.33,
//        width:25,
//        height:25
//       },
//       Back_icon:{
//         position: 'absolute',
//         left: 30.47,
//         width:25,
//         height:20,
//         top: -30.78,
//       },
//     rectangle:{
//     color:'#BBCEDB',
//     left:40,
//     top:50,
//     width: 10 * 2,
//     height: 20,
//     },
//     rectangle2: {
//      width: 30,
//      height: 40,
//      top:80,
//      left:360,
//      backgroundColor: "rgba(111, 151, 177, 1)",
//    },
//    rectangle4: {
//      width: 30,
//      height: 40,
//      top:40,
//      left:390,
//      backgroundColor: "#BBCEDB",
//    },

//    rectangle3: {
//      width: 30,
//      height: 40,
//      top:0,
//      left:330,
//      backgroundColor: "rgba(76, 87, 133, 1)",
//    },
//    baseTop: {
//      borderBottomWidth: 15,
//      borderBottomColor: "rgba(76, 87, 133, 1)",
//      borderLeftWidth: 20.5,
//      borderLeftColor: "transparent",
//      borderRightWidth: 20.5,
//      borderRightColor: "transparent",
//      transform: [{ rotate: "-90deg" }],
//      left: 302,
//      top: 113,
//      position: "absolute",
//    },
// });


