import React from 'react';
import { GlobalProvider} from './context/GlobalStateContext';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from "./comps/Modal";

function App() {

  return (

    <GlobalProvider>
      <div className="App">
        <Title/>
        <UploadForm />
        <ImageGrid />
        <Modal/>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
