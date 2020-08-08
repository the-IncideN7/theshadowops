/*
BACK TO TOP BUTTON
*/

var backToTopBtn = document.getElementsByClassName("back-to-top")[0];

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

