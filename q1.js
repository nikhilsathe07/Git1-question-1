let arr=[2, 3, 4, 5];
let SquareArr=arr.map(SquareOfArr);
function SquareOfArr(item){
    return item*item ;
}
console.log(SquareArr)