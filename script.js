const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
wifiIcon = wrapper.querySelector(".icon"),
title = wrapper.querySelector("span"),
closeIcon = wrapper.querySelector(".close-icon"),
supTitle = wrapper.querySelector("p");

window.onload = ()=>{
  function ajax(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts",true);
    xhr.onload = ()=>{
     if (xhr.status == 200 && xhr.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You're online now";
        supTitle.innerText = "Hurray! Internet is connected";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

        closeIcon.onclick = ()=>{
           wrapper.classList.add("hide");
        }

        setTimeout(()=>{
            wrapper.classList.add("hide");
        },5000);


    }else{
        offline();
     }
    }
    xhr.onerror = ()=>{
        offline();
    }
    xhr.send();
  }

function offline(){
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    supTitle.innerText = "Opps! Internet is disconnected";
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
}

 setInterval(()=>{
     ajax();
 },100)
 
}


