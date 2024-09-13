const cont = document.querySelector(".lets-talk");
const contact = document.querySelector(".contact-info p");

let isNumberShown = false; // To track the state

cont.addEventListener("click", () => {
  if (!isNumberShown) {
    contact.textContent = "+254 74656 9025";
    cont.textContent = "Hide Number";
    isNumberShown = true;
  } else {
    contact.textContent = "+254 7**56 ***5";
    cont.textContent = "Let's talk";
    isNumberShown = false;
  }
});
