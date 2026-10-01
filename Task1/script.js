function sifirElaveEt(reqem) {
    if (reqem < 10) {
        return "0" + reqem;
    } else {
        return reqem;
    }
}

function saatGoster() {
    const vaxt = new Date();
    let h = vaxt.getHours();
    let m = vaxt.getMinutes();
    let s = vaxt.getSeconds();
    let ampm = "AM"; 

    if (h >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    if (h > 12) {
        h = h - 12;
    } else if (h == 0) {
        h = 12;
    }

    h = sifirElaveEt(h);
    m = sifirElaveEt(m);
    s = sifirElaveEt(s);

    document.getElementById('time').textContent = h + ":" + m + ":" + s;
    document.querySelector('.am-pm').textContent = ampm;
}

setInterval(saatGoster, 1000);
saatGoster();