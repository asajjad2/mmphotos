import React from "react";
import useFirestore from "../hooks/useFirestore";
import { GlobalContext } from '../context/GlobalStateContext';
import { useContext } from "react";
import {AnimatePresence, motion} from "framer-motion";

const ImageGrid = () => {

    const {setSelectedImage} = useContext(GlobalContext);

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