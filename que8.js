//que8

8.//create 6 objects ,each object have name,class,rollno as properties.stored these objects 
//in an array of objects


let s1 = {
    name : "sanjana",
    class : 12,
    roll_no : 101
}

let s2 = {
    name : "sakshi",
    class : 12,
    roll_no : 201
}
let s3 = {
    name : "sonal",
    class : 11,
    roll_no : 301
}

let s4 = {
    name : "ritika",
    class : 11,
    roll_no : 401
}
let s5 = {
    name : "sneha",
    class : 11,
    roll_no : 501
}

let s6 = {
    name : "renu",
    class : 11,
    roll_no : 601
}
let S =[{...s1},{...s2},{...s3},{...s4},{...s5},{...s6}];
console.log(S);