function filterList(arr) {
    let integers=[]
    for (let i=0; i<arr.length; i++){
        if (typeof(arr[i]) == "string"){
        } else{
            integers.push(arr[i])
        }

    }
 
    return integers;
}

  module.exports = filterList