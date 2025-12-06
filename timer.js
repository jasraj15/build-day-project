const secInput = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const timeBox = document.getElementById("time");
const beep = document.getElementById("beep");

if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

startBtn.onclick = () => {
  let sec = Number(secInput.value);
  if (!sec || sec <= 0) {
    alert("Enter valid seconds!");
    return;
  }

  timeBox.textContent = sec;
  timeBox.classList.add("blink");

  let timer = setInterval(() => {
    sec--;
    timeBox.textContent = sec;

    if (sec <= 0) {
      clearInterval(timer);
      timeBox.classList.remove("blink");

      if (Notification.permission === "granted") {
        new Notification("⏰ Timer Finished!", {
          body: "Your countdown is over!",
        });
      }

      beep.play();
    }
  }, 1000);
};
