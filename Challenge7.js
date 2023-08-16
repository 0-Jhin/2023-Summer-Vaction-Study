const h1 = document.querySelector(".Click h1");
let count = 0;

function handleClick(){
    count ++;
    h1.innerText = count;
}
h1.addEventListener("click", handleClick);