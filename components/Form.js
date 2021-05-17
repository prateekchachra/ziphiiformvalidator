import React from 'react'
import generateStyles from '../utils/generateStyles'


const DEFAULT_THEME = {
        "fontSize" : "16",
        "inputColor" : "white",
        "textColor": "black"
}


export default function Form({elements}){

    

    const renderElement = (element) => {

        const {type, name, label, theme, values} = element;
        
        let themeStyledObj = theme ?  generateStyles({...DEFAULT_THEME, ...theme}) :
         generateStyles(DEFAULT_THEME)

        if(type === 'input'){

            return (<div style={themeStyledObj?.containerClass}>
                <p style={themeStyledObj?.labelClass}>{label}</p>
                <input name={name} style={themeStyledObj?.inputClass}></input>
                </div>)
        }
        else {
            // Only possibilities are radio and checkbox (for a basic implementation)

            return (<div style={themeStyledObj?.containerClass}>
                <p style={themeStyledObj?.labelClass}>{label}</p>
                {values.map(item => (<React.Fragment><input type={element.type}
                id={item} name={item} value={item} style={themeStyledObj?.inputClass}>

                </input>
                <label htmlFor={item}>{item}</label>
                </React.Fragment>))}
            </div>)
        }
    }
    
    return(<form>

        {elements.map(element => renderElement(element))}
    </form>)
}