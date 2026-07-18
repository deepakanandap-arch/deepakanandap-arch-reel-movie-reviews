console.log("My script is connecterd")
let followButtons = document.querySelectorAll(".follow-button");

followButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.textContent === "Follow") {
            button.textContent = "Following";
        } else {
            button.textContent = "Follow";
        }
    });
});

let movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("watched");
  });
});
