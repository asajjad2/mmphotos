
import React, {createContext,useState} from "react";

const initialState = {selectedImage : ''}
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [state,setState] = useState(initialState);
    
    function setSelectedImage(url){
        setState((prev)=>{
            return {...prev,selectedImage:url};
        })
    }
    
    
     
     return (<GlobalContext.Provider value={{
        selectedImage : state.selectedImage,
        setSelectedImage
      }}>
        {children}
      </GlobalContext.Provider>);
}

