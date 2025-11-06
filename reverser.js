// function reverse (array) {
//     let i = array.length -1
//     if (Array.isArray(array)){
//         let final = []
//         while(i>=0){
//             final.push(array[i])
//             i--
//          }
//     }else {
//         let final = ""
//         while(i>=0){
//             final += array[i]
//             i--
//         }
//     }
//     return final
// }

console.log(reverse(["banana", "apple", "peach"]))
console.log(reverse("peach"))

function reverse (array){
    let i = array.length -1
    let final = []
    while(i>=0){
        final.push(array[i])
        i--
    }
    if (Array.isArray(array)){
        return final 
    }else{
        return final.join("")
    }
}