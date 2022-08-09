import React from "react";
import useFirestore from "../hooks/useFirestore";
import { useGlobalContext } from '../context/GlobalStateContext';
import { motion } from "framer-motion";
import trash from '../assets/icons/trash.svg';

const ImageGrid = () => {

    const { setSelectedImage, currentUser, deleteImage } = useGlobalContext();
   

    function handleImageClick(e,doc){
        // console.log(e);
        // console.log(doc);
        if(e.target.classList.contains('trash-icon')){
            deleteImage(doc);
        } else {
            setSelectedImage(doc.url);
        }
    }

    const {docs} = useFirestore('images');
    // console.log(docs);
    return (

        <div className="image-grid">
            {docs && docs.map((doc)=>{
                return (
                    <motion.div whileHover={{opacity:1}} layout className="image" key={  doc.id} onClick={e=>handleImageClick(e,doc)}>
                        {currentUser && <motion.img  whileHover={{opacity:1}} className="trash-icon" src={trash}/>}
                        <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} src={doc.url} alt="uploaded img" />
                    </motion.div>
                )
            })}
        </div>

    );
}

export default ImageGrid;