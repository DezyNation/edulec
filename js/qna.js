const main = document.getElementById("main");
const qnaform = document.getElementById("qnaform");
const sidepanel = document.getElementById("sidepanel");

function openChat(){
    qnaform.style.right = "2vw"
}
function closeChat(){
    qnaform.style.right = "-25vw"
}

main.addEventListener("click", ()=>{
    closeChat();
})
sidepanel.addEventListener("click", ()=>{
    closeChat();
})
