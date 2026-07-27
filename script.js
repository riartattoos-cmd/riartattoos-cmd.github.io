// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Gallery Image Zoom
const images = document.querySelectorAll(".gallery-grid img");

const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,0.95)";
overlay.style.display = "none";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "9999";

const zoomImg = document.createElement("img");
zoomImg.style.maxWidth = "90%";
zoomImg.style.maxHeight = "90%";
zoomImg.style.border = "3px solid #d4af37";
zoomImg.style.borderRadius = "10px";

overlay.appendChild(zoomImg);
document.body.appendChild(overlay);

images.forEach(img => {
    img.addEventListener("click", () => {
        zoomImg.src = img.src;
        overlay.style.display = "flex";
    });
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});

// Fade-in Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);
});
