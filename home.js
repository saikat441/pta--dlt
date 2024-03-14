
let title=document.getElementById("title");
let title1=document.getElementById("title1");
let title2=document.getElementById("title2");
let title3=document.getElementById("title3");
let title4=document.getElementById("title4");
let title5=document.getElementById("title5");


function fetchData() {
    fetch('https://saikat441.github.io/programming-Test-Assignment---DLT/data.json')
    .then(response => response.json())
    .then(data => {
    // console.log(data);
    title.innerHTML+= data[0].title;
    title1.innerHTML+= data[1].title;
    title2.innerHTML+= data[2].title;
    title3.innerHTML+= data[3].title;
    title4.innerHTML+= data[4].title;
    title5.innerHTML+= data[5].title;
    
    title.addEventListener("click",()=>{
        window.open(data[0].link, "_blank");

    });
    title1.addEventListener("click",()=>{
        window.open(data[1].link, "_blank");

    });
    title2.addEventListener("click",()=>{

        window.open(data[2].link, "_blank");

    });
    title3.addEventListener("click",()=>{

        window.open(data[3].link, "_blank");

    });
    title4.addEventListener("click",()=>{

        window.open(data[4].link, "_blank");

    });
    title5.addEventListener("click",()=>{

        window.open(data[5].link, "_blank");

    });
    })
 }

 fetchData();