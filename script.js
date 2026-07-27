// Disable right click
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// Disable image dragging
document.querySelectorAll("img").forEach(function(img) {
    img.setAttribute("draggable", "false");
});

// Welcome message
window.onload = function () {
    console.log("Welcome to RIAR TATTOOS");
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
