const home =document.querySelectorAll("h")
for(let i=0;i<6;i++){
    home[i].onmouseover=()=>{
        home[i].nextElementSibling.style.display="block"  
    }
    home[i].onmouseout=()=>{
        home[i].nextElementSibling.style.display="none"
    }
    home[i].onmousemove=()=>{
        home[i].nextElementSibling.style.top=`${e.clientY-home[i].getBoundingClientRect}`
        home[i].nextElementSibling.style.top=`${e.clientX-home[i].getBoundingClientRect}`
    }
}