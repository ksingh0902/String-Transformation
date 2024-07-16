function getValue(){
    let myInput = document.getElementById('inputField')
    let lower =document.getElementById('Lower')
    let upper =document.getElementById('Upper')
    let cut =document.getElementById('cut')

    let inputValue = myInput.value

    cut.innerHTML= inputValue.replace(/\s/g, ""); 
    lower.innerHTML=inputValue.toLowerCase()
    upper.innerHTML=inputValue.toUpperCase()


}