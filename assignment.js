//1....******************feetToMile********************

function feetToMile(lengthInFeet) {
    if(lengthInFeet<0) {
        return "Sorry, Mate! Length cannot have a negative value.";
    }
    else {
        var lengthInMile= lengthInFeet*0.000189394;   //1 feet = 0.000189394 Miles
        var lengthInMile= lengthInMile.toFixed(9);
        return ("The Given Length in Miles is " + lengthInMile);
    }
}





//2.....****************woodCalculator*****************

function woodCalculator(numberOfChair,numberOfTable,numberOfBed) {
    if(numberOfChair<0 || numberOfTable<0 || numberOfBed<0) {
        return ("You Cannot Have Negative Number of Furnitures!! Put Your Value Correnctly.");
    }
    else {
        var woodForChair = 1 * numberOfChair;         //For a Chair, We Need 1 Wood
        var woodForTable = 3 * numberOfTable;         //For a Table, We Need 3 Woods
        var woodForBed = 5 * numberOfBed;             //For a Bed, We Need 5 Woods
        var totalWood = woodForChair + woodForTable + woodForBed;
        return ("The Number of Woods, You Need is " + totalWood);
    }
}





//3.....****************brickCalculator*****************

function brickCalculator(floorNumber) {
    if(floorNumber<=0) {
        return "Please Enter the Right Number of Floors of Your Building."
    }

    //For 1-10 Floor, Height of per Floor is 15ft
    //For 11-20 Floor, Height of per Floor is 12ft
    //For Floors More than 20, Height of per floor is 10ft
    //1000 Bricks are Needed for 1ft

    else if (floorNumber>0 && floorNumber<=10) {
        var totalBricks= floorNumber*15*1000;
        return ("The Number of Bricks, You Need is " + totalBricks);
    }
    else if (floorNumber>10 && floorNumber<=20) {
        var totalBricks= (10*15*1000) + ((floorNumber-10)*12*1000);
        return ("The Number of Bricks, You Need is " + totalBricks);
    }
    else if (floorNumber>20) {
        var totalBricks= (10*15*1000) + (10*12*1000) + ((floorNumber-20)*10*1000);
        return ("The Number of Bricks, You Need is " + totalBricks);
    }
}





//4.....******************tinyFriend********************

function tinyFriend(nameOfFriends) {
    var shortestName=nameOfFriends[0];
    for (var i=0; i<nameOfFriends.length; i++) {
        if (shortestName.length>nameOfFriends[i].length) {
            shortestName = nameOfFriends[i];
        }
    }

    var shortestNameList = [shortestName];

    //Loop to Find Multiple Friends Whom Have Shortest Name
    for (var i=0; i<nameOfFriends.length; i++) {
        if (shortestNameList[0].length == nameOfFriends[i].length) {
            shortestNameList.push(nameOfFriends[i]);
        }
        //Condition to Remove The Duplicate Item
        if (shortestNameList[0] == nameOfFriends[i]) {
             shortestNameList.pop(nameOfFriends[i]);
        }
    }

    if(shortestName.length==0) {
        return ("Hey!! Write Names Correctly.");
    }
    else {
        return (`The Shortest Name/Names Among Your Friends is/are ${shortestNameList}`);
    }  
}