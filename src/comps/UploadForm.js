import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    //we only want image files to be accepted, so we create an array of accepted image types:
    //Note that 'types' is a propertyof the 'selected' object.
    const types = ['image/png', 'image/jpeg'];
    

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        // we want to store the 'selected' file in a local piece of state
        //check if we actually have a file selected, and THEN update the state:
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
            //seterror with empty quotes resets the error message, if there was one.
            //setfile method will update the state with the selected file if selected is truthy && if the selected type file is included in the types array.
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                {/* if there's an error, output this div */}
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file= {file} setFile={setFile} />}
            </div>
        </form>
    )

}

export default UploadForm;