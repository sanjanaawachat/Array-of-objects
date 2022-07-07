//que5

5.//This time we want to get only the names of the students who scored more than 50 marks 
//from the same dataset used above.

let stu_records =[{name:'John',id:123 ,marks: 98},{name:'Baba',id:101 ,marks: 23},
{name:'Yaga',id:200 ,marks: 45},{name:'Wick',id:115 ,marks: 75}];

let arr = stu_records.filter(s => s.marks > 50);
for(let i = 0; i<arr.length; i++){
    console.log(arr[i].name);
}