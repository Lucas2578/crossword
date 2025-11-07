function letterSpaceNumber (str){
    let final = []
    const test = /[a-zA-Z]\s\d(?![a-zA-Z0-9])/g;  
    final = str.match(test)
    if (final != null){
        return final
    }else {
        return []
    }
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
console.log(letterSpaceNumber('I like 7up.'))