
const student = {
    name: "KALPANA DEVI V",
    rollNo: 101,
    course: "Computer Science",
    marks: 60
};
for (let key in student) {
    console.log(key +" : "+ student[key]);
}

// Check Pass or Fail
function result(){
    if(student.marks >=35){
        console.log(student.name+" is pass");

    } else{
        console.log(student.name+" is Fail")
    }
}

result();