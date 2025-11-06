function chunk (arr, num){
    let final = new Array
    let result = []
    let IsEqual = false
    if (arr.length%num == 0){
        IsEqual = true
    }
    let i =0
    if (IsEqual == true){
        while(i<arr.length){
            result.push(arr[i])
            if (result.length == num){
                final.push(result)
                result = []
            }
            i++
        }
    }else {
        i=0
        while(i<arr.length){
            result.push(arr[i])
            if (result.length == num){
                final.push(result)
                result = []
            }
            i++
        }
        final.push(result)
    }
    return final
}
const test2 = [1,2,3,4,5,6,7,8,9,10]
console.log(chunk(test2, 3))
const test = [1,2,3,4,5,6,7,8,9]
console.log(chunk(test, 3))
console.log(chunk(['a', 'b', 'c', 'd'], 3))