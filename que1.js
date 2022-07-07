//que1

//we are iterested in retrieving only the name of the students and all the names should be in caps

//output:
//['JOHN','BABA','YAGA','WICK']

let stu_records =[{name:'John',id:123 ,marks: 98},{name:'Baba',id:101 ,marks: 23},
{name:'Yaga',id:200 ,marks: 45},{name:'Wick',id:115 ,marks: 75}];

let arr=stu_records.map(s =>s.name.toUpperCase());
console.log(arr);