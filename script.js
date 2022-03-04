var wakeup = document.querySelector('#wakeup-time');
var lunch = document.querySelector('#lunch-time');
var nap = document.querySelector('#nap-time');
var night = document.querySelector('#night-time');

function currentTime() {
    let time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    let session = 'AM';

    session = (hh >= 12) ? 'PM' : 'AM';

    hh = (hh == 0) ? 12 : ((hh > 12) ? (hh - 12): hh);

    hh = (hh < 10) ? '0'+hh : hh;
    mm = (mm < 10) ? '0'+mm : mm;
    ss = (ss < 10) ? '0'+ss : ss;

    document.getElementById('hours').innerText = hh;
    document.getElementById('mins').innerText = mm;
    document.getElementById('secs').innerText = ss;
    document.getElementById('session').innerText = session;
}
currentTime();
setInterval(currentTime, 1000);

function setYourGoal() {
    let wakeupText = wakeup.options[wakeup.selectedIndex].text;
    let lunchText = lunch.options[lunch.selectedIndex].text;
    let napText = nap.options[nap.selectedIndex].text;
    let nightText = night.options[night.selectedIndex].text;


    document.querySelector('.wakeupMsg').innerText = wakeupText;
    document.querySelector('.lunchMsg').innerText = lunchText;
    document.querySelector('.napMsg').innerText = napText;
    document.querySelector('.nightMsg').innerText = nightText;
}

function settedTime() {
    let wakeupValue = wakeup.value;
    let lunchValue = lunch.value;
    let napValue = nap.value;
    let nightValue = night.value;
    let hours = new Date().getHours();

    if (wakeupValue == hours) {
        document.querySelector('#msg-text').innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.querySelector('#msg-img').style.background = "url(./assets/morning.jpg)";
        document.querySelector('.good-wish-text').innerText = "GOOD MORNING !! WAKE UP !!";
    }
    if (lunchValue == hours) {
        document.querySelector('#msg-text').innerText = "LET'S HAVE SOME LUNCH";
        document.querySelector('#msg-img').style.background = "url(./assets/lunch.jpg)";
        document.querySelector('.good-wish-text').innerText = "GOOD AFTERNOON!! FOOD TIME";
    }
    if (napValue == hours) {
        document.querySelector('#msg-text').innerHTML = "GET SOME TEA.. <br> IT'S JUST EVENING!";
        document.querySelector('#msg-img').style.background = "url(./assets/nap.png)";
        document.querySelector('.good-wish-text').innerText = "GOOD EVENING !!"
    }
    if (nightValue == hours) {
        document.querySelector('#msg-text').innerText = "GO TO SLEEP";
        document.querySelector('#msg-img').style.background = "url(./assets/night.jpg)";
        document.querySelector('.good-wish-text').innerText = "GOOD NIGHT !!"
    }

    setYourGoal();
}



