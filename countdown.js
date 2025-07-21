
const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-09-21T15:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.textContent = "Our wedding has begun!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days} days, ${hours} hrs, ${mins} mins, ${secs} secs`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
