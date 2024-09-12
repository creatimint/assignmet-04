let waitingTimes = [3, 5, 7, 11, 6];
let serialNumber = 10;

function waitingTime(waitingTimes, serialNumber) {
    // Check for valid input types
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }
    
    let sum = 0;

    // Calculate the sum of waiting times
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }

    // Calculate the average waiting time
    let avg = sum / waitingTimes.length;
    return avg;

    // Calculate the remaining number of people
    let remainingPerson = serialNumber - waitingTimes.length;

    // Return the estimated remaining time
    return avg * remainingPerson;
}

const remainingTime = waitingTime(waitingTimes, serialNumber);
console.log(remainingTime);