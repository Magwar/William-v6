const cont = document.querySelector(".lets-talk");
const contact = document.querySelector(".contact-info p");
const email = document.querySelector(".contact-info a");

let isNumberShown = false; // To track the state

cont.addEventListener("click", () => {
  if (!isNumberShown) {
    contact.textContent = "+254 74656 9025";
    email.style.display = "block";
    email.textContent = "support@MaguaWilliam.dev";
    isNumberShown = true;

    setTimeout(() => {
      contact.textContent = "+254 7**56 ***5";
      email.style.display = "none";
      isNumberShown = false;
    }, 7000);
  }
});
