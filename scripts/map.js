function myFunction() {
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
    iframeElement.src = place;
}