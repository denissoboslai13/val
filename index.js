const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
let startH = 2
let startW = 3
let noHeight = 75
let noWidth = 85
let yesFont = 35
let noFont = 35
let gap = 70
let delVal = 0

document.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("clickVal");
});

noBtn.addEventListener("click" ,() => {
    startH += 1.5
    startW += 3
    noHeight -= 5
    noWidth -= 6
    yesFont += 6.5
    noFont -= 2.5
    gap -= 5
    delVal += 1

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

