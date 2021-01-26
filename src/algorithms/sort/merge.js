
function merge(leftArray, rightArray) {
    let l = 0, r = 0;
    let mergedArray = []
    while (l < leftArray.length && r < rightArray.length) {
        if (leftArray[l] < rightArray[r]) {
            mergedArray.push(leftArray[l]);
            l++;
        } else {
            mergedArray.push(rightArray[r]);
            r++;
        }
    }
    while (l < leftArray.length) {
        mergedArray.push(leftArray[l]);
        l++;
    }

    while (r < rightArray.length) {
        mergedArray.push(rightArray[r]);
        r++;
    }
    return mergedArray;
}

function mergeSort(array) {
    if (array.length > 1) {
        let mid = Math.ceil(array.length / 2);
        let leftArray = array.slice(0, mid);
        let rightArray = array.slice(mid, array.length);
        leftArray = mergeSort(leftArray);
        rightArray = mergeSort(rightArray);
        return merge(leftArray, rightArray);
    }
    return array;
}

module.exports = {
    mergeSort,
    merge
}
