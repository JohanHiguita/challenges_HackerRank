function pairs(k, arr) {
    arr.sort();
    const arrCopy = [...arr];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const index1 = arrCopy.indexOf(arr[i] + k);
        if(index1 != -1){
            counter++;
            arrCopy.splice(index1,1);
        }
        /*const index2 = arrCopy.indexOf(arr[i]);
        arrCopy.splice(index2,1);
        if (arrCopy.includes(arr[i] + k)) counter++;
        arrCopy.shift(); */
        
    }
    return counter;
}

const a = [1, 5, 3, 4, 2];

const resp = pairs(1, a);
console.log(resp);

