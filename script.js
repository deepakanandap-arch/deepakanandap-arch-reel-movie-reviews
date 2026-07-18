console.log("My script is connecterd")
let followButtons = document.querySelectorAll(".follow-button");

followButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.textContent = "Following";
    });
});
