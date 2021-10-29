console.log("hallo welt")

let mail = document.getElementById("email")
let subscribedEmail = document.getElementById("subscribedEmail")
let beforeSubscribtion = document.getElementById("beforeSubscribtion")
let afterSubscribtion = document.getElementById("afterSubscribtion")


function subscribe() {
    console.log(mail.value)
    subscribedEmail.innerHTML = (mail.value)
    subscribedEmail.style.fontSize = "2rem"
    subscribedEmail.style.color = "#ff3571"
    beforeSubscribtion.style.display = "none"
    afterSubscribtion.style.display = "block"
}

function backToMainPage() {
    beforeSubscribtion.style.display = "block"
    afterSubscribtion.style.display = "none"
}