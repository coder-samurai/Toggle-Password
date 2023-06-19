let PasswordInput = document.getElementById("PasswordInput");
let ButtonShowHide = document.getElementById("ButtonShowHide");


ButtonShowHide.onclick = function() {
    if (ButtonShowHide.getAttribute("data") == "show") {
        ButtonShowHide.innerHTML = "Hide";
        ButtonShowHide.setAttribute("data", "hide");
        PasswordInput.setAttribute("type", "text");
    } else {
        ButtonShowHide.innerHTML = "Show";
        ButtonShowHide.setAttribute("data", "show");
        PasswordInput.setAttribute("type", "password");
    }
}