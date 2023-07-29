// document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
// sideHeader = Document.getElementById("hideDiv")
body = document.querySelector("body")
landingPage = document.getElementById("home")
displayText1 = document.getElementById ("text1")
displayText2 = document.getElementById ("text2")
header = document.getElementById("header")
triangles= document.getElementsByClassName("triangle")
titles = document.getElementsByClassName("title")
spans = document.getElementsByTagName("span")
toggles = document.getElementsByClassName("toggle")
moon = document.getElementById("moon")
sun = document.getElementById("sun")
footerr = document.getElementById("footerr")
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

    const darkMode = () => {
      sun.style.visibility = "visible"
      moon.style.visibility = "hidden"
      body.style.color = "#fff"
      landingPage.style.backgroundColor = "#0c0c0c"
      displayText1.style.color = "#fff"
      displayText2.style.color = "#d5d5d5"
      header.style.backgroundColor = "#264577"
      footerr.style.backgroundColor = "#264577"

      for(let i = 0; i < spans.length; i++){
        spans[i].style.color = "#fff"
      }

      for(let i = 0; i < triangles.length; i++){
        triangles[i].style.borderBottom = "87px solid #264577"
      }

      for(let i = 0; i < titles.length; i++){
        titles[i].style.color = "#d5d5d5"
      }

      for(let i = 0; i < toggles.length; i++){
        toggles[i].style.color = "#fff"
      }

    }
    moon.addEventListener("click", darkMode)
   
    
    const lightMode = () => {
      sun.style.visibility = "hidden"
      moon.style.visibility = "visible"
      body.style.color = "#010101"
      landingPage.style.backgroundColor = "#fff"
      displayText1.style.color = "#010101"
      displayText2.style.color = "#242424"
      header.style.backgroundColor = "#2A3E5E"
      footerr.style.backgroundColor = "#2A3E5E"

      for(let i = 0; i < spans.length; i++){
        spans[i].style.color = "#010101"
      }

      for(let i = 0; i < triangles.length; i++){
        triangles[i].style.borderBottom = "87px solid #2A3E5E"
      }

      for(let i = 0; i < titles.length; i++){
        titles[i].style.color = "#6e6e6e"
      }

      for(let i = 0; i < toggles.length; i++){
        toggles[i].style.color = "#010101"
      }
    }
    sun.addEventListener ("click", lightMode)