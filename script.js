window.addEventListener("load",()=>setTimeout(()=>{const l=document.getElementById("loader");l.style.opacity="0";setTimeout(()=>l.remove(),900)},500));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
const progress=document.querySelector(".progress span");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h?scrollY/h*100:0)+"%";const p=document.querySelector(".parallax");if(p)p.style.transform=`translateY(${scrollY*.1}px) scale(1.08)`},{passive:true});