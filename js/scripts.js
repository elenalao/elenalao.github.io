// Set the date we're counting down to
var countDownDate = new Date("11/19/2023").getTime();
//console.log(countDownDate);

var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  //console.log(now);

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
    document.getElementById("remainingtime").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("remainingtime").innerHTML = "Oops, you missed it! Please wait for the next one :)";
  }
}, 1000);
