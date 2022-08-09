import React from 'react';
import { useState } from 'react';
import ProgressBar from "./ProgressBar";
import { useGlobalContext } from '../context/GlobalStateContext';


const UploadForm = () => {

    const { currentUser } = useGlobalContext();
    
    const [file,setFile] = useState(null);
    const [err,setErr] = useState(null);

    const handleChange = ({files}) => {

        let selected = files[0];
        console.log(selected);


        let acceptedTypes = ['image/png','image/jpeg'];

        if(selected && acceptedTypes.includes(selected.type)){
            setFile(selected);
            setErr('');
        } else {
            setFile(null);
            setErr('Please select a valid file type (png/jpeg)');
        }
    }

    return (
        <form>

            {
                currentUser && (
                    <label>
                        <input type="file" className="hide" onChange={(e)=>handleChange(e.target)} />
                        <div>+</div>
                    </label>
                )
            }
            

            <div className="output">
                {err && <div className='error'>{err}</div>}
                {file && file.name}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    );
}

export default UploadForm;