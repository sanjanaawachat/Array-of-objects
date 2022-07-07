//que7

7.//This time we are required to print the total marks of the students with marks
// greater than 50
//after grace of 15 marks has been added to those students who scored who scored 
//less than 50. 

let stu_records =[{name:'John',id:123 ,marks: 98},{name:'Baba',id:101 ,marks: 23},
{name:'Yaga',id:200 ,marks: 45},{name:'Wick',id:115 ,marks: 75}];


for(let s of stu_records){
    if(s.marks<50){

        s.marks = s.marks + 15;
    }
}

let arr1 = stu_records.filter(s => s.marks > 50);
let arr = arr1.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr);
