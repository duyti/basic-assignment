// kilometer to meter conversion 
function kilometerToMeter(kilometer){

        // check if the parameter is not a positive number to send error
    if(typeof(kilometer) != 'number' || kilometer < 0){
        return "ERROR: Invalid Input! Please Input A Positive Number.";
    }
    return kilometer * 1000;
}


// calculate total budget of purchase
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){

        // check if any of the three items' quantity is not a positive integer number to send a error
    if(typeof(watchQuantity) != 'number' || watchQuantity < 0 || !Number.isInteger(watchQuantity) ||
        typeof(phoneQuantity) != 'number' || phoneQuantity < 0 || !Number.isInteger(phoneQuantity) ||
        typeof(laptopQuantity) != 'number' || laptopQuantity < 0 || !Number.isInteger(laptopQuantity)){

        return "ERROR: Invalid Input! Please Input A Positive Integer Number As Products Quantity."
    }

    // initialize products' unit price
    const watchUnitPrice = 50;
    const phoneUnitPrice = 100;
    const laptopUnitPrice = 500;

    return watchQuantity * watchUnitPrice + phoneQuantity * phoneUnitPrice + laptopQuantity * laptopUnitPrice;
}


// Calculate total cost of staying in a hotel 
function hotelCost(daysToStay) {
    let totalCost = 0;
    const baseFare = 100;

        // check if the parameter is not a positive integer number to send error
    if(typeof(daysToStay) != 'number' || daysToStay < 0  || !Number.isInteger(daysToStay)){
        return "ERROR: Invalid Input! Please Input A Positive Integer Number.";
    }
        // adjust fare according to the number of days
    if(daysToStay <= 10){                                   // stay not more than 10 days
        totalCost = daysToStay * baseFare;
    }
    else if(daysToStay >=11 && daysToStay <= 20){           // stay between 11 to 20 days  
        totalCost = 10 * baseFare;                          // first 10 days fare
        totalCost += (daysToStay - 10) * (baseFare - 20);   // added total fare of remaining days after day 10
    }
    else if(daysToStay >=21){                               // stay more than 20 days
        totalCost = 10 * baseFare;                          // first 10 days fare
        totalCost += 10 * (baseFare - 20);                  // added fare of next 10 days
        totalCost += (daysToStay - 20) * (baseFare - 50);   // added total fare of remaining days after day 20
    }
    return totalCost;
}


//find largest name from an array of names
function megaFriend(nameOfFriends) {

        // check if parameter is not an array or empty to send error
    if(typeof(nameOfFriends) != 'object' || nameOfFriends.length == 0) {
        return "ERROR! Input An Array of Strings."
    }

    let largestName='';     // initialize a empty string. As, it's length is 0 

    for (let i = 0; i < nameOfFriends.length; i++) {

            // Check if any elements of the array is not a string or empty to send error
        if(typeof(nameOfFriends[i]) != 'string' || nameOfFriends[i].length == 0) {
            return "ERROR! Input An Array of Strings and Each String Must Contain More Than One Character."
        }
        
            // check if current name is larger
        if (largestName.length < nameOfFriends[i].length) {         
            largestName = nameOfFriends[i];
        }
    }
    return largestName;
}