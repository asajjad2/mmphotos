import React from "react"
import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";


const ProgressBar = ({file,setFile}) => {

    const { progress, url} = useStorage(file);
    // console.log(progress);
    // console.log(url);

    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile])

    return (
        <motion.div className="progress-bar" initial={{width : 0}} animate={{width : `${progress}%`}} transition={{delay : 0.3}}></motion.div>
    )
}

export default ProgressBar;