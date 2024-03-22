let input=document.querySelector("textarea");
let button=document.querySelector("button");
let body=document.querySelector("body");
let h1=document.querySelector("h1");
let container=document.querySelector(".container");
console.log(typeof input);
input.addEventListener('input',()=>{

    localStorage.setItem("savedText",input.value);
    console.log(localStorage.getItem("savedText"));
});
input.value=localStorage.getItem("savedText");
let count=0;
button.addEventListener('click',()=>{
    count++;
    if(count%2==0)
    {
        body.style.backgroundColor="white";
        input.style.color="black";
        input.style.backgroundColor="white";
        h1.style.color="black";
        container.style.boxShadow="0 0 15px 0 black";
    }
    else{
        body.style.backgroundColor="black";
        input.style.color="white";
        input.style.backgroundColor="black";
        h1.style.color="white";
        container.style.boxShadow="0 0 15px 0 white";
    }
})