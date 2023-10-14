let button=document.querySelector("#scroll");
button.addEventListener("click",goto);

function goto(){
    let content=document.querySelector(".content")
    if(content){
        content.scrollIntoView({
        behavior:"smooth"
    });}
    else{
        document.querySelector(".weekly-list").scrollIntoView({
            behavior:"smooth"
        });
    }
    console.log("hello");
}