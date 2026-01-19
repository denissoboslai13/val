const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
let w = window.innerWidth;
let h = window.innerHeight;

console.log(w)
if (w<600) {
    var gap = 15
} else {
    var gap = 70
}
let startH = 2
let startW = 3
let noHeight = 75
let noWidth = 85
let yesFont = 35
let noFont = 35
let delVal = 0

var x = window.matchMedia("(max-width: 600px)")

const btnContainer = document.getElementById('btnContainer')

document.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("clickVal");
});

noBtn.addEventListener("click" ,() => {
    delVal += 1

    if (x.matches) {
        startH += 1
        startW += 1.5
        noHeight -= 3
        noWidth -= 4
        yesFont += 3.5
        noFont -= 2
        gap -= 2
        btnContainer.style.gap = `${gap}vh`;
    } else {
        gap -=5
        startH += 1.5
        startW += 3
        noHeight -= 5
        noWidth -= 6
        yesFont += 6.5
        noFont -= 2.5
    }

    localStorage.setItem("clickVal", delVal)

    if (delVal === 13){
        noBtn.remove()
    }

    console.log(startH, startW)
    document.documentElement.style.cssText = `--height: ${startH}vh; 
    --width: ${startW}vh;
    --noHeight: ${noHeight}px;
    --noWidth: ${noWidth}px;
    --yesFont: ${yesFont}px;
    --noFont: ${noFont}px;
    --gap: ${gap}vh`
})

yesBtn.addEventListener("click", () => {
    window.location = 'index2.html'
})

