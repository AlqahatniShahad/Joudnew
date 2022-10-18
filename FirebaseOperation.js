import React, { Component, useState ,useEffect,useLayoutEffect} from "react";
import { authentication,db } from '../config_firebase/firebase';
import { collection, doc, setDoc ,onSnapshot,query,where,getDoc} from "firebase/firestore"; 
import { Alert } from "react-native";


export const useFirestore = (roomID) => {

  
const [writePlayers, setWritePlayers] = useState([]);
const [readPlayers, setReadPlayers] = useState([]);



  //Read With specific ID
  // useEffect(() => {
  //   const Gamesession = doc(db, 'Game', roomID)
  //   getDoc(Gamesession).then((doc) => {
    
  //   setQuestionModal(doc.get('QuestionModal'));
    
  
    
  //   });
    
  //   });

    //read real time OLD!!
//   useEffect(() => {
//  const collectionRef = collection(db,'Game');
//  const q = query(collectionRef, where('RoomID','==',roomID));
//  const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   setWritePlayers(
//          querySnapshot.docs.map(doc => ({
//             Player:doc.data().Players,
//             PlayerEmail:doc.data().Players.Email,
//             GameStatus:doc.data().GameStatus,
          
//      }))
//      );
//   });
//   return () => unsubscribe
// },
// []);

useEffect(() => { 
  const q = query(collection(db, 'Game'),where('RoomID','==',roomID))
  const finish=  onSnapshot(q, (querySnapshot) => {
    setWritePlayers(querySnapshot.docs.map(doc =>({ ...doc.data(),
       id: doc.data().id,
       Player: doc.data().Players,
       Host: doc.data().Host,
       GameStatus:doc.data().GameStatus,
    
       }))
       )
     //  Alert.alert(writePlayers.GameStatus)
    })
return finish;
  },[])


  // Update With specific ID
  const Update= (value, merge,DocToBeUpdated,roomID)=>{

    const Ref = doc(db, "Game",roomID);
    
    if(DocToBeUpdated=='None'){
        setDoc(Ref,value,{merge:merge})
        .then(() => {
          alert("Document Updated")
        })
        .catch((error) => {
          alert(error.message)
        })}
  
  
        else if(DocToBeUpdated=='Room'){
              const myDoc = doc(Ref,"Votes","Rooms");
              setDoc(myDoc,value,{merge:merge})
            .then(() => {
              alert("Document Updated")
            })
            .catch((error) => {
              alert(error.message)
            })
        }
  
        else if(DocToBeUpdated=="Explorer"){
          const myDoc = doc(Ref,"Votes","Explorer");
          setDoc(myDoc,value,{merge:merge})
        .then(() => {
          alert("Document Updated")
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  
    else if(DocToBeUpdated=="Answer"){
      const myDoc = doc(Ref,"Votes","Answer");
      setDoc(myDoc,value,{merge:merge})
    .then(() => {
      alert("Document Updated")
    })
    .catch((error) => {
      alert(error.message)
    })
  }
 
  }

  // Read all document with no exceptions
  
  
//   useEffect(() => {
//   const collectionRef = collection(db,'Game');
//   const q = query(collectionRef);
//   const unsubscribe2 = onSnapshot(q, (querySnapshot) => {
    
//        let arr =  querySnapshot.docs.map(doc => ({
           
//              Player:doc.data().Players,
//              GameStatus:doc.data().GameStatus,
//              SessionType:doc.data().SessionType,
//              RoomID:doc.data().RoomID,
//       }))
//       setReadPlayers(arr)
//    });
//    return () => unsubscribe2
//  },
//  [readPlayers, setReadPlayers]);

 //-----------
 useEffect(() => {
  const q = collection(db, 'Game')
  const finish=  onSnapshot(q, (querySnapshot) => {
    setReadPlayers(querySnapshot.docs.map(doc =>({ ...doc.data(),
     id: doc.id,
      Player:doc.data().Players,
      GameStatus:doc.data().GameStatus,
      SessionType:doc.data().SessionType,
      RoomID:doc.data().RoomID, })))
    })
return finish;
  },[])


 
// to print the current players in the waiting room 

const [players,setPlayers]= useState([]);
useEffect(async()=> onSnapshot(doc(db,'Game',roomID),
(snapshot)=>setPlayers(snapshot.data().Players)),[])



  return { writePlayers ,readPlayers, Update , players};
};