const header_bar = document.querySelector(".contents .header .row .col-md-9 .header-bar")

window.addEventListener("resize", (event)=>{
  if(event.target.innerWidth > 768){
    header_bar.classList.add("hidden")
  }
  else{
    header_bar.classList.remove("hidden")
  }
})