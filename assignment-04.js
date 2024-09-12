// Problem-01 : Tax Calculator //

// function  calculateTax(income, expense){
//     if(income < 0 || expense <0 || income<expense){
//         return "Invalid Input";
//     }
//     let difference =  income-expense;
//     let tax = difference * 0.2;
//     return tax;
// }


//Problem-02

// function sendNotification(email) {
//     if(email.indexOf('@') === -1){
//         return "Invalid Email";
//     }
//     const separate = email.split("@");
//     return separate.join(" sent you an email from ");
// }
// const result= sendNotification("foysal@gmail.com");
// console.log(result)






// function checkDigitsInName(name) {
//     if(typeof name !== "string"){
//         return "Invalid Input"
//     }
//     for(let i = 0; i<= name.length; i++){
//         if((i) !== "number"){
//             return true;
//         }
//     }
//     return false;
// }
// const info = checkDigitsInName("Foysal22");
// console.log(info);



// function calculateFinalScore(obj) {
//     if(typeof info!== "object"){
//         return  "Invalid Input";
//     }
//     let finalScore = info.testScore + info.schoolGrade;

//     if(info.isFFamily){
//         finalScore = finalScore + 20;
//     }
//     if(finalScore >= 80){
//         return true;
//     }
//     return false;
// }



function  waitingTime(waitingTimes , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }
    let sum = 0;

    for(let i = 0; i < waitingTimes.length; i++){
        // sum = sum + i; why it's not working?
        sum += waitingTimes[i];
    }

    let avg = sum / waitingTimes.length;
    avg = Math.round(avg);

    let remainingPerson = serialNumber - 1 - waitingTimes.length;

    return avg*remainingPerson;
}

