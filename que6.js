//que6

6.//this time we required to print the sum of mark of the students with id>120.


let stu_records =[{name:'John',id:123 ,marks: 98},{name:'Baba',id:101 ,marks: 23},
{name:'Yaga',id:200 ,marks: 45},{name:'Wick',id:115 ,marks: 75}];

let arr = stu_records.filter(s => s.id > 120);
let arr1 = arr.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr1);
