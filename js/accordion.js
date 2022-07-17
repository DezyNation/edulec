const accordion = document.getElementsByClassName("accordion-div--main");


for(i=0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        var accordionDocs = this.nextElementSibling;
        accordionDocs.classList.toggle("active");
    })
}