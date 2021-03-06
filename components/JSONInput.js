import React, {useState} from 'react';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../styles/JSONInput.module.css'
import { validateFormInput, validateJSON } from '../utils/validateJson';
import Form from './Form';



toast.configure()

export default function JSONInput ({exampleJson}){

    //Initially the Example JSON is server-side rendered and the HTML file contains the JSON.
    const [jsonString, setJsonString] = useState(JSON.stringify(exampleJson));
    const [jsonInputValue, setJsonInputValue] = useState('');
    const [error, setError] = useState(null);


    const onInputChange = (event) => {
        setJsonInputValue(event.target.value);
        setError(null);

    }

    const notifySuccessToast = () => toast('Form successfully rendered!')
   const renderForm = () => { 
    let jsonObj = JSON.parse(jsonString);

    return (<Form elements={Object.keys(jsonObj).map(item => ( {...jsonObj[item], type: item}))} />
     )
   } 
  const   onJsonSubmit = (event) => {
        event.preventDefault();

        let generatedObj = validateJSON(jsonInputValue);

        if(generatedObj){

            if(validateFormInput(generatedObj)){
                setJsonString(jsonInputValue)
                notifySuccessToast()
            }
            else setError('JSON not according to the form guidelines. Please check the values in the JSON.')

        }
        else setError('JSON is not valid. Please try again.')
        
    }
    return(
        <div className={styles.container}>
        <form onSubmit = {onJsonSubmit}>
            <p className={styles.label}>Please enter your JSON here</p>
            <textarea placeholder="JSON"  name="jsonString" value={jsonInputValue} 
            onChange={onInputChange} className={styles.input}/>
            <br />
            <button type="submit" className={styles.button}>Submit</button>
            {error ? <p className={styles.error}>{error}</p> : null}
            {renderForm()}
         </form>
        </div>
    )
}