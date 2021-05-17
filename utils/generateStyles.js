export default function generateStyles (themesObj) {

    let {fontSize, inputColor, textColor} = themesObj;

    let fontSizeInInt = parseInt(fontSize);
    return {
        containerClass: {
            paddingHorizontal: fontSizeInInt / 2,
            paddingVertical: fontSizeInInt / 2
        },
        labelClass: {
            color: textColor
        },
        inputClass: {
            backgroundColor: inputColor
        }

    };
}