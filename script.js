/*
 ** Back to top
 */

$('.logo').click(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 })

/*
** Navigation
*/
scrollInView = function(nav, to) {
    $(nav).click(function() {
        $(to)[0].scrollIntoView();
    }
)}

scrollInView("#nav-skills", "#parallax_image_skills");
scrollInView("#scroll_icon", "#parallax_image_skills");
scrollInView("#nav-projects", "#parallax_image_projects");
scrollInView("#nav-about", "#parallax_image_about");
scrollInView("#nav-contacts", "#parallax_image_contacts");
 
/*
 ** Skills
 */
var currentYear = new Date().getFullYear();
var skillsArray = [
    // title, icon, experience(automatically handled), subtitle
    ["Front-end development", "front-end", Math.abs(2019 - currentYear) + "+", "HTML, CSS, SASS, BOOTSTRAP, FLEXBOX, JS, JQUERY, GIT."],
    ["UX/UI", "ux-ui", Math.abs(2018 - currentYear) + "+", "Client panels, websites, landing pages, etc. I'd like to get my feet wet in the gaming industry too."],
    ["Graphic design", "graphic-design", Math.abs(2015 - currentYear) + "+", "Web oriented rather than print. Grids and alignments are my strongest weapons and greatest weakness."],
    ["Vector graphics", "vector-graphics", Math.abs(2016 - currentYear) + "+", "If it can be a vector, it should be a vector. Static resources and SVG animations with <a href='https://greensock.com/' target='_blank'>GSAP</a>. I've done some brand identity design too."],
    ["Adobe Photoshop", "photoshop", Math.abs(2014 - currentYear) + "+", "Photo manipulation, design resources, mock-ups, splash art, cover photos. I've tried everything."],
    ["Adobe Illustrator", "illustrator", Math.abs(2014 - currentYear) + "+", "Design resources, SVG, wireframes, icons, logos. Both RGB & CMYK."],
    ["Adobe Premiere Pro", "premiere-pro", Math.abs(2017 - currentYear) + "+", "Not my main occupation but I have fun with it every now and then."],
    ["Adobe After Effects", "after-effects", Math.abs(2017 - currentYear) + "+", "Super useful if you have to animate a maze and a line running from start to finish."]
];

// populate skill cards
populateSkills = function() {
    var skills = document.getElementsByClassName("card-skills");

    for(let i = 0; i < skillsArray.length; i++) {
        skills[i].innerHTML =
            '<div class="card-skills-info">' +
                '<h3 class="skill-title">' + skillsArray[i][0] + '</h3>' +
                '<div class="skill-icon"><img src="static/' + skillsArray[i][1] + '.svg"></img></div>' +
                '<p class="skill-experience">' + skillsArray[i][2] + ' years of experience</p>' +
                '<p class="skill-subtitle">' + skillsArray[i][3] + '</p>' +
            '</div>' +
            '<div class="card-background"></div>';
    };
}

redirectToProject = function(arg) {
    window.open(($(arg).attr("id").replace("-button", "") + ".html"), "_self");
};

backToMain = function() {
    if(window.history.length > 1) {
        window.history.back();
    } 
    else {
        window.location.replace("https://theshadowops.com");
    }
};

// fix animation link.

// scrollAnim = function(elem) {
//     $(window).scroll(function() {
//         var top_of_element = elem.offset().top;
//         var bottom_of_element = elem.offset().top + elem.outerHeight();
//         var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//         var top_of_screen = $(window).scrollTop();

//         if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
//             elem.addClass("active");
//         } 
//         else {
//             elem.removeClass("active");
//         }
//     });
// }