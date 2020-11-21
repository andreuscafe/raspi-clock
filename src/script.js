const hoursEl = document.querySelector('.hours'),
      minutesEl = document.querySelector('.minutes'),
      secondsEl = document.querySelector('.seconds'),
      dateEl = document.querySelector('.date');

function updateClock() {
  const now = new Date();
  
  const time = now.toLocaleString('es').split(" ")[1].split(":");
    
  hoursEl.innerText = time[0];
  minutesEl.innerText = time[1];
  secondsEl.innerText = time[2];
  
  const day = now.toLocaleString('es', {  weekday: 'short' }).substr(0, 3);
  const dayNumber = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
  const month = now.toLocaleString('es', {  month: 'short' }).substr(0, 3);
  
  let dateString = `${day} ${dayNumber} ${month}`;
  dateEl.innerText = dateString;
}

updateClock();
setInterval(updateClock, 1000);