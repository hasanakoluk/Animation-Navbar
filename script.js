const icon = document.querySelector(".icon")

icon.addEventListener("click",()=>{
  const navbar = document.getElementById(icon.dataset.target)
  if(!navbar.classList.contains("active")){
    navbar.classList.add("active")
    navbar.style.animation = "hamburger .3s linear"
  }else{
    navbar.style.animation = "hamburger-hide .3s linear"
    setTimeout(()=>{
        navbar.classList.remove("active")
       
    },400)

  }
  
})


