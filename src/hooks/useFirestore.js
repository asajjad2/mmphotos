import { useState,useEffect } from "react";
import { projectFireStore } from "../firebase/config";

export default function useFirestore(collectionName){
    const [docs,setDocs] = useState([]);


    useEffect(()=>{
        
        const unsub = projectFireStore.collection(collectionName).orderBy('timeAdded','desc').onSnapshot((snap)=>{
            
            const documents = [];

            snap.forEach((doc)=>{
                documents.push({...doc.data(),id:doc.id});    
            })

            setDocs(documents);

        })

        return () => unsub();

    },[collectionName])

    return { docs };
}