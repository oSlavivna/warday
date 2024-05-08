const spanday = document.querySelector(".count");
const startDate = new Date("2022-02-22");
const today = new Date();

const millisecondsInDay = 1000 * 60 * 60 * 24;

const diffDays = Math.ceil(
  (today.getTime() - startDate.getTime()) / millisecondsInDay
);

spanday.textContent = diffDays;

// якесь там лютого .....................

const dayfeb = document.querySelector(".dayfeb");

const febToday = startDate.getDate() + diffDays;

dayfeb.textContent = febToday;

// фон

const backgroundElement = document.querySelector(".background");

function setAnimation() {
  const currentAnimation = backgroundElement.style.animation;

  backgroundElement.style.animation = "";

  setTimeout(() => {
    backgroundElement.style.animation = currentAnimation;
  }, 10);
}

// Викликаємо функцію setAnimation()
setInterval(setAnimation, 150000);
