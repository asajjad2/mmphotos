import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, projectFireStore, projectStorage } from '../firebase/config';


const initialState = {selectedImage : '', currentUser : null}
const GlobalContext = createContext();
export function useGlobalContext(){
  return useContext(GlobalContext);
}

export const GlobalProvider = ({children}) => {

    const [state,setState] = useState(initialState);

    function login(email,password){
      return auth.signInWithEmailAndPassword(email,password);
    }
  
    function logout(){
      return auth.signOut();
    }  
    
    function setSelectedImage(url){
        setState((prev)=>{
            return {...prev,selectedImage:url};
        })
    }

    const deleteFromStorage = (url) => {
      let pictureRef = projectStorage.refFromURL(url);
      pictureRef.delete()
        .then(() => {
          alert("Picture is deleted successfully!");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    async function deleteImage(doc){
      await projectFireStore.collection('images').doc(doc.id).delete();
      // console.log(res);
      deleteFromStorage(doc.url);
    }
    
   

    useEffect(() => {

      const unsubscribe = auth.onAuthStateChanged(authUser => {
          // console.log(authUser);
          setState((prev)=>{
            return {...prev, currentUser: authUser};
        })
      })
  
      return unsubscribe;
    },[]);
    
    const value = {
      selectedImage : state.selectedImage,
      setSelectedImage,
      currentUser : state.currentUser,
      login,
      logout,
      deleteImage
    }
    
     
     return (<GlobalContext.Provider value={value}>
        {children}
      </GlobalContext.Provider>);
}

