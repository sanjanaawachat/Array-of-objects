//que3

3.//retrieve the details the students who scored more than 50 marks 
//and id greater than 120 

let stu_records =[{name:'John',id:123 ,marks: 98},{name:'Baba',id:101 ,marks: 23},
{name:'Yaga',id:200 ,marks: 45},{name:'Wick',id:115 ,marks: 75}];

let arr = stu_records.filter((s) =>s.marks > 50 && s.id>120);
console.log(arr);