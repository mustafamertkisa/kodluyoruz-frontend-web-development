let user = prompt("Lütfen adınızı giriniz.");
user = user[0].toUpperCase() + user.substring(1);  
let userName = document.querySelector("#userName");
userName.innerHTML = user

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDay();

    if (d == 1) {
        d = "Pazartesi";
    } else if (d == 2) {
        d = "Salı";
    } else if (d == 3) {
        d = "Çarşamba";
    } else if (d == 4) {
        d = "Perşembe";
    } else if (d == 5) {
        d = "Cuma";
    } else if (d == 6) {
        d = "Cumartesi";
    } else {
        d = "Pazar";
    }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s + " " + d;
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }