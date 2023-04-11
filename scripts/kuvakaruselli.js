var images = [{ src: "images1/nelja.jpg", caption: "Metsä" }, { src: "images1/kaksi.jpg", caption: "Ukko" }, { src: "images1/kolme.jpg", caption: "Tonttu" }];
var currentImageIndex = 0;
var kuvaElementti = document.getElementById("kuva");

window.onload = function () {
    if (localStorage.hasOwnProperty('myCat'))
        currentImageIndex = parseInt(localStorage.getItem('myCat'));
    else
        currentImageIndex = 0;
    document.getElementById("kuva").src = images[currentImageIndex].src;
    document.getElementById("caption").innerHTML = images[currentImageIndex].caption;
}

function previous() {
    $("#kuva").fadeOut(0, function () {
        console.log("complete");
    });

    $("#kuva").fadeIn(2000, function () {
        console.log("complete");
    });

    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    localStorage.setItem('myCat', currentImageIndex);
    kuvaElementti.src = images[currentImageIndex].src;
    document.querySelector('.caption').innerHTML = images[currentImageIndex].caption;
}

function next() {
    $("#kuva").fadeOut(0, function () {
        console.log("complete");
    });

    $("#kuva").fadeIn(2000, function () {
        console.log("complete");
    });

    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    localStorage.setItem('myCat', currentImageIndex);
    kuvaElementti.src = images[currentImageIndex].src;
    document.querySelector('.caption').innerHTML = images[currentImageIndex].caption;
}

function play() {
    intervalId = setInterval(next, 2500);
}

function pause() {
    clearInterval(intervalId);
}