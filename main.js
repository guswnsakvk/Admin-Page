const window_with = window.innerWidth
const header_bar = document.querySelector(".contents .header .header-bar")
const search = document.querySelector(".contents .header .Search")
const bell = document.querySelector(".contents .header .fa-bell")
const envelope = document.querySelector(".contents .header .fa-envelope")
const username = document.querySelector(".contents .header .name")

if (window_with > 768){
  search.classList.remove("none")
  bell.classList.remove("hidden")
  envelope.classList.remove("hidden")
  username.classList.remove("none")
}
else{
  header_bar.classList.remove("hidden")
}

window.addEventListener("resize", (event)=>{
  if(event.target.innerWidth > 768){
    header_bar.classList.add("hidden")
    search.classList.remove("none")
    bell.classList.remove("hidden")
    envelope.classList.remove("hidden")
    username.classList.remove("none")
  }
  else{
    header_bar.classList.remove("hidden")
    search.classList.add("none")
    bell.classList.add("hidden")
    envelope.classList.add("hidden")
    username.classList.add("none")
  }
})