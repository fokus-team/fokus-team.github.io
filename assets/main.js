
// Dropdown
$('.dropdown')
    .dropdown({
        action: 'hide'
    });

// Animation
var anim = lottie.loadAnimation({
    container: document.getElementById('sunflower'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/sunflower_with_title.json'
});