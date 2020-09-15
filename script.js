function timer() {
    var date1 = new Date();
    var date2 = new Date("03/11/2020");
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var timeDiffInSecond = (timeDiff / 1000);
    
    const days = Math.floor(timeDiffInSecond/3600/24);
    const hours = Math.floor(timeDiffInSecond/3600)%24;
    const minutes = Math.floor(timeDiffInSecond/60)%60;
    const seconds = Math.floor(timeDiffInSecond)%60;
    console.log(timeDiffInSecond, days, hours, minutes,seconds);
}

timer();

setInterval(timer, 1000);