// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");
errorModal.setAttribute("class", "hidden");

document.querySelectorAll(".like-glyph").forEach((heart) => {
  heart.addEventListener("click", (e) => {
    mimicServerCall()
      .then(() => changeHeart(e))
      .catch(handleError);
  });
});

// Handler Functions
function changeHeart(event) {
  const likeGlyph = event.target;
  console.log(likeGlyph);
  if (likeGlyph.textContent === EMPTY_HEART) {
    likeGlyph.textContent = FULL_HEART;
    likeGlyph.classList.add("activated-heart");
  } else if ((likeGlyph.textContent = FULL_HEART)) {
    likeGlyph.textContent = EMPTY_HEART;
    likeGlyph.classList.remove("activated-heart");
  }
}
function handleError(message) {
  errorModal.classList.remove("hidden");
  document.getElementById("modal-message").textContent = message;
  setTimeout(() => errorModal.classList.add("hidden"), 3000);
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
