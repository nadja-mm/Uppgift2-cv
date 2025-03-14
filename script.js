//darkmode 
//källa och inspiration från youtube

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    if(darkmode !== "active"){
        enableDarkmode()
    }
    else{
        disableDarkmode()
    }
})

//Fetcha min JSON fil
fetch("cv.json")
.then(response => response.json())
.then(data => {
    const container = document.getElementById("cv-container");

})

