//que2:

2.// suppose we have the same dataset as above the but this we want to get the details of 
//students who score more than 50 marks

//ans:

let stu_records =[{name:'John',id:123 ,marks: 98},{name:'Baba',id:101 ,marks: 23},
{name:'Yaga',id:200 ,marks: 45},{name:'Wick',id:115 ,marks: 75}];


let arr = stu_records.filter(s => s.marks > 50);
console.log(arr);