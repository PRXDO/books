
function finSmallestIndex(arr) {
    let smallest = arr[0];
    let smallest_index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }

    }

    //console.log(smallest_index)
    return smallest_index;
}



function selectionSort(array) {
    let copyArray = array.slice()
    let sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        let smallest_index = finSmallestIndex(copyArray)
        sortedArray.push(copyArray.splice(smallest_index,1)[0])
        //sortedArray.push(smallest_index[i])
    }

    return sortedArray;
}

let list = [5, 29, 14, 6, 50]

console.log("Normal: " + list)
//console.log(list.length)
console.log("Arrumado: " + selectionSort(list))