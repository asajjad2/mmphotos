import { useState, useEffect } from "react";
import { projectStorage, projectFireStore, timestamp } from "../firebase/config";

export default function useStorage(file){

    const [progress,setProgress] = useState(0);
    const [err,setErr] = useState(null);
    const [url,setURL] = useState(null);

    useEffect(() => {

        // console.log(projectFireStore);

        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStore.collection('images');

        // console.log(collectionRef);


        storageRef.put(file).on('state_changed',(snap)=>{
            let percent = ( snap.bytesTransferred / snap.totalBytes ) * 100;
            setProgress(percent);
        },(err) => {
            setErr(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setURL(url);
            const timeAdded = timestamp();
            collectionRef.add({url, timeAdded})
        })

    },[file]);

    return { progress, url, err};

}