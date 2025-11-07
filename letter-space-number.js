function letterSpaceNumber (str){
    const test = /[a-zA-Z]\s\d(?![a-zA-Z0-9])/g;  
    return str.match(test)
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))