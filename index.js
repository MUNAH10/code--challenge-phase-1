// grade generetor
// it syncrinates the prompt
const prompt = require ('prompt-sync')();
//prompt message to ask user to enter speed
let scores=prompt("please enter scores = ")
typeof scores==="number"

//defining the function
function gradeGenerator(){
    //checking if condition is met
    if(scores>79 && scores<=100){
        console.log("grade is A")
    //checking grades
    }
    else if(scores <=79 && scores>=60){
        console.log("grade is B")
    }
    else if (scores<=59 && scoes>=49){
        console.log("grade is C")
    }
    else if (scores <=49 && scores>=40){
        console.log("grade is D")
    }
    else if (scores<=40 && scores>=0){
        console.log("grade is E")
    }else {
          console.log(`please enter value between 0 and 100`)
    }
    //caliing function
}
gradeGenerator();
