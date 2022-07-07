//que4
4.//consider the same scenario we have discussed above but this time we would like to know 
//the sum of total of the marks of the students
let stu_records =[{name:'John',id:123 ,marks: 98},{name:'Baba',id:101 ,marks: 23},
{name:'Yaga',id:200 ,marks: 45},{name:'Wick',id:115 ,marks: 75}];

let arr = stu_records.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr);
