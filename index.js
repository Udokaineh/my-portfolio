// document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
// body = document.querySelector("body")
// sideHeader = Document.getElementById("hideDiv")
// footer = document.getElementById("footer")

menuIcon = document.getElementById("menuIcon")
menu = document.getElementById("menu")
menuItem = document.getElementsByClassName("menuItem")
let checker = true

menuIcon.addEventListener("click", ()=>{
  if(checker === true) {
    menu.style.display = "block"
    checker = false
  }else if(checker === false){
    menu.style.display = "none"
    checker = true
  }
})

    for(let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener("click", ()=>{
            menu.style.display = "none"
        })
    }
