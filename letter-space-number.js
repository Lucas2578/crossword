function letterSpaceNumber (str){
    return str.match(/[a-zA-Z]\s\d(?![a-zA-Z])/g) || [];
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))