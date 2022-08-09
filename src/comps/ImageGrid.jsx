import React from "react";
import useFirestore from "../hooks/useFirestore";
import { useGlobalContext } from '../context/GlobalStateContext';
import {AnimatePresence, motion} from "framer-motion";

const ImageGrid = () => {

    const {setSelectedImage} = useGlobalContext();

    const {docs} = useFirestore('images');
    console.log(docs);
    return (

        <div className="image-grid">
            {docs && docs.map((doc)=>{
                return (
                    <motion.div whileHover={{opacity:1}} layout className="image" key={  doc.id} onClick={()=>setSelectedImage(doc.url)}>
                        <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} src={doc.url} alt="uploaded img" />
                    </motion.div>
                )
            })}
        </div>

    );
}

export default ImageGrid;