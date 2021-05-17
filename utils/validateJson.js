


const ALLOWED_INPUTS = [
    'input',
    'checkbox',
    'radio'
]


//Allowing these three for now for themes. Can create a more complex implementation by adding more if need be

const ALLOWED_THEME_VALUES = [
    'fontSize',
    'inputColor',
    'textColor'
]

export function validateJSON (jsonString){

    try {
       let jsonObj =  JSON.parse(jsonString)
       return jsonObj;
    }
    catch (e){
        return null
    }
}


export function validateThemes(themesObj){

    let isObjectValid = Object.keys(themesObj).filter(key => !ALLOWED_THEME_VALUES.includes(key))
    .length === 0;

    if(themesObj.fontSize){
        isObjectValid = isObjectValid && Number.isInteger(themesObj.fontSize)
    }
    return isObjectValid;
  
}


export function validateFormInput(formObj){

    let isValidJson = true;
    
    Object.keys(formObj).map(key => {
        if(ALLOWED_INPUTS.includes(key)){
            let val = formObj[key];
            if(val.name && val.label ){
                isValidJson = (val.name !== 'input' && val.values)
            || val.name === 'input';
                if(val.themes){
                    isValidJson = validateThemes(val.themes);
                }
            }
        }

        else {
            isValidJson = false;
            return;
        };
    })


    return isValidJson;
}