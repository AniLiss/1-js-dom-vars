'use strict';

var settledDate;
function initializeClock(date) {
    settledDate = null;
    if (date != null) {
        var dateString = date.split(', ');
        var d;
        if (dateString.length > 2) {
            d = Date.parse(date);
        }

        if (!isNaN(d)) {
            settledDate = new Date(d);
        } else {
            settledDate = new Date();

            if (dateString.length < 3) {
                settledDate.setHours(dateString[0], 0, dateString[1], 0);
            }
            else {
                for (var i = 0; i < 7; i++) {
                    if (dateString[i] === undefined) {
                        dateString[i] = '00';
                    }
                }
                var newStr = dateString[0] + '-' + dateString[1] + '-' + dateString[2] + 'T' + dateString[3] + ':' + dateString[4] + ':' + dateString[5] + '.' + dateString[6];
                newStr = Date.parse(newStr);
                settledDate = new Date(newStr);
            }

        }
    } else {
        settledDate = new Date();
    }
    clock1();
}

function clock1() {
    var timeSpan = document.getElementById("time");

    var hours = settledDate.getHours();
    var minutes = settledDate.getMinutes();
    var seconds = settledDate.getSeconds();

    if (hours <= 9)
        hours = "0" + hours;
    if (minutes <= 9)
        minutes = "0" + minutes;
    if (seconds <= 9)
        seconds = "0" + seconds;

    var newTime = hours + ":" + minutes + ":" + seconds;
    timeSpan.innerHTML = "" + newTime + "";

    var dataSpan = document.getElementById("data");

    var date = settledDate.getDate();
    var month = settledDate.getMonth() + 1;
    var fullYear = settledDate.getFullYear();

    if (date <= 9) date = "0" + date;
    if (month <= 9)
        month = "0" + month;
    var newDate = date + "." + month + "." + fullYear;
    dataSpan.innerHTML = "" + newDate + "";

    settledDate.setSeconds(seconds + 1);
    settledDate = new Date(settledDate);
    setTimeout('clock1()', 1000);
}