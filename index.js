
const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const nav = document.querySelector('.nav');

menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);

function menuTog(e){
    nav.classList.toggle('active')
}

document.addEventListener("DOMContentLoaded", function() {
    const icon = document.getElementById("movingicon");
    let position = 0; // Initial position
    const speed = 5; // Speed of the movement, adjust as needed

    function moveIcon() {
        if (position >= window.innerWidth) {
            position = -icon.width; // Reset position when it moves out of the viewport
        } else {
            position += speed;
        }
        icon.style.left = position + 'px';
        requestAnimationFrame(moveIcon);
    }

    moveIcon(); // Start the animation
});