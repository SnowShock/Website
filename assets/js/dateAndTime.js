// Defines the needed variables
var date = new Date();
var time = new Date();

// Gets the date in a formatted manor
function getFormatedDate(date) {
    var year = date.getFullYear();
    var day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }

    var monthNumber = date.getMonth();

    // Gets the month Name from number because numbers are stupid!
    function getMonthNameFromMonthNo(monthNumber) {
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[monthNumber];
    }

    var month = getMonthNameFromMonthNo(monthNumber);
    return day + " " + month + " " + year;
}

// Gets the time in a formatted manor
function getFormattedTime(time) {
    var hour = time.getUTCHours();
    var minute = time.getUTCMinutes();
    if (second < 10) {
        second = "0" + second;
    }

    var second = time.getUTCSeconds();
    if (second < 10) {
        second = "0" + second;
    }
    var timezone = time.getTimezoneOffset();

    return hour + ":" + minute + ":" + second + " (UTC)";
}

// Gets my age
function getCurrentAge() {
    var age = date.getFullYear() - 1999;
    if (date.getFullYear() <= 1999) {
        console.log("HE WASN'T EVEN BORN YOU DUMB ASS!");
    } else if (date.getMonth() <= 5 && date.getDate() < 29) {
        age = age - 1;
    }
    return age;
}

// Base Logging Information
console.log(document.title);
console.log("Date: " + getFormatedDate(date));
console.log("Time: " + getFormattedTime(time));
document.getElementById("retrieveDate").innerHTML = getFormatedDate(date);
document.getElementById("retrieveTime").innerHTML = getFormattedTime(time);

// Birthday Event
if (date.getDate() == 29 && date.getMonth() == 5) {
    console.log("=================================");
    console.log("* It's SnowShock's Birthday!!! *");
    console.log("   * SnowShock is " + getCurrentAge() + " today! *");
    console.log("=================================");
}