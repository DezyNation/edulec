const expbtn = document.getElementById("experienced");
const fresherbtn = document.getElementById("fresher");
const experience = document.getElementById("experience")

expbtn.addEventListener("click", ()=>{
    expbtn.style.background = "var(--colorfour)";
    expbtn.style.color = "#FFF";
    fresherbtn.style.color = "var(--bgcolor)";
    fresherbtn.style.background = "aqua";
    experience.setAttribute('value', "EXPERIENCED")
})

fresherbtn.addEventListener("click", ()=>{
    fresherbtn.style.background = "var(--colorfour)";
    fresherbtn.style.color = "#FFF";
    expbtn.style.color = "var(--bgcolor)";
    expbtn.style.background = "aqua";
    experience.setAttribute('value', "FRESHER")
})