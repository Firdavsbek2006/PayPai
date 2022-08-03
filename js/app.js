

var elBtn = document.querySelector(".dark-btn")
var elBody = document.querySelector("body")

elBtn.addEventListener("click", function() {
    elBody.classList.toggle("active")
})