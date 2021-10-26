let timer_show = document.getElementById("timer");

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function timeNormalize(time) {
  return (time < 10) ? '0' + time : `${time}`
}

let end_date = {
  "full_year": "2021",
  "month": "11",
  "day": "21",
  "hours": "00",
  "minutes": "00",
  "seconds": "00"
}

let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

timer = setInterval(function () {
  let now = new Date();
  let date = new Date(end_date_str);
  let ms_left = diffSubtract(now, date);
  if (ms_left <= 0) {
    clearInterval(timer);
    timer_show.innerHTML = `0  :  0  :  0  :  0`;
  } else {
    let res = new Date(ms_left);
    const strDate = timeNormalize(res.getUTCDate() - 1)
    const strHours = timeNormalize(res.getUTCHours())
    const strMinutes = timeNormalize(res.getUTCMinutes())
    const strSeconds = timeNormalize(res.getUTCSeconds())
    let str_timer = `<span class="t_date">${strDate}</span>&nbsp;<span class="t_hour">${strHours}</span>&nbsp;<span class="t_min">${strMinutes}</span>&nbsp;<span class="t_sec">${strSeconds}</span>`;
    timer_show.innerHTML = str_timer;
  }
}, 1000)

