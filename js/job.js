const expbtn = document.getElementById("experienced");
const fresherbtn = document.getElementById("fresher");
const experience = document.getElementById("experience");
const hsccertname = document.getElementById("hsccertname");
const natidname = document.getElementById("natidname");
const resumename = document.getElementById("resumename");

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

function getHsc(file){
    var HSCname = file.value.split("\\").pop();
    hsccertname.innerHTML = HSCname;
}
function getNatId(file){
    var NatIDname = file.value.split("\\").pop();
    natidname.innerHTML = NatIDname;
}
function getResume(file){
    var Resumename = file.value.split("\\").pop();
    resumename.innerHTML = Resumename;
}