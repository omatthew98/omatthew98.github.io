function clickSign() {
    var current = document.getElementById("topImg").src;
    if (current.includes("off")) {
        document.getElementById("topImg").src = "sign_on.png";
    } else {
        document.getElementById("topImg").src = "sign_off.png";
    }
}