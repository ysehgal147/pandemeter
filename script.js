function timer() {
  let date1 = new Date();
  let date2 = new Date("12/31/2019");
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  let timeDiffInSecond = timeDiff / 1000;

  let days = Math.floor(timeDiffInSecond / 3600 / 24);
  let hours = Math.floor(timeDiffInSecond / 3600) % 24;
  let minutes = Math.floor(timeDiffInSecond / 60) % 60;
  let seconds = Math.floor(timeDiffInSecond) % 60;

  document.getElementById("current-days-element").innerHTML = days;
  document.getElementById("current-hours-element").innerHTML = hours;
  document.getElementById("current-minutes-element").innerHTML = minutes;
  document.getElementById("current-seconds-element").innerHTML = seconds;

  console.log(timeDiffInSecond, days, hours, minutes, seconds);
}

timer();

setInterval(timer, 1000);
