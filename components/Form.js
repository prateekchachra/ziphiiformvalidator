import React from 'react'

const DEFAULT_THEME = {
        "fontSize" : "16",
        "inputColor" : "white",
        "textColor": "black"
}




export default function Form({elements}){

    

    const renderElement = (element) => {

        const {type, name, label, theme, values} = element;
        if(type === 'input'){

            return (<div className={theme?.containerClass}>
                <p className={theme?.labelClass}>{label}</p>
                <input name={name} style={theme?.inputClass}></input>
                </div>)
        }
        else {
            // Only possibilities are radio and checkbox (for a basic implementation)

            return (<div className={theme?.containerClass}>
                <p className={theme?.labelClass}>{label}</p>
                {values.map(item => (<React.Fragment><input type={element.type}
                id={item} name={item} value={item} style={theme?.inputClass}>

                </input>
                <label for={item}>{item}</label>
                </React.Fragment>))}
            </div>)
        }
    }
    
    return(<form>

        {elements.map(element => renderElement(element))}
    </form>)
}