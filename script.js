/*
 ** Gallery collection
 */

var photography_images = [
    ['title', 'subtitle', 'after', 'before'],
    ['Tsuru', 'Touken Ranbu cosplay by <span><a href="https://www.instagram.com/elentarii/" target="_blank">Elentarii</a></span>', 'static/gallery/photography/touken-ranbu-after.png', 'static/gallery/photography/touken-ranbu-before.png'],
    ['Harley Quinn', 'Photo by <span><a href="https://www.instagram.com/studiogepardphotography/" target="_blank">Gabriel Galchev</a></span>', 'static/gallery/photography/harley-quinn-after.jpg', 'static/gallery/photography/harley-quinn-before.jpg'],
    ['Spider Gwen', 'Photo by <span><a href="https://www.instagram.com/crossmachine/" target="_blank">Svilen Marinov</a></span>', 'static/gallery/photography/spider-gwen-after.jpg', 'static/gallery/photography/spider-gwen-before.jpg'],
    ['Predator', 'Photo by <span><a href="https://www.instagram.com/saromon1989/" target="_blank">Ivan Kodzhanikolov</a></span>', 'static/gallery/photography/predator-after.jpg', 'static/gallery/photography/predator-before.jpg'],
    ['Grim Ripper', 'With my brother from another mother <span><a href="https://www.instagram.com/geassneko/" target="_blank">Milen Vahev</a></span>', 'static/gallery/photography/halloween-after.jpg', 'static/gallery/photography/halloween-before.jpg']
];
var web_images = [
    ['title', 'subtitle', 'after', 'before'],
    ['Heatmap user interface', 'For tracking ad clicks and ad control. Part of the <a href="https://adhash.org" target="_blank">AdHash</a> platform.', 'static/gallery/web/adhash-heatmap.png', ''],
    ['Client user interface', 'Real-time data for in-debt ad performance tracking. Part of the <a href="https://adhash.org" target="_blank">AdHash</a> platform.', 'static/gallery/web/adhash-dashboard.png', ''],
    ['title3', 'subtitle3', 'after3', 'before3']
];
var vector_images = [
    ['title', 'subtitle', 'after', 'before'],
    ['Zwerit logo', 'Logo redesign for the swiss QA company <a href="https://zwerit.com/" target="_blank">Zwerit</a>. Animated version of the logo is available in the header of their website.', 'static/gallery/vector/Zwerit_logo_v1.3_light.svg', ''],
    ['Ylith\'s logo and assets', '<a href="http://ylithsastrology.com/" target="_blank">Ylith\'s</a> astrology blog', 'static/gallery/vector/Yliths.svg', ''],
    ['The AdHash protocol', 'Animated version <a href="https://theshadowops.com/static/gallery/protocolAnimation.html" target="_blank">here</a>. Best viewed on large screens.', 'static/gallery/vector/protocol.svg', '']
];

// fix animation link.

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

    // show buttons if photography gallery is selected
    if($(this).parent().attr('id') == 'photography_gallery') {
        $('.modal-btn-holder').css('display', 'block');
    }

    // get parent
    var gallery = '';
    switch($(this).parent().attr('id')) {
        case 'photography_gallery':
            gallery = photography_images;
            break;
        case 'web_gallery':
            gallery = web_images;
            break;
        case 'vector_gallery':
            gallery = vector_images;
            break;
    }

    // populate modal
    $('#modal_title').text(gallery[$(this).index()][0]);
    $('#modal_subtitle').html(gallery[$(this).index()][1]);
    $('#modal_image_after').attr('src', gallery[$(this).index()][2]);
    if($(this).parent().attr('id') == 'photography_gallery') {
        $('#modal_image_before').attr('src', gallery[$(this).index()][3]);
    }

    // open after image in new window
    $('#modal_image_after').click(function() {
        window.open(this.src);
    });

    backToTopBtn.style.display = "none";
    $('#modal_image_view').css('display', 'block');
});

// hide modal
$('.close-btn').click(function() {
    $('.modal').removeClass('active');
    $('body').css('overflow', 'auto');
    $('.modal-background').hide();
    // reset buttons
    $('#after_btn').addClass('active');
    $('#before_btn').removeClass('active');
    $('.modal-btn-holder').css('display', 'none');
    // reset images
    $('#modal_image_after').css('display', 'block');
    $('#modal_image_before').css('display', 'none');

    backToTopBtn.style.display = "block";
});

// before / after toggle
$('#before_btn').click(function() {
    $('#before_btn').addClass('active');
    $('#after_btn').removeClass('active');
    $('#modal_image_after').css('display', 'none');
    $('#modal_image_before').css('display', 'block');
    $('#modal_image_view').css('display', 'none');
})

$('#after_btn').click(function() {
    $('#after_btn').addClass('active');
    $('#before_btn').removeClass('active');
    $('#modal_image_after').css('display', 'block');
    $('#modal_image_before').css('display', 'none');
    $('#modal_image_view').css('display', 'block');
})