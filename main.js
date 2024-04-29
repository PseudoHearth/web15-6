function checkNumber() {
    var number = parseInt(document.getElementById("DayInput").value);

    if (isNaN(number)) {
        alert("That's not a number!");
    } else if (number === 1) {
        alert("Monday!");
    } else if (number === 2) {
        alert("Tuesday!");
    } else if (number === 3) {
        alert("Wednesday!");
    } else if (number === 4) {
        alert("Thursday!");
    } else if (number === 5) {
        alert("Friday!");
    } else if (number === 6) {
        alert("Saturday!");
    } else if (number === 7) {
        alert("Sunday!");
    } else if (number > 7 || number < 1) {
        alert("There is no such a day of week!");
    }
}