// JavaScript Document
$(document).ready(function() {

    window.setInterval(countDown, 1);
    qaControl();
});

function qaControl() {
    /**改寫部分↓ */
    $('#list').find('.item').click(function() {
        $(this).toggleClass('show');
        $(this).find('.item-content').toggle();
    });
    /**改寫部分↑ */
}

function countDown() {
    var now = new Date();
    var future = new Date("2/16/2022 10:00:00");
    var timeLeft = future - now;
    var milli = timeLeft;

    var mills = now.getMilliseconds();
    var seconds = milli / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;

    var spareMills = mills.toString().substr(0, 1);
    var spareSeconds = seconds % 60;
    var spareMinutes = minutes % 60;
    var spareHours = hours % 24;
    var spareDays = days % 365;


    minutes = parseInt(minutes);
    hours = parseInt(hours);
    days = parseInt(days);
    spareSeconds = parseInt(spareSeconds);
    spareMinutes = parseInt(spareMinutes);
    spareHours = parseInt(spareHours);
    spareDays = parseInt(spareDays);

    days = padNumber(days);
    hours = padNumber(hours);
    minutes = padNumber(minutes);
    spareSeconds = padNumber(spareSeconds);
    spareMinutes = padNumber(spareMinutes);
    spareHours = padNumber(spareHours);
    spareDays = padNumber(spareDays);


    timeLeft = spareDays + "天" + spareHours + "時" + spareMinutes + "分" + spareSeconds;
    var mySpan = document.getElementById("timer");
    var mySpan2 = document.getElementById("timer2");
    var mySpan3 = document.getElementById("timer3");
    mySpan.innerHTML = timeLeft;
    // mySpan2.innerHTML = timeLeft;
    // mySpan3.innerHTML = timeLeft;

    if (milli <= 0) { //Time's run out! If all values go to zero
        mySpan.innerHTML = "00:00:00";
        // mySpan2.innerHTML = "00:00:00";
        // mySpan3.innerHTML = "00:00:00";
    }
}

function padNumber(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}