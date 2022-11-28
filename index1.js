//speedgenerator
// it syncrinates the prompt
const prompt =require('prompt-sync')();
// prompt  message to ask user to enter speed
let speed = prompt('please enter your speed =')
// defining the function
function speedDetector(){
    if (speed<70){
        console.log('Ok')
        // checking condition
    }else if(speed>=70){
        // calculates the points of an over speeding
        let points= (speed-70)/5
        if (points<12){
            console.log(`You have ${points} demerit point`)
        }else  if (points>=12){
            console.log(`Sorry you have ${points}demerit points YOUR LICENSE IS SUSPENDED`)

        }
    }
}
// call the function

speedDetector();
