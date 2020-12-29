/*
 ** Back to top button
 */

var backToTopBtn = document.getElementsByClassName('back-to-top')[0];

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// show/hide button
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

/*
 ** Modal
 */

// show modal
$('.gallery-image').click(function() {
    $('.modal').addClass('active');
    $('body').css('overflow', 'hidden');
    $('.modal-background').show();
});

// hide modal
$('.close-btn').click(function() {
    $('.modal').removeClass('active');
    $('body').css('overflow', 'auto');
    $('.modal-background').hide();
});

