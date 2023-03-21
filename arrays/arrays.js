const items=[2,8, "seed",[7,9]];
const a = [2,8, "seed"];
console.log(items[3]);
// console.log(items[4][1]);
items.push(6);
console.log(items)
items.unshift("fruit");
console.log(items);
items.pop();
console.log(items)
items.shift();
console.log(items);
// given an array of numbers, returns an array x with each item multipied by 4
let num = [1, 3, 4, 6, 9, 34];
let x= num.map(function(item){
   return item * 4
})
console.log(x);

let x1 = [];
 num.forEach(function(item){
    x1.push( item*4)

})
console.log(x1);
// Array concatenation
let mix = items.concat(num)
console.log(mix);
// Spread Operator
let b = [false,"deny",...num];
console.log(b);

let [z, w, y,...v]= [1,2,4,7,9,10];
console.log({z});
console.log({w});
console.log({y});
console.log({v});