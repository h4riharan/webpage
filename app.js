const sections = document.querySelectorAll('section');
const nextdiv = document.querySelector('.nextdiv');
const gradients = [
    "linear-gradient(to bottom, #56ccf2, #2f80ed)",
    "linear-gradient(to bottom, #ffafbd, #ffc3a0)",
    "linear-gradient(to bottom, #4e54c8, #8f94fb)",
    "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    "linear-gradient(to left, #457fca, #5691c8)"
];

const option ={
    threshold:0.7
};

let observer = new IntersectionObserver(navcheck,Option);

function navcheck(entries){
    entries.forEach(entry=>{
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page = ${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top:coords.top,
            left: coords.left
        };

        if(entry.isIntersecting){
            nextdiv.style.setProperty('left',`${directions.left}px`);
            nextdiv.style.setProperty('top',`${directions.top}px`);
            nextdiv.style.setProperty('width',`${directions.width}px`);
            nextdiv.style.setProperty('height',`${directions.height}px`);
            nextdiv.style.background=gradients[gradientIndex];
        }
        //console.log(className);
        //console.log(entries);
    });
}
sections.forEach(section=>{
        observer.observe(section);
    });