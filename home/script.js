const token = localStorage.getItem("@token-exemplo")
if (!token) {

    window.location.replace("../index.html")
}
const user = JSON.parse(localStorage.getItem("@user-exemplo"))
console.log(user)
const title = document.querySelector("h1")
title.innerText = user.email