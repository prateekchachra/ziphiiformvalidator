import React, {useState} from 'react';

import styles from '../styles/JSONInput.module.css'
import { validateJSON } from '../utils/validateJson';
import Examples from '../static-data/example-form.json'
import Form from './Form';

export default function JSONInput (){

    const [jsonString, setJsonString] = useState(JSON.stringify(Examples));
    const [jsonInputValue, setJsonInputValue] = useState('');
    const [error, setError] = useState(null);


    const onInputChange = (event) => {
        setJsonInputValue(event.target.value);
        setError(null);

    }

   const renderForm = () => {
    let jsonObj = JSON.parse(jsonString);

    return (<Form elements={Object.keys(jsonObj).map(item => ( {...jsonObj[item], type: item}))} />
     )
   } 
  const   onJsonSubmit = (event) => {
        event.preventDefault();

        let generatedObj = validateJSON(jsonInputValue);

        if(generatedObj){


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