let menuBtn 
let sideNav
let menu
menuBtn = document.getElementById("menuBtn")
sideNav = document.getElementById("sideNav")
menu = document.getElementById("menuIcon")
sideNav.style.display="none"
menuIcon.onclick = () => {
    
    if(sideNav.style.display == "none"){
        sideNav.style.display = "block"
    }
    else{
        sideNav.style.display = "none"
    }
}