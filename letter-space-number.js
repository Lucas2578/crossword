function letterSpaceNumber (str){
    const test = /\w\s\d/g;  
    return str.match(test)
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))