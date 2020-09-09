function google() {
    let google = document.getElementById('google').value;
    window.open(`https://www.google.com/search?q=${google}`);
}

function youtube() {
    let youtube = document.getElementById('youtube').value;
    window.open(`https://www.youtube.com/results?search_query=${youtube}`);
}
