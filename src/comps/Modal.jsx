import React from 'react';
import { useGlobalContext } from '../context/GlobalStateContext';
import { motion } from "framer-motion";

const Modal = () => {

    const {selectedImage, setSelectedImage} = useGlobalContext();

    function handleClick(e){
        if(e.target.classList.contains('modal')){
            setSelectedImage(null);
        }
    }

    return (

        selectedImage?(
            
            <motion.div className="modal" onClick={handleClick} initial = {{opacity : 0}} animate={{opacity : 1}}>
                <img src={selectedImage} alt="selected image" />
            </motion.div>
        ):null
        
    );
}

export default Modal;