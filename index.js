import calculate from "./index3.js"
import copyToClipboard from "./index2.js"
import themeSwitcher from "./index4.js"
import clear from "./index5.js"
import charKeyBtn from "./index6.js"
import ev from "./index7.js"


document.querySelectorAll(".charKey").forEach(charKeyBtn)

document.getElementById('clear').addEventListener('click',clear)

document.getElementById ('input').addEventListener('keydown',ev)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click',copyToClipboard)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)






