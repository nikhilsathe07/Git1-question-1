let arr=[1, 2, 3, 4, 5, 6];
arr=arr.filter(EvenFilter);

function EvenFilter(arr1){
    if(arr1%2==0){
        return arr1;
    }
}
console.log(arr)