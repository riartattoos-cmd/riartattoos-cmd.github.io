// Disable right click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// Disable drag
document.querySelectorAll("img").forEach(img=>{
    img.setAttribute("draggable","false");
});

// Disable common save shortcuts
document.addEventListener("keydown",function(e){

if(e.ctrlKey && (e.key==="s" || e.key==="u" || e.key==="S" || e.key==="U")){
e.preventDefault();
}

if(e.key==="F12"){
e.preventDefault();
}

});

// Fade animation
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll("section").forEach(sec=>{
observer.observe(sec);
});
