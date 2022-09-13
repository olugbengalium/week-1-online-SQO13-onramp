let count= [];
function countTruthy(arr) {
    let i = 0;
    while ( i < arr.length ) {
        if (arr[i]) {
            count.push(arr[i])
        }
        i++;
    }
    return count.length;
}


module.exports = countTruthy
