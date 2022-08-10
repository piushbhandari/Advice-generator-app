const newBtn = document.querySelector(".newBtn");
const adviceNumber = document.querySelector(".count");
const adviceText = document.querySelector(".advice");
const loadingNotif = document.querySelector(".main__loading-notif");
const adviceContainer = document.querySelector(".main__advice");
let apiUrl = "https://api.adviceslip.com/advice";

window.addEventListener("DOMContentLoaded", getAdvice);
newBtn.addEventListener("click", getAdvice);

function getAdvice(e) {
  e.preventDefault();
  newBtn.disabled = true;

  fetchApi().then((s) => {
    const { id, advice } = s.slip;
    adviceNumber.textContent = id;
    adviceText.textContent = advice;
    newBtn.disabled = false;
  });
}
async function fetchApi() {
  try {
    loadingNotif.classList.add("active");
    const response = await fetch(apiUrl);
    const data = await response.json();
    loadingNotif.classList.remove("active");
    return data;
  } catch (error) {
    console.log(error);
  }
}
