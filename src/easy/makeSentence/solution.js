function capitalizeFirstLetter(str){
   let newStr = str.charAt(0).toUpperCase() + str.slice(1);
   const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const lastChar = newStr.slice(newStr.length-1)

    if(specialChars.test(lastChar)){
       return console.log(newStr)
    }
    return console.log(newStr + '.') 
}

capitalizeFirstLetter('hello')