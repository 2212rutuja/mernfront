



export const addEllipsis = (text) => {
    if(text.length > 30){
        return text.substring(0,30) + '...'
    }
    return text
}