let body = document.querySelector("body");

let btn = document.querySelector("button");
let mode = 1;

btn.addEventListener("click", ()=>{
    if(mode === 1)
    {
        body.classList.add("dark");
        body.classList.remove("light");
        document.querySelector("p").style.color="white";
        mode = 0;
    }
    else{
        body.classList.remove("dark");
        body.classList.add("light");
        document.querySelector("p").style.color="black";
        mode = 1;
    }
})