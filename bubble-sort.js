const arr = [5,4,2,1,8,6,9,3,7];


// sorting start from last index
for(let i = arr.length - 1; i >=0 ; i--) {
    for(let j = arr.length - 1 ; j >= 0 ; j--) {
        if(arr[j] < arr[j-1]) {
         let temp = arr[j];
         arr[j] = arr[j-1];
         arr[j-1] = temp;   
        }
    }
}

/*
// sorting start from first index
for(let i = 0 ; i < arr.length ; i++) {
    for(let j = 0 ; j < arr.length ; j++) {
        if(arr[j]>arr[j+1]) {
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
*/
