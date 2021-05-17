


export function validateJSON (jsonString){

    try {
       let jsonObj =  JSON.parse(jsonString)
       return jsonObj;
    }
    catch (e){
        return null
    }
}


export function validateFormInput(formObj){

    
}