const btn = document.querySelector("div.btn:first-child button");
function handle(){
    const clickc = "clicked";
    if(btn.classList.contains(clickc)){
        btn.innerText="확인";
        btn.classList.remove(clickc);
    }else{
        btn.innerText="취소";
        btn.classList.add(clickc);
    }
    //btn.classList.toggle("clicked");
}
btn.addEventListener("click", handle)